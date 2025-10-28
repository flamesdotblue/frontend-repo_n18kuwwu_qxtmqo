import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import TabNavigation from './components/TabNavigation';
import FlyPreview from './components/FlyPreview';
import PlanPreview from './components/PlanPreview';

export default function App() {
  const [activeTab, setActiveTab] = useState('fly');

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroCover />
      <TabNavigation activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'connect' && (
        <section className="container mx-auto px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-6">
            <h2 className="text-xl font-semibold">Connect</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Establish a link using presets or customize ports and protocols. Timeouts
              automatically trigger safe retries and degrade gracefully if partial connectivity is detected.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <select className="bg-black border border-white/10 rounded-md px-3 py-2"> 
                <option>UDP 14550</option>
                <option>Serial /dev/ttyUSB0</option>
                <option>TCP 5760</option>
              </select>
              <select className="bg-black border border-white/10 rounded-md px-3 py-2"> 
                <option>Baud 115200</option>
                <option>Baud 57600</option>
              </select>
              <button className="rounded-md bg-emerald-500 text-black font-medium px-4 py-2 hover:bg-emerald-400 transition">Link</button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'fly' && <FlyPreview />}
      {activeTab === 'plan' && <PlanPreview />}

      {activeTab === 'analyze' && (
        <section className="container mx-auto px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-6">
            <h2 className="text-xl font-semibold">Analyze</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Visualize logs and spot anomalies with layered graphs and filters.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-52 rounded-lg border border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-500/10" />
              <div className="h-52 rounded-lg border border-white/10 bg-gradient-to-tr from-amber-500/10 to-fuchsia-500/10" />
            </div>
          </div>
        </section>
      )}

      {activeTab === 'setup' && (
        <section className="container mx-auto px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-6">
            <h2 className="text-xl font-semibold">Setup</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Configure your vehicle with guided checklists and wizards. Progress saves after each step.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-400"/> Airframe Selected</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-amber-400"/> Sensor Calibration</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-rose-400"/> Radio Setup</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === 'config' && (
        <section className="container mx-auto px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-6">
            <h2 className="text-xl font-semibold">Config</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Tune parameters with instant visual feedback to understand control loop effects.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/10 p-4">
                <div className="text-sm text-white/70">Roll PID</div>
                <input type="range" min="0" max="100" defaultValue="45" className="w-full" />
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <div className="text-sm text-white/70">Pitch PID</div>
                <input type="range" min="0" max="100" defaultValue="50" className="w-full" />
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <div className="text-sm text-white/70">Yaw PID</div>
                <input type="range" min="0" max="100" defaultValue="40" className="w-full" />
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="container mx-auto px-6 py-12 text-white/60">
        <div className="text-sm">GCS MVP · Modular · Real-time · Safety-first</div>
      </footer>
    </div>
  );
}
