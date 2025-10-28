import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-black">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Ground Control Station MVP
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            A modular, safety-first framework inspired by leading GCS tools. Built around
            real-time telemetry, human-centric UX, and extensible architecture.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#gcs-tabs"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition"
            >
              Explore Tabs
            </a>
            <a
              href="#plan"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium px-4 py-2 transition"
            >
              Plan a Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
