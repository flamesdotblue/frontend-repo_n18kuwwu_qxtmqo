import React from 'react';
import { Map, Upload, Check } from 'lucide-react';

const mockWaypoints = [
  { id: 1, name: 'WP1', lat: 37.773, lon: -122.431, alt: 50 },
  { id: 2, name: 'WP2', lat: 37.776, lon: -122.428, alt: 60 },
  { id: 3, name: 'WP3', lat: 37.779, lon: -122.426, alt: 55 },
];

export default function PlanPreview() {
  const distance = 1450; // meters (mock)
  const time = 320; // seconds (mock)

  return (
    <section id="plan" className="container mx-auto px-6 py-10 text-white" aria-label="Plan View Preview">
      <div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-white/80">
            <Map size={18} />
            <span className="text-sm">Mission Planner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60">Cost</span>
            <span className="text-sm font-medium">{(distance / 1000).toFixed(2)} km · {(time / 60).toFixed(1)} min</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-transparent" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 256" preserveAspectRatio="none">
                <polyline points="20,220 140,120 220,160 360,40" fill="none" stroke="#22c55e" strokeWidth="3" />
                <circle cx="20" cy="220" r="4" fill="#22c55e" />
                <circle cx="140" cy="120" r="4" fill="#22c55e" />
                <circle cx="220" cy="160" r="4" fill="#22c55e" />
                <circle cx="360" cy="40" r="4" fill="#22c55e" />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            {mockWaypoints.map((wp) => (
              <div key={wp.id} className="flex items-center justify-between rounded-lg border border-white/10 p-3 bg-neutral-900/60">
                <div>
                  <div className="text-sm font-medium">{wp.name}</div>
                  <div className="text-xs text-white/60">{wp.lat.toFixed(3)}, {wp.lon.toFixed(3)} · {wp.alt} m</div>
                </div>
                <Check size={18} className="text-emerald-400" />
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="inline-flex w-full items-center justify-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition">
                Simulate
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition">
                <Upload size={16} /> Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
