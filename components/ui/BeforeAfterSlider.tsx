'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage = 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
  afterImage = 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200',
  beforeLabel = 'Before: Brassy & Uneven Base',
  afterLabel = 'After: Smoked Slate Clay Balayage',
  title = 'Real Studio Transformation',
  subtitle = 'Interactive slider — drag handle left or right to compare',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="space-y-4">
      {(title || subtitle) && (
        <div className="text-left space-y-1">
          {title && <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">{title}</h3>}
          {subtitle && <p className="text-xs text-muted-text font-sans">{subtitle}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-ivory-surface shadow-warm border border-ivory-border"
      >
        {/* AFTER IMAGE (Background) */}
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 80vw"
          priority
        />
        <div className="absolute top-4 right-4 bg-terracotta text-ivory text-[10px] font-sans font-medium uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full w-[100vw] max-w-7xl">
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
          <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm text-ivory text-[10px] font-sans font-medium uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER HANDLE LINE */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-ivory shadow-2xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-terracotta text-ivory border-2 border-ivory flex items-center justify-center shadow-lg text-xs font-bold">
            ↔
          </div>
        </div>
      </div>
    </div>
  );
}
