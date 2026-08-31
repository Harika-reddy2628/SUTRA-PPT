import React, { useEffect, useRef } from 'react';

export const DroneMeshCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Swarm UAV nodes and subtle network beacons
    const nodes = Array.from({ length: 22 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: i < 5 ? 3.5 : 2.0,
      isUav: i < 5,
      id: i < 5 ? `UAV-0${i + 1}` : null,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with soft organic lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulse += 0.025;

        // Wrap edges
        if (n1.x < 0) n1.x = width;
        if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height;
        if (n1.y > height) n1.y = 0;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 190) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            const alpha = (1 - dist / 190) * 0.14;
            ctx.strokeStyle = n1.isUav && n2.isUav 
              ? `rgba(24, 58, 43, ${alpha * 2.2})` 
              : `rgba(74, 122, 88, ${alpha})`;
            ctx.lineWidth = n1.isUav && n2.isUav ? 1.2 : 0.6;
            ctx.stroke();
          }
        }

        // Draw node center
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = n1.isUav ? '#183A2B' : '#7A8C83';
        ctx.fill();

        // Draw animated pulse rings for UAV nodes
        if (n1.isUav) {
          const ringRadius = n1.radius + Math.sin(n1.pulse) * 8 + 8;
          ctx.beginPath();
          ctx.arc(n1.x, n1.y, Math.max(0, ringRadius), 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(74, 122, 88, 0.22)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Cursor proximity field
      const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
      grad.addColorStop(0, 'rgba(74, 122, 88, 0.05)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
};
