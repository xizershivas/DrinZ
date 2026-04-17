import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const roles = [
  'Full-Stack .NET Developer',
  'AI-Powered App Builder',
  'C# & React Specialist',
  'Enterprise Software Engineer',
]

export default function Hero() {
  const navigate = useNavigate()
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing,    setTyping]    = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 58)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
        return () => clearTimeout(t)
      } else { setRoleIdx(i => (i + 1) % roles.length); setTyping(true) }
    }
  }, [displayed, typing, roleIdx])

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-section">

      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle at 70% 25%, rgba(252,163,17,0.12) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle at 30% 75%, rgba(229,229,229,0.06) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #111827 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* Orange top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 chip-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-slow" />
            Open to Opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] text-ink mb-4 tracking-tight">
            Hi, I'm <span className="text-orange">Aldrin</span>
            <br />Calatrava
          </h1>

          {/* Typewriter */}
          <div className="h-10 flex items-center gap-1 justify-center lg:justify-start mb-6">
            <span className="text-xl font-bold text-orange">{displayed}</span>
            <span className="inline-block w-[2px] h-6 rounded bg-orange animate-pulse" />
          </div>

          <p className="text-muted text-base max-w-md mb-8 mx-auto lg:mx-0 leading-relaxed">
            AI-focused Full-Stack .NET Developer with{' '}
            <strong className="text-ink">7+ years</strong> of experience building enterprise applications
            and integrating intelligent solutions.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <button onClick={() => navigate('/projects')} className="btn-orange">View My Work →</button>
            <button onClick={() => navigate('/contact')}  className="btn-outline">Contact Me</button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8 justify-center lg:justify-start">
            {[['7+', 'Years Exp.'], ['10+', 'Projects Built'], ['4', 'Companies']].map(([n, l]) => (
              <div key={l} className="text-center lg:text-left">
                <p className="text-3xl font-black text-orange">{n}</p>
                <p className="text-xs text-muted mt-0.5 font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 animate-float">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border-2 border-teal/20" />
            <div className="absolute inset-7 rounded-full overflow-hidden border-4 border-white"
              style={{ boxShadow: '0 0 0 4px #d4820a, 0 12px 40px rgba(212,130,10,0.22)' }}>
              <img src="/MainPic.jpg" alt="Aldrin Calatrava"
                className="w-full h-full object-cover object-top" />
              {/* Dark overlay on photo */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.45) 100%)' }} />
            </div>
            <div className="absolute -top-1 right-8 w-5 h-5 rounded-full bg-teal border-2 border-white shadow-teal" />
            <div className="absolute -bottom-1 left-8 w-4 h-4 rounded-full bg-orange border-2 border-white" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button onClick={() => navigate('/about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-orange transition-colors">
        <span className="text-[10px] font-semibold uppercase tracking-widest">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-orange to-transparent" />
      </button>
    </section>
  )
}
