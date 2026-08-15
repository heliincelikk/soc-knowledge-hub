import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const timeline = [
  { time: '03:11', event: 'Failed Login' },
  { time: '03:11', event: 'Failed Login' },
  { time: '03:12', event: 'Failed Login' },
  { time: '03:12', event: 'Failed Login' },
  { time: '03:13', event: 'Successful Login' },
]

const options = [
  'Başarılı giriş yapan kullanıcının hesap aktivitesini incele',
  'Sadece başarısız denemeleri görmezden gel, önemli değil',
  'Kaynak IP adresinin coğrafi konumunu ve itibarını kontrol et',
  'Hiçbir şey yapma, muhtemelen kullanıcı şifresini unutmuştur',
]

const correctIndex = 2

function SocChallenges() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [xp, setXp] = useState(120)

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return
    setSelectedOption(index)
    if (index === correctIndex) setXp((prev) => prev + 25)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">SOC Challenges</h1>
          <p className="text-slate-400">Vaka temelli senaryolarla pratik yap.</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">XP</p>
          <p className="text-xl font-bold text-cyan-400">{xp}</p>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-cyan-400 font-medium mb-1">CASE #001</p>
            <h2 className="text-lg font-semibold">Multiple Failed Logins</h2>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            Beginner
          </span>
        </div>

        {/* Timeline */}
        <div className="space-y-2 mb-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="text-slate-500 font-mono w-14">{item.time}</span>
              <div className={`w-2 h-2 rounded-full ${item.event === 'Successful Login' ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="text-slate-300">{item.event}</span>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold mb-3">Ne yapmalısın?</h3>
        <div className="space-y-2">
          {options.map((opt, i) => {
            const isSelected = selectedOption === i
            const isCorrect = i === correctIndex
            const showResult = selectedOption !== null

            let style = 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-600'
            if (showResult && isCorrect) style = 'bg-green-500/10 border-green-500/40 text-green-300'
            else if (showResult && isSelected && !isCorrect) style = 'bg-red-500/10 border-red-500/40 text-red-300'

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left text-sm px-4 py-3 rounded-lg border transition-colors ${style}`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {selectedOption !== null && (
          <div className="mt-6 bg-slate-900/50 border border-slate-700 rounded-xl p-4 animate-hero-in">
            <p className="text-xs text-cyan-400 font-medium mb-2">Analyst Reasoning</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              4 başarısız girişten sonra bir başarılı giriş gelmesi, brute-force veya
              credential stuffing saldırısının başarılı olduğuna işaret edebilir. Bu yüzden
              önce başarılı girişi yapan hesabın coğrafi konumu, IP itibarı ve sonraki
              aktiviteleri incelenmelidir.
            </p>
            {selectedOption === correctIndex && (
            <span className="inline-flex items-center gap-1"><CheckCircle2 size={14} /> Doğru! +25 XP kazandın.</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SocChallenges