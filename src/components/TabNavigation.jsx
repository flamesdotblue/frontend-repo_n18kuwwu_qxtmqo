import React from 'react';

const tabs = [
  { key: 'connect', label: 'Connect' },
  { key: 'fly', label: 'Fly' },
  { key: 'plan', label: 'Plan' },
  { key: 'analyze', label: 'Analyze' },
  { key: 'setup', label: 'Setup' },
  { key: 'config', label: 'Config' },
];

export default function TabNavigation({ activeTab, onChange }) {
  return (
    <nav id="gcs-tabs" className="w-full bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 border-y border-white/10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center gap-2 py-3">
          {tabs.map((t) => {
            const isActive = activeTab === t.key;
            return (
              <li key={t.key}>
                <button
                  onClick={() => onChange(t.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-500 text-black'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
