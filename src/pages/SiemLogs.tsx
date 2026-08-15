import { useState } from 'react'

const sources = ['Windows', 'Linux', 'Firewall', 'VPN', 'Active Directory', 'EDR', 'Web Server']

const sampleLog = {
  eventId: '4625',
  accountName: 'user01',
  sourceIp: '185.220.101.47',
  failureReason: 'Bad password',
  timestamp: '03:14:22',
}

const observations = [
  'Bu bir başarısız giriş denemesi',
  'Kaynak IP şüpheli bir bölgeden geliyor olabilir',
  'Zaman damgası mesai saatleri dışında',
  'Hesap adı genel/tahmin edilebilir görünüyor',
]

function SiemLogs() {
  const [activeSource, setActiveSource] = useState('Windows')
  const [selectedObservations, setSelectedObservations] = useState<string[]>([])
  const [showExplanation, setShowExplanation] = useState(false)

  const toggleObservation = (obs: string) => {
    setSelectedObservations((prev) =>
      prev.includes(obs) ? prev.filter((o) => o !== obs) : [...prev, obs]
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">SIEM & Log Analysis</h1>
        <p className="text-slate-400">Gerçek log örnekleri üzerinden analiz pratiği yap.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        {/* Sol filtre */}
        <div className="space-y-1">
          <p className="text-xs text-slate-500 font-medium mb-2 uppercase">Log Source</p>
          {sources.map((source) => (
            <button
              key={source}
              onClick={() => setActiveSource(source)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activeSource === source
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {source}
            </button>
          ))}
        </div>

        {/* Sağ içerik */}
        <div>
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 font-mono text-sm mb-6">
            <p className="text-slate-500 mb-2 text-xs">// {activeSource} — Event Log</p>
            <p><span className="text-slate-500">Event ID:</span> <span className="text-cyan-400">{sampleLog.eventId}</span></p>
            <p><span className="text-slate-500">Account Name:</span> <span className="text-white">{sampleLog.accountName}</span></p>
            <p><span className="text-slate-500">Source IP:</span> <span className="text-red-400">{sampleLog.sourceIp}</span></p>
            <p><span className="text-slate-500">Failure Reason:</span> <span className="text-white">{sampleLog.failureReason}</span></p>
            <p><span className="text-slate-500">Timestamp:</span> <span className="text-white">{sampleLog.timestamp}</span></p>
          </div>

          <h2 className="text-lg font-semibold mb-3">What do you notice?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {observations.map((obs) => (
              <button
                key={obs}
                onClick={() => toggleObservation(obs)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm border transition-colors ${
                  selectedObservations.includes(obs)
                    ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600'
                }`}
              >
                {obs}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowExplanation(true)}
            disabled={selectedObservations.length === 0}
            className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Analizi Göster
          </button>

          {showExplanation && (
            <div className="mt-6 bg-slate-800/50 border border-slate-700 rounded-xl p-5 animate-hero-in">
              <p className="text-xs text-cyan-400 font-medium mb-3 uppercase">Analyst Explanation</p>
              <div className="space-y-3 text-sm text-slate-300">
                <p><span className="text-white font-medium">What happened: </span>Kullanıcı "user01" için yanlış şifre nedeniyle başarısız bir giriş denemesi kaydedildi.</p>
                <p><span className="text-white font-medium">Why suspicious: </span>Kaynak IP bilinen bir tehdit istihbaratı listesinde çıkabilir, saat de olağandışı olabilir.</p>
                <p><span className="text-white font-medium">Check next: </span>Aynı IP'den gelen diğer denemeler, aynı hesaba yapılan tüm girişler, coğrafi konum tutarlılığı.</p>
                <p><span className="text-white font-medium">Next steps: </span>IP'yi threat intel kaynaklarında sorgula, hesabı geçici kilitle, VPN/proxy loglarını kontrol et.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SiemLogs