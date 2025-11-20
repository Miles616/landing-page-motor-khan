
"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const Spotlight = ({
  className,
  children,
  fill,
}: {
  className?: string;
  children?: React.ReactNode;
  fill?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  if (fill) {
    return (
      <motion.div
        className={cn(
          "animate-fade-in absolute h-full w-full",
          className
        )}
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 120%, ${fill}, transparent 80%)`,
        }}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative group",
        className
      )}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="relative bg-transparent z-10">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
    </div>
  );
};
