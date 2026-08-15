import { useState } from 'react'
import { Paperclip } from 'lucide-react'

const indicators = [
  { id: 'sender', label: 'Gönderen adresi: support@paypa1-security.com', correct: true },
  { id: 'subject', label: 'Konu: "Hesabınız 24 saat içinde kapatılacak!"', correct: true },
  { id: 'link', label: 'Bağlantı: hxxp://paypa1-verify.xyz/login', correct: true },
  { id: 'greeting', label: 'Selamlama: "Sayın Müşterimiz"', correct: false },
  { id: 'attachment', label: 'Ek dosya: invoice_2024.pdf.exe', correct: true },
]

function Phishing() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggle = (id: string) => {
    if (submitted) return
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const correctCount = indicators.filter((i) => i.correct && selected.includes(i.id)).length
  const totalCorrect = indicators.filter((i) => i.correct).length

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Phishing Analysis Lab</h1>
        <p className="text-slate-400">Şüpheli göstergeleri işaretle, sonra analizi gör.</p>
      </div>

      {/* Sahte email arayüzü */}
      <div className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden mb-6">
        <div className="border-b border-slate-700 p-4 space-y-2">
          {indicators.slice(0, 3).map((ind) => (
            <button
              key={ind.id}
              onClick={() => toggle(ind.id)}
              className={`block w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                selected.includes(ind.id) ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
        <div className="p-4 text-sm text-slate-300 leading-relaxed">
          <p className="mb-3">Merhaba,</p>
          <p className="mb-3">
            Hesabınızda olağandışı bir aktivite tespit ettik. Hesabınızın askıya alınmasını
            önlemek için lütfen aşağıdaki bağlantıdan bilgilerinizi doğrulayın.
          </p>
          <button
            onClick={() => toggle('link')}
            className={`block text-left text-sm mb-3 underline transition-colors ${
              selected.includes('link') ? 'bg-cyan-500/20 text-cyan-300 px-1 rounded' : 'text-blue-400'
            }`}
          >
            hxxp://paypa1-verify.xyz/login
          </button>
          <button
            onClick={() => toggle('attachment')}
            className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded border transition-colors ${
              selected.includes('attachment')
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                : 'border-slate-700 text-slate-400 hover:border-slate-600'
            }`}
          >
         <Paperclip size={14} /> invoice_2024.pdf.exe
          </button>
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          Analizi Gönder
        </button>
      ) : (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 animate-hero-in">
          <p className="text-cyan-400 font-medium mb-3">
            Sonuç: {correctCount} / {totalCorrect} doğru gösterge buldun
          </p>
          <div className="space-y-2 text-sm">
            {indicators.filter((i) => i.correct).map((ind) => (
              <p key={ind.id} className={selected.includes(ind.id) ? 'text-cyan-300' : 'text-slate-500'}>
                {selected.includes(ind.id) ? '✓' : '✗'} {ind.label}
              </p>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-4">
            <span className="text-white font-medium">İlgili MITRE tekniği: </span>
            T1566 — Phishing
          </p>
        </div>
      )}
    </div>
  )
}

export default Phishing