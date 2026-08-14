import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Landing from './pages/Landing'
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
      <Routes>
        {/* Landing sayfası - tam ekran, Sidebar yok */}
        <Route path="/" element={<Landing />} />

        {/* Uygulama sayfaları - Sidebar ile birlikte */}
        <Route
          path="/dashboard"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <Dashboard />
              </main>
            </div>
          }
        />
        <Route
          path="/fundamentals"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <SocFundamentals />
              </main>
            </div>
          }
        />
        <Route
          path="/network"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <Network />
              </main>
            </div>
          }
        />
        <Route
          path="/siem"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <SiemLogs />
              </main>
            </div>
          }
        />
        <Route
          path="/phishing"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <Phishing />
              </main>
            </div>
          }
        />
        <Route
          path="/threat-intel"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <ThreatIntel />
              </main>
            </div>
          }
        />
        <Route
          path="/mitre"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <MitreAttack />
              </main>
            </div>
          }
        />
        <Route
          path="/challenges"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <SocChallenges />
              </main>
            </div>
          }
        />
        <Route
          path="/notes"
          element={
            <div className="min-h-screen bg-slate-900 text-white flex">
              <Sidebar />
              <main className="flex-1">
                <MyNotes />
              </main>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App