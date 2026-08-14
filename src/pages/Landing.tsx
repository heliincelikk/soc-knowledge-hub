import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero-shield.png'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden">
      <img
        src={heroImage}
        alt="SOC Hub"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          SOC<span className="text-cyan-400">HUB</span>
        </h1>
        <p className="text-slate-300 text-lg mb-8">
          Learn • Analyze • Investigate
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Landing