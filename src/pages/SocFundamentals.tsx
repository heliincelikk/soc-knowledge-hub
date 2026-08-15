const topics = [
  {
    title: 'What is a SOC?',
    description: 'Bir Security Operations Center\'ın ne işe yaradığını, kim çalıştığını ve nasıl işlediğini öğren.',
    difficulty: 'Beginner',
    readTime: '4 dk',
    progress: 100,
  },
  {
    title: 'Blue Team / Red Team / Purple Team',
    description: 'Savunma, saldırı ve iş birliği ekiplerinin rolleri arasındaki farkları anla.',
    difficulty: 'Beginner',
    readTime: '5 dk',
    progress: 80,
  },
  {
    title: 'SIEM',
    description: 'Security Information and Event Management sistemlerinin log toplama ve analiz sürecindeki rolü.',
    difficulty: 'Intermediate',
    readTime: '7 dk',
    progress: 60,
  },
  {
    title: 'Logs',
    description: 'Sistemlerin ürettiği kayıtların türleri, formatları ve neden önemli oldukları.',
    difficulty: 'Beginner',
    readTime: '5 dk',
    progress: 100,
  },
  {
    title: 'Alerts',
    description: 'Bir uyarının nasıl tetiklendiğini, false positive kavramını ve önceliklendirmeyi öğren.',
    difficulty: 'Intermediate',
    readTime: '6 dk',
    progress: 40,
  },
  {
    title: 'IOC',
    description: 'Indicator of Compromise — bir saldırının izlerini nasıl tanırsın?',
    difficulty: 'Intermediate',
    readTime: '6 dk',
    progress: 20,
  },
  {
    title: 'Triage',
    description: 'Gelen uyarıları önceliklendirme ve hangisine önce bakılacağına karar verme süreci.',
    difficulty: 'Advanced',
    readTime: '8 dk',
    progress: 0,
  },
  {
    title: 'Incident Response',
    description: 'Bir güvenlik olayı tespit edildiğinde izlenen adım adım müdahale süreci.',
    difficulty: 'Advanced',
    readTime: '10 dk',
    progress: 0,
  },
  {
    title: 'Threat Intelligence',
    description: 'Tehdit istihbaratının ne olduğu, nereden geldiği ve nasıl kullanıldığı.',
    difficulty: 'Advanced',
    readTime: '9 dk',
    progress: 0,
  },
]

const difficultyStyles: Record<string, string> = {
  Beginner: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  Intermediate: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/40',
  Advanced: 'bg-blue-500/15 text-blue-200 border-blue-500/40',
}

function SocFundamentals() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">SOC Fundamentals</h1>
        <p className="text-slate-400">
          SOC dünyasının temel kavramlarını öğren, kendi hızında ilerle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div
            key={topic.title}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex flex-col hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300 animate-hero-in"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {/* Üst satır: zorluk + süre */}
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyStyles[topic.difficulty]}`}
              >
                {topic.difficulty}
              </span>
              <span className="text-xs text-slate-500">{topic.readTime}</span>
            </div>

            {/* Başlık + açıklama */}
            <h3 className="text-base font-semibold mb-2">{topic.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
              {topic.description}
            </p>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-slate-500">İlerleme</span>
                <span className="text-xs text-cyan-400 font-medium">{topic.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 rounded-full transition-all duration-700"
                  style={{ width: `${topic.progress}%` }}
                />
              </div>
            </div>

            {/* Learn butonu */}
            <button className="w-full bg-slate-700/50 hover:bg-cyan-500 hover:text-slate-950 text-white font-medium py-2 rounded-lg text-sm transition-colors">
              {topic.progress === 100 ? 'Tekrar Et' : topic.progress > 0 ? 'Devam Et' : 'Learn'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocFundamentals