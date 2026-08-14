
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Dashboard from './pages/Dashboard'
import SocFundamentals from './pages/SocFundamentals'
import Network from './pages/Network'
import SiemLogs from './pages/SiemLogs'
import Phishing from './pages/Phishing'
import ThreatIntel from './pages/ThreatIntel'
import MitreAttack from './pages/MitreAttack'
import SocChallenges from './pages/SocChallenges'
import MyNotes from './pages/MyNotes'
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white relative">
        {/* Global arka plan katmanı */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:36px_36px]" />
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slower" />
        </div>

        <TopNav />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fundamentals" element={<SocFundamentals />} />
            <Route path="/network" element={<Network />} />
            <Route path="/siem" element={<SiemLogs />} />
            <Route path="/phishing" element={<Phishing />} />
            <Route path="/threat-intel" element={<ThreatIntel />} />
            <Route path="/mitre" element={<MitreAttack />} />
            <Route path="/challenges" element={<SocChallenges />} />
            <Route path="/notes" element={<MyNotes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App