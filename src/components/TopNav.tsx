import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Bell, Menu, X } from 'lucide-react'
import { healthCheck } from '../lib/api'

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

function TopNav() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    healthCheck(controller.signal)
      .then(() => setBackendOnline(true))
      .catch(() => {
        if (!controller.signal.aborted) {
          setBackendOnline(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <div>
          <h1 className="text-lg font-bold text-white leading-none">SOC HUB</h1>
          <p className="text-[10px] text-slate-400 leading-none mt-0.5">Learn • Analyze • Investigate</p>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex text-slate-400 hover:text-white transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="hidden md:flex text-slate-400 hover:text-white transition-colors" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <div
            className="hidden md:flex items-center gap-1.5 text-[10px] text-slate-400"
            title={backendOnline === true ? 'Backend connected' : backendOnline === false ? 'Backend unavailable' : 'Checking backend'}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                backendOnline === true
                  ? 'bg-emerald-400'
                  : backendOnline === false
                    ? 'bg-red-400'
                    : 'bg-amber-400 animate-pulse'
              }`}
            />
            API
          </div>
          <div className="hidden md:block w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40" />

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden flex flex-col gap-1 px-4 pb-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default TopNav