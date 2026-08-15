import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'

const tabs = ['IP', 'Domain', 'URL', 'Hash'] as const

const sampleData: Record<string, { reputation: string; firstSeen: string; lastSeen: string; risk: string; related: string }> = {
  IP: { reputation: 'Malicious', firstSeen: '2024-01-12', lastSeen: '2025-08-01', risk: 'High', related: '14 related indicators' },
  Domain: { reputation: 'Suspicious', firstSeen: '2023-11-03', lastSeen: '2025-07-28', risk: 'Medium', related: '6 related indicators' },
  URL: { reputation: 'Malicious', firstSeen: '2025-02-19', lastSeen: '2025-08-10', risk: 'High', related: '3 related indicators' },
  Hash: { reputation: 'Clean', firstSeen: '2022-05-01', lastSeen: '2024-12-15', risk: 'Low', related: '0 related indicators' },
}

const riskStyles: Record<string, string> = {
  High: 'bg-red-500/10 text-red-400 border-red-500/30',
  Medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  Low: 'bg-green-500/10 text-green-400 border-green-500/30',
}

function ThreatIntel() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('IP')
  const data = sampleData[activeTab]

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Threat Intelligence</h1>
        <p className="text-slate-400">IOC (Indicator of Compromise) sorgulama simülasyonu.</p>
      </div>

      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-cyan-500 text-slate-950'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 animate-hero-in" key={activeTab}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-slate-500 mb-1">Reputation</p>
            <p className="text-sm text-white font-medium">{data.reputation}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Risk Level</p>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${riskStyles[data.risk]}`}>
              {data.risk}
            </span>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">First Seen</p>
            <p className="text-sm text-white font-mono">{data.firstSeen}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Last Seen</p>
            <p className="text-sm text-white font-mono">{data.lastSeen}</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-slate-500 mb-1">Related Indicators</p>
            <p className="text-sm text-slate-300">{data.related}</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-4">
    <span className="inline-flex items-center gap-1"><AlertTriangle size={12} /> Bu örnekler eğitim amaçlıdır, gerçek URL/hash sorgusu yapılmaz.</span>
      </p>
    </div>
  )
}

export default ThreatIntel