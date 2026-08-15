const topics = [
  {
    title: 'IP Address',
    description: 'Ağdaki her cihazı benzersiz şekilde tanımlayan sayısal adres sistemi.',
    difficulty: 'Beginner',
    readTime: '4 dk',
    hasDiagram: 'ip',
  },
  {
    title: 'IPv4 / IPv6',
    description: 'İki adresleme standardı arasındaki fark: uzunluk, format ve neden geçiş yapılıyor.',
    difficulty: 'Beginner',
    readTime: '5 dk',
  },
  {
    title: 'DNS',
    description: 'Domain isimlerini IP adreslerine çeviren, internetin "telefon rehberi".',
    difficulty: 'Beginner',
    readTime: '5 dk',
  },
  {
    title: 'DHCP',
    description: 'Cihazlara otomatik IP adresi atayan protokol.',
    difficulty: 'Intermediate',
    readTime: '5 dk',
  },
  {
    title: 'NAT',
    description: 'Özel ağdaki cihazların tek bir genel IP üzerinden internete çıkmasını sağlayan çeviri sistemi.',
    difficulty: 'Intermediate',
    readTime: '6 dk',
  },
  {
    title: 'ARP',
    description: 'Bir IP adresinin karşılık geldiği MAC adresini bulmak için kullanılan protokol.',
    difficulty: 'Intermediate',
    readTime: '5 dk',
  },
  {
    title: 'TCP / UDP',
    description: 'Güvenilir ama yavaş (TCP) ile hızlı ama güvenilmez (UDP) veri iletim yöntemleri arasındaki fark.',
    difficulty: 'Intermediate',
    readTime: '7 dk',
  },
  {
    title: 'OSI Model',
    description: 'Ağ iletişiminin 7 katmanlı teorik modeli — her katmanın görevi ve örnek protokoller.',
    difficulty: 'Advanced',
    readTime: '9 dk',
    hasDiagram: 'osi',
  },
  {
    title: 'Ports & Protocols',
    description: 'Yaygın port numaraları (80, 443, 22, 53...) ve hangi servise ait oldukları.',
    difficulty: 'Intermediate',
    readTime: '6 dk',
  },
]

const difficultyStyles: Record<string, string> = {
  Beginner: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  Intermediate: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/40',
  Advanced: 'bg-blue-500/15 text-blue-200 border-blue-500/40',
}

const osiLayers = [
  { num: 7, name: 'Application', example: 'HTTP, DNS' },
  { num: 6, name: 'Presentation', example: 'SSL/TLS' },
  { num: 5, name: 'Session', example: 'NetBIOS' },
  { num: 4, name: 'Transport', example: 'TCP, UDP' },
  { num: 3, name: 'Network', example: 'IP' },
  { num: 2, name: 'Data Link', example: 'Ethernet' },
  { num: 1, name: 'Physical', example: 'Cables, Wi-Fi' },
]

function OsiDiagram() {
  return (
    <div className="mt-3 space-y-1">
      {osiLayers.map((layer) => (
        <div
          key={layer.num}
          className="flex items-center justify-between bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-1.5"
        >
          <span className="text-xs text-slate-300">
            <span className="text-cyan-400 font-medium mr-1.5">{layer.num}</span>
            {layer.name}
          </span>
          <span className="text-[10px] text-slate-500">{layer.example}</span>
        </div>
      ))}
    </div>
  )
}

function IpDiagram() {
  const octets = ['192', '168', '1', '45']
  return (
    <div className="mt-3 flex items-center justify-center gap-1.5">
      {octets.map((octet, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="bg-slate-900/60 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-300 font-mono text-sm">
            {octet}
          </div>
          {i < octets.length - 1 && <span className="text-slate-600">.</span>}
        </div>
      ))}
    </div>
  )
}

function Network() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Network</h1>
        <p className="text-slate-400">
          Ağ güvenliğini anlamak için önce ağın kendisini anlamak gerekir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div
            key={topic.title}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex flex-col hover:border-cyan-500/50 transition-colors duration-300 animate-hero-in"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyStyles[topic.difficulty]}`}
              >
                {topic.difficulty}
              </span>
              <span className="text-xs text-slate-500">{topic.readTime}</span>
            </div>

            <h3 className="text-base font-semibold mb-2">{topic.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed flex-1">
              {topic.description}
            </p>

            {topic.hasDiagram === 'osi' && <OsiDiagram />}
            {topic.hasDiagram === 'ip' && <IpDiagram />}

            <button className="w-full mt-4 bg-slate-700/50 hover:bg-cyan-500 hover:text-slate-950 text-white font-medium py-2 rounded-lg text-sm transition-colors">
              Learn
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Network