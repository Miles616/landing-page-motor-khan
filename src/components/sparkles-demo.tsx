"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function SparklesPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
        <div className="w-full absolute inset-0 h-full">
            <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
            />
        </div>
        <div className="relative z-20">
            {children}
        </div>
    </div>
  );
}
