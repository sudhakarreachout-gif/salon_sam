'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  offsetY?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
  offsetY = 50,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offsetY, offsetY]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full">
      <motion.div style={{ y, scale }} className="relative w-full h-[120%] -top-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover object-center ${className}`}
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
