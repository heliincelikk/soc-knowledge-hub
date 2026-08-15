import { useState } from 'react'

const tactics = [
  { name: 'Initial Access', techniques: ['Phishing', 'Valid Accounts', 'Exploit Public-Facing App'] },
  { name: 'Execution', techniques: ['PowerShell', 'Scheduled Task', 'User Execution'] },
  { name: 'Persistence', techniques: ['Registry Run Keys', 'Scheduled Task', 'Valid Accounts'] },
  { name: 'Privilege Escalation', techniques: ['Access Token Manipulation', 'Valid Accounts'] },
  { name: 'Defense Evasion', techniques: ['Obfuscated Files', 'Disable Security Tools'] },
  { name: 'Credential Access', techniques: ['Brute Force', 'Credential Dumping'] },
  { name: 'Discovery', techniques: ['Network Scanning', 'Account Discovery'] },
  { name: 'Lateral Movement', techniques: ['Remote Services', 'Pass the Hash'] },
]

const statusStyles: Record<string, string> = {
  'Not Reviewed': 'bg-slate-700 text-slate-400',
  Learning: 'bg-cyan-500/20 text-cyan-300',
  Reviewed: 'bg-blue-500/20 text-blue-300',
  Mastered: 'bg-green-500/20 text-green-300',
}

function MitreAttack() {
  const [selected, setSelected] = useState<{ tactic: string; technique: string } | null>(null)
  const [status, setStatus] = useState<Record<string, string>>({})

  const key = selected ? `${selected.tactic}-${selected.technique}` : ''

  const setTechniqueStatus = (newStatus: string) => {
    if (!selected) return
    setStatus((prev) => ({ ...prev, [key]: newStatus }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">MITRE ATT&CK Matrix</h1>
        <p className="text-slate-400">Taktikleri keşfet, teknikleri incele, öğrenme durumunu işaretle.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {tactics.map((tactic) => (
          <div key={tactic.name} className="min-w-[200px] flex-shrink-0">
            <h3 className="text-sm font-semibold text-slate-300 mb-2">{tactic.name}</h3>
            <div className="space-y-2">
              {tactic.techniques.map((technique) => {
                const techKey = `${tactic.name}-${technique}`
                const techStatus = status[techKey] || 'Not Reviewed'
                return (
                  <button
                    key={technique}
                    onClick={() => setSelected({ tactic: tactic.name, technique })}
                    className="w-full text-left bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-lg p-3 transition-colors"
                  >
                    <p className="text-sm text-white mb-1.5">{technique}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusStyles[techStatus]}`}>
                      {techStatus}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Detay paneli */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50" onClick={() => setSelected(null)}>
          <div
            className="bg-slate-900 border-l border-slate-700 h-full w-full max-w-md p-6 overflow-y-auto animate-hero-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white mb-4">
              ✕ Kapat
            </button>
            <p className="text-xs text-cyan-400 mb-1">{selected.tactic}</p>
            <h2 className="text-xl font-bold mb-4">{selected.technique}</h2>

            <div className="space-y-4 text-sm text-slate-300">
              <p><span className="text-white font-medium">Description: </span>Bu teknik, saldırganların {selected.technique.toLowerCase()} yöntemini kullanarak hedeflerine ulaşmasını sağlar.</p>
              <p><span className="text-white font-medium">Detection: </span>İlgili log kaynaklarında anormal davranış desenlerini izle.</p>
              <p><span className="text-white font-medium">Log sources: </span>Windows Event Logs, EDR, Network Traffic</p>
            </div>

            <p className="text-xs text-slate-500 mt-6 mb-2">Learning Status</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(statusStyles).map((s) => (
                <button
                  key={s}
                  onClick={() => setTechniqueStatus(s)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-colors ${statusStyles[s]} ${
                    (status[key] || 'Not Reviewed') === s ? 'ring-2 ring-cyan-400' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MitreAttack