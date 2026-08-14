import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/fundamentals', label: 'SOC Fundamentals' },
  { path: '/network', label: 'Network' },
  { path: '/siem', label: 'SIEM & Logs' },
  { path: '/phishing', label: 'Phishing' },
  { path: '/threat-intel', label: 'Threat Intelligence' },
  { path: '/mitre', label: 'MITRE ATT&CK' },
  { path: '/challenges', label: 'SOC Challenges' },
  { path: '/notes', label: 'My Notes' },
]

function Sidebar() {
  const location = useLocation()

  return (
    <nav className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-4 flex flex-col gap-1">
      <div className="mb-6 px-2">
        <h1 className="text-xl font-bold text-white">SOC HUB</h1>
        <p className="text-xs text-slate-400">Learn • Analyze • Investigate</p>
      </div>

      {navItems.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Sidebar