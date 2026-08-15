import heroImage from '../assets/hero-shield.png'

function Dashboard() {
  const progress = [
    { label: 'Network Security', value: 72 },
    { label: 'SIEM & Logs', value: 64 },
    { label: 'Threat Intelligence', value: 58 },
    { label: 'MITRE ATT&CK', value: 46 },
    { label: 'Incident Response', value: 35 },
  ]

  const reviewTopics = [
    { title: 'Windows Event ID 4625', category: 'SIEM & Logs', lastReviewed: '3 gün önce' },
    { title: 'Phishing Indicators', category: 'Phishing', lastReviewed: '5 gün önce' },
    { title: 'T1566 - Phishing', category: 'MITRE ATT&CK', lastReviewed: '1 hafta önce' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Hero - dış kapsayıcı, taşan efektler için */}
      <div className="relative mb-10 animate-hero-in">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-cyan-500/25 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute -top-10 -left-10 w-[220px] h-[220px] bg-cyan-400/30 rounded-full blur-2xl z-0" />

        <svg
          className="absolute -inset-20 pointer-events-none z-20 hidden md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="85" y1="10" x2="100" y2="0" stroke="#22D3EE" strokeWidth="0.3" opacity="0.5" />
          <circle r="0.7" fill="#22D3EE">
            <animate attributeName="cx" values="85;100;85" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="10;0;10" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>

          <line x1="12" y1="90" x2="0" y2="100" stroke="#3B82F6" strokeWidth="0.3" opacity="0.5" />
          <circle r="0.7" fill="#3B82F6">
            <animate attributeName="cx" values="12;0;12" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="cy" values="90;100;90" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
          </circle>
        </svg>

        <section className="relative z-10 overflow-hidden rounded-2xl min-h-[420px] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover opacity-70 animate-ken-burns"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950/10" />

          <div className="relative z-10 px-6 py-12 md:py-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 mb-4 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-400 font-medium">Live monitoring active</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-2">Welcome back, Analyst.</h1>
            <p className="text-slate-300 mb-4 text-lg">Keep your SOC knowledge sharp.</p>
            <p className="text-slate-300 max-w-2xl leading-relaxed">
              SOC HUB, güvenlik analistliğine hazırlanan öğrenciler ve junior SOC
              analistleri için tasarlanmış bir öğrenme platformu. Ağ güvenliğinden
              MITRE ATT&CK tekniklerine, log analizinden phishing tespitine kadar
              gerçek vaka senaryolarıyla pratik yaparak ilerleyebilirsin.
            </p>
          </div>
        </section>
      </div>

      {/* İstatistik kartları */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard label="Learning Streak" value="7 days" />
        <StatCard label="Topics Completed" value="12" />
        <StatCard label="Challenges Solved" value="5" />
        <StatCard label="MITRE Techniques" value="18" />
      </section>

      {/* Progress kartları */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {progress.map((item, index) => (
            <div
              key={item.label}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300 animate-hero-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-300">{item.label}</span>
                <span className="text-sm text-cyan-400 font-medium">{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Continue Learning */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs text-cyan-400 font-medium mb-1">MITRE ATT&CK</p>
            <h3 className="text-lg font-semibold mb-1">Initial Access — Phishing</h3>
            <p className="text-sm text-slate-400">Kaldığın yerden devam et, %46 tamamlandı.</p>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
            Devam Et
          </button>
        </div>
      </section>

      {/* Review Today */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Review Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviewTopics.map((topic) => (
            <div
              key={topic.title}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500/50 transition-colors"
            >
              <p className="text-xs text-slate-400 mb-1">{topic.category}</p>
              <h3 className="text-sm font-semibold mb-2">{topic.title}</h3>
              <p className="text-xs text-slate-500">Son tekrar: {topic.lastReviewed}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Challenge kartı */}
      <section className="bg-gradient-to-br from-cyan-500/10 to-slate-800/50 border border-cyan-500/20 rounded-xl p-6">
        <p className="text-xs text-cyan-400 font-medium mb-1">DAILY SOC CHALLENGE</p>
        <h3 className="text-lg font-semibold mb-2">Suspicious login activity detected.</h3>
        <p className="text-slate-400 text-sm mb-4">
          Multiple failed login attempts followed by a successful login from an unusual location.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 rounded-lg text-sm transition-colors">
          Investigate Case
        </button>
      </section>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </div>
  )
}

export default Dashboard