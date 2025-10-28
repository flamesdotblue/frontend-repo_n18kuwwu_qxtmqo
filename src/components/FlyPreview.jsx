import React from 'react';
import { Activity, Map, AlertTriangle, Play, Pause } from 'lucide-react';

export default function FlyPreview() {
  return (
    <section className="container mx-auto px-6 py-10 text-white" aria-label="Fly View Preview">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map panel */}
        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-4">
          <div className="flex items-center gap-2 text-white/80 mb-3">
            <Map size={18} />
            <span className="text-sm">Geospatial Canvas</span>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            {/* Placeholder map canvas with grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs px-3 py-1">
                Vehicle · GPS Fix 3D · HDOP 0.8
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition">
              <Play size={16} /> Takeoff
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition">
              <Pause size={16} /> Pause
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500/90 text-black text-sm font-medium hover:bg-amber-400 transition">
              <AlertTriangle size={16} /> RTL
            </button>
          </div>
        </div>

        {/* Instrument cluster */}
        <div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-4">
          <div className="flex items-center gap-2 text-white/80 mb-3">
            <Activity size={18} />
            <span className="text-sm">Gauge Cluster</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Gauge label="Altitude" value="123.4 m" accent="from-emerald-500 to-lime-500" />
            <Gauge label="Speed" value="14.7 m/s" accent="from-sky-500 to-cyan-500" />
            <Gauge label="Battery" value="87%" accent="from-amber-500 to-orange-500" />
          </div>
          <div className="mt-4 text-xs text-white/60">
            Safety-first: actions require confirmation cascade before execution.
          </div>
        </div>
      </div>
    </section>
  );
}

function Gauge({ label, value, accent }) {
  return (
    <div className="rounded-lg border border-white/10 p-3 bg-neutral-900/60">
      <div className={`h-2 w-full rounded-full bg-white/10 overflow-hidden mb-3`}>
        <div className={`h-full w-3/4 bg-gradient-to-r ${accent}`}></div>
      </div>
      <div className="text-sm text-white/80">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
