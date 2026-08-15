import { useState } from 'react'

type Note = {
  id: number
  title: string
  tags: string[]
  content: string
}

const initialNotes: Note[] = [
  {
    id: 1,
    title: 'Windows Event ID 4625',
    tags: ['Windows', 'Authentication', 'SIEM'],
    content: 'Başarısız giriş denemelerini gösterir. Failure Reason alanına dikkat et.',
  },
  {
    id: 2,
    title: 'T1566 - Phishing',
    tags: ['MITRE', 'Phishing'],
    content: 'En yaygın initial access tekniği. Sender domain ve link kontrolü şart.',
  },
]

function MyNotes() {
  const [notes, setNotes] = useState<Note[]>(initialNotes)
  const [search, setSearch] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  )

  const addNote = () => {
    if (!newTitle.trim()) return
    const note: Note = {
      id: Date.now(),
      title: newTitle,
      tags: [],
      content: newContent,
    }
    setNotes((prev) => [note, ...prev])
    setNewTitle('')
    setNewContent('')
  }

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-slate-400">Kişisel güvenlik bilgi bankan.</p>
      </div>

      <input
        type="text"
        placeholder="Notlarda ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 mb-6 focus:outline-none focus:border-cyan-500/50"
      />

      {/* Yeni not ekleme */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-6">
        <input
          type="text"
          placeholder="Not başlığı"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 mb-2 focus:outline-none focus:border-cyan-500/50"
        />
        <textarea
          placeholder="İçerik..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          rows={2}
          className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 mb-3 focus:outline-none focus:border-cyan-500/50 resize-none"
        />
        <button
          onClick={addNote}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
        >
          Not Ekle
        </button>
      </div>

      {/* Notlar listesi */}
      <div className="space-y-3">
        {filteredNotes.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8">Not bulunamadı.</p>
        )}
        {filteredNotes.map((note) => (
          <div key={note.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold">{note.title}</h3>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-slate-500 hover:text-red-400 text-sm transition-colors"
              >
                Sil
              </button>
            </div>
            <div className="flex gap-1.5 mb-2">
              {note.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-400">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyNotes