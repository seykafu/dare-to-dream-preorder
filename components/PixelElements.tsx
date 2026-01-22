"use client";

import { motion } from "framer-motion";

// Pixel Heart component - classic 8-bit style
export function PixelHeart({
  size = 32,
  className = "",
  animated = false
}: {
  size?: number;
  className?: string;
  animated?: boolean;
}) {
  // 8x7 pixel heart grid (1 = filled, 0 = empty)
  const heartGrid = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
  ];

  const pixelSize = size / 8;

  const heart = (
    <svg
      width={size}
      height={size * 0.875}
      viewBox={`0 0 ${size} ${size * 0.875}`}
      className={className}
    >
      <defs>
        <linearGradient id="pixelHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(248, 80%, 50%)" />
          <stop offset="50%" stopColor="hsl(268, 70%, 55%)" />
          <stop offset="100%" stopColor="hsl(280, 70%, 55%)" />
        </linearGradient>
      </defs>
      {heartGrid.map((row, y) =>
        row.map((cell, x) =>
          cell === 1 ? (
            <rect
              key={`${x}-${y}`}
              x={x * pixelSize}
              y={y * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill="url(#pixelHeartGradient)"
            />
          ) : null
        )
      )}
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {heart}
      </motion.div>
    );
  }

  return heart;
}

// Pixel Star component
export function PixelStar({
  size = 16,
  className = "",
  color = "currentColor"
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  const starGrid = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
  ];

  const pixelSize = size / 7;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      {starGrid.map((row, y) =>
        row.map((cell, x) =>
          cell === 1 ? (
            <rect
              key={`${x}-${y}`}
              x={x * pixelSize}
              y={y * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  );
}

// Pixel Sparkle/Diamond component
export function PixelSparkle({
  size = 12,
  className = "",
  color = "currentColor"
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  const sparkleGrid = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ];

  const pixelSize = size / 5;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      {sparkleGrid.map((row, y) =>
        row.map((cell, x) =>
          cell === 1 ? (
            <rect
              key={`${x}-${y}`}
              x={x * pixelSize}
              y={y * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  );
}

// Floating pixel decoration component
export function FloatingPixel({
  children,
  className = "",
  delay = 0,
  duration = 4,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -8, 0],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// Pixel border/divider component
export function PixelDivider({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
