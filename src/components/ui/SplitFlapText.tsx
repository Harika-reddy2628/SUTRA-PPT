import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface SplitFlapTextProps {
  words: string[];
  flipDuration?: number;
  stagger?: number;
  cycleDelay?: number;
  charset?: 'alphanumeric' | 'alphabetic' | 'numeric' | 'all' | string;
  flipsPerChar?: number;
  tileColor?: string;
  textColor?: string;
  tileRadius?: number;
  gap?: number;
  fontSize?: number;
  loop?: boolean;
  padTo?: number;
  className?: string;
  border?: string;
}

const CHARSETS: Record<string, string> = {
  alphanumeric: ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.:/',
  alphabetic: ' ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: ' 0123456789.:%-+',
  all: ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/'
};

export const SplitFlapText: React.FC<SplitFlapTextProps> = ({
  words = ["LAUNCH READY"],
  flipDuration = 0.12,
  stagger = 0.06,
  cycleDelay = 2400,
  charset = 'alphanumeric',
  flipsPerChar = 8,
  tileColor = '#111827',
  textColor = '#F8FAFC',
  tileRadius = 6,
  gap = 4,
  fontSize = 16,
  loop = true,
  padTo,
  className,
  border = '1px solid rgba(255, 255, 255, 0.14)'
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const charsPool = typeof charset === 'string' && CHARSETS[charset] ? CHARSETS[charset] : CHARSETS.alphanumeric;
  
  // Calculate max length needed
  const maxLen = padTo || Math.max(...words.map(w => w.length));
  
  const currentTargetWord = (words[wordIndex] || '').toUpperCase().padEnd(maxLen, ' ');
  const [displayChars, setDisplayChars] = useState<string[]>(
    currentTargetWord.split('').map(c => c)
  );

  const prevTargetWordRef = useRef(currentTargetWord);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // When target word changes, animate each tile with stagger
    const targetWord = (words[wordIndex] || '').toUpperCase().padEnd(maxLen, ' ');
    const chars = targetWord.split('');

    chars.forEach((targetChar, colIdx) => {
      const delay = colIdx * (stagger * 1000);

      setTimeout(() => {
        let step = 0;
        const totalSteps = flipsPerChar;
        const stepInterval = (flipDuration * 1000) / totalSteps;

        const interval = setInterval(() => {
          step++;
          if (step >= totalSteps) {
            clearInterval(interval);
            setDisplayChars(prev => {
              const next = [...prev];
              next[colIdx] = targetChar;
              return next;
            });
          } else {
            // Pick random intermediate character from pool
            const randomChar = charsPool[Math.floor(Math.random() * charsPool.length)];
            setDisplayChars(prev => {
              const next = [...prev];
              next[colIdx] = randomChar;
              return next;
            });
          }
        }, stepInterval);
      }, delay);
    });

    prevTargetWordRef.current = targetWord;

    if (words.length > 1) {
      const totalAnimationTime = (maxLen * stagger * 1000) + (flipDuration * 1000) + cycleDelay;
      timeoutId = setTimeout(() => {
        setWordIndex(prev => {
          if (prev >= words.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, totalAnimationTime);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [wordIndex, words, maxLen, stagger, flipDuration, cycleDelay, flipsPerChar, charsPool, loop]);

  const tileWidth = Math.max(16, Math.round(fontSize * 1.05));
  const tileHeight = Math.max(22, Math.round(fontSize * 1.55));

  return (
    <div 
      className={cn("inline-flex items-center select-none font-mono font-black tracking-tight", className)}
      style={{ gap: `${gap}px` }}
    >
      {displayChars.map((char, idx) => (
        <div
          key={idx}
          className="relative flex items-center justify-center overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform select-none font-mono font-black"
          style={{
            width: `${tileWidth}px`,
            height: `${tileHeight}px`,
            backgroundColor: tileColor,
            borderRadius: `${tileRadius}px`,
            border,
            perspective: '400px'
          }}
        >
          {/* Top Half of Split Flap Shading */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/[0.07] pointer-events-none" />

          {/* Centered Character */}
          <span 
            className="relative z-10 leading-none font-mono font-black tracking-normal"
            style={{ 
              color: textColor, 
              fontSize: `${fontSize}px`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>

          {/* Split Crease Horizontal Line Shadow */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/80 z-20 pointer-events-none" />
          <div className="absolute inset-x-0 top-[calc(50%+1px)] h-[1px] bg-white/10 z-20 pointer-events-none" />

          {/* Subtle Side Rivets / Hinge Notches */}
          <div className="absolute left-0 top-1/2 w-[3px] h-[3px] bg-black/90 rounded-r-full -translate-y-1/2 z-30" />
          <div className="absolute right-0 top-1/2 w-[3px] h-[3px] bg-black/90 rounded-l-full -translate-y-1/2 z-30" />

          {/* Subtle Specular Highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none z-10" />
        </div>
      ))}
    </div>
  );
};

export default SplitFlapText;
