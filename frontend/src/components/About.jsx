import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="chip-teal mb-4">Who I Am</span>
          <h2 className="text-4xl font-black text-ink mt-3">
            About <span className="heading-line text-orange">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[400px]">
              {/* Shadow card behind */}
              <div className="absolute inset-0 rounded-2xl rotate-3 bg-orange/10 border border-orange/20" />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden w-full h-full border border-gray-200 shadow-hover">
                <img src="/MainPic.jpg" alt="Aldrin" className="w-full h-full object-cover object-top" />
                {/* Dark overlay */}
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.50) 100%)' }} />
              </div>
              {/* Exp badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-3 shadow-card border border-orange/20 z-10">
                <p className="text-2xl font-black text-orange">7+</p>
                <p className="text-xs text-muted font-semibold">Years Exp.</p>
              </div>
              {/* Teal dot */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-teal border-4 border-white shadow-teal z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-black text-ink">AI-focused Full-Stack .NET Developer</h3>

            <p className="text-muted leading-relaxed">
              I'm <span className="text-ink font-semibold">Aldrin Anthony Calatrava</span>, an engineer from
              Angono, Rizal, PH. With 7+ years of experience I build enterprise-grade apps using C#, ASP.NET Core, and React.
            </p>
            <p className="text-muted leading-relaxed">
              My current focus is integrating{' '}
              <span className="font-semibold" style={{ color: '#0ba896' }}>AI-powered solutions</span> — prompt engineering,
              AI API integrations, and RAG — into production software.
            </p>
            <p className="text-muted leading-relaxed">
              Delivered systems at{' '}
              {['iRely', 'RealPage', 'Metrobank', 'Globe Telecom'].map((c, i, a) => (
                <span key={c}>
                  <span className="text-ink font-semibold">{c}</span>{i < a.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                ['📍 Location', 'Angono, Rizal, PH'],
                ['✉️ Email',    'xizershivas@gmail.com'],
                ['📱 Phone',    '+63 969 277 6820'],
                ['💼 Status',   'Open to Opportunities'],
              ].map(([k, v]) => (
                <div key={k} className="bg-white rounded-xl p-3 border border-gray-100 shadow-card">
                  <p className="text-[10px] text-muted uppercase tracking-widest font-semibold mb-1">{k}</p>
                  <p className="text-sm text-ink font-semibold truncate">{v}</p>
                </div>
              ))}
            </div>

            <button onClick={() => navigate('/contact')} className="btn-orange mt-2">
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
