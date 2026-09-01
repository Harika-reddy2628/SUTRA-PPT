import React from 'react';
import { motion } from 'framer-motion';

export interface RadarDataPoint {
  label: string;
  value: number; // 0 - 100
  baseline?: number; // 0 - 100
}

interface RadarChartCardProps {
  title?: string;
  subtitle?: string;
  data: RadarDataPoint[];
  accentColor?: string;
  fillColor?: string;
  className?: string;
  showComparison?: boolean;
}

export const RadarChartCard: React.FC<RadarChartCardProps> = ({
  title = "By Category",
  subtitle = "Sales performance by category (Jan - Jun 2024)",
  data,
  accentColor = "#006C4C",
  fillColor = "rgba(0, 108, 76, 0.25)",
  className = "",
  showComparison = true
}) => {
  const width = 340;
  const height = 230;
  const cx = width / 2;
  const cy = height / 2 + 5;
  const radius = 72;
  const numAxes = data.length; // 6 axes

  // Helper to compute (x, y) for a given axis index and normalized value (0-1)
  const getCoordinates = (index: number, normalizedValue: number, rOffset = 0) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / numAxes;
    const r = radius * normalizedValue + rOffset;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    };
  };

  // Concentric polygon levels: 25%, 50%, 75%, 100%
  const levels = [0.25, 0.5, 0.75, 1.0];

  // Polygon path string generator
  const generatePolygonPath = (values: number[]) => {
    return values
      .map((val, idx) => {
        const { x, y } = getCoordinates(idx, Math.min(Math.max(val, 5), 100) / 100);
        return `${x},${y}`;
      })
      .join(' ');
  };

  const sutraPoints = generatePolygonPath(data.map(d => d.value));
  const baselinePoints = generatePolygonPath(data.map(d => d.baseline ?? 40));

  return (
    <div className={`bg-white rounded-[22px] border border-[#E1E3E8] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between ${className}`}>
      
      {/* Card Header matching user's exact uploaded component */}
      <div className="mb-1">
        <h4 className="text-base sm:text-lg font-bold text-[#191C1E] tracking-tight font-sans">
          {title}
        </h4>
        <p className="text-xs text-[#74777F] font-sans font-normal">
          {subtitle}
        </p>
      </div>

      {/* Radar SVG Chart with full visibility of all 6 labels */}
      <div className="relative w-full flex items-center justify-center my-auto overflow-visible py-1">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full max-w-[320px] h-auto overflow-visible select-none"
        >
          {/* Concentric Hexagonal Grid Lines */}
          {levels.map((level, lvlIdx) => {
            const levelPoints = Array.from({ length: numAxes })
              .map((_, i) => {
                const { x, y } = getCoordinates(i, level);
                return `${x},${y}`;
              })
              .join(' ');

            return (
              <polygon
                key={lvlIdx}
                points={levelPoints}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth={lvlIdx === levels.length - 1 ? "1.5" : "1"}
              />
            );
          })}

          {/* Radial Spokes from center to vertices */}
          {data.map((_, idx) => {
            const outer = getCoordinates(idx, 1.0);
            return (
              <line
                key={idx}
                x1={cx}
                y1={cy}
                x2={outer.x}
                y2={outer.y}
                stroke="#E2E8F0"
                strokeWidth="1"
              />
            );
          })}

          {/* Standard Baseline Comparison Polygon (Light Gray / Dashed) */}
          {showComparison && (
            <motion.polygon
              points={baselinePoints}
              fill="rgba(148, 163, 184, 0.12)"
              stroke="#94A3B8"
              strokeWidth="1.25"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Project SUTRA Animated Radar Polygon */}
          <motion.polygon
            points={sutraPoints}
            fill={fillColor}
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinejoin="round"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, points: sutraPoints }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          />

          {/* SUTRA Vertex Dots */}
          {data.map((d, idx) => {
            const pt = getCoordinates(idx, d.value / 100);
            return (
              <circle
                key={idx}
                cx={pt.x}
                cy={pt.y}
                r="3"
                fill={accentColor}
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Outer Vertex Labels (Clean & Fully Contained) */}
          {data.map((d, idx) => {
            const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / numAxes;
            const labelCoord = getCoordinates(idx, 1.0, 16);
            
            // Text alignment based on horizontal angle
            let textAnchor: "middle" | "start" | "end" = "middle";
            if (Math.cos(angle) > 0.25) textAnchor = "start";
            else if (Math.cos(angle) < -0.25) textAnchor = "end";

            let dy = "0.35em";
            if (Math.sin(angle) < -0.7) dy = "-0.3em"; // top label
            if (Math.sin(angle) > 0.7) dy = "0.95em";  // bottom label

            return (
              <text
                key={idx}
                x={labelCoord.x}
                y={labelCoord.y}
                textAnchor={textAnchor}
                dy={dy}
                className="font-sans text-[10.5px] sm:text-[11px] font-medium fill-[#64748B]"
              >
                {d.label}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Legend Footer */}
      {showComparison && (
        <div className="flex items-center justify-center gap-4 pt-1.5 border-t border-[#F1F5F9] font-mono text-[10.5px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></span>
            <span className="font-bold text-[#191C1E]">SUTRA (98%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 border-t border-dashed border-[#94A3B8]"></span>
            <span className="text-[#64748B]">PX4 Baseline (48%)</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default RadarChartCard;
