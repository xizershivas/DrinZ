import { useEffect, useState } from 'react'
import { getProjects } from '../api/portfolioApi'

const FALLBACK = [
  { id:1, title:'Transport & Billing System',  description:'Enterprise transport management and tax form automation. Optimized backend and frontend for performance.',    techStack:'C#, ASP.NET Core, Ext JS, MSSQL',       category:'Enterprise', isFeatured:true  },
  { id:2, title:'Dealer Credit Card System',   description:'Dealer credit card processing system enhancing transaction handling, security, and performance.',            techStack:'C#, ASP.NET Core, MSSQL, jQuery',       category:'Enterprise', isFeatured:true  },
  { id:3, title:'Remittance API System',       description:'Secure API for international remittance transactions between foreign and local offices.',                    techStack:'C#, ASP.NET Core, MSSQL, Keycloak SSO', category:'API',        isFeatured:true  },
  { id:4, title:'Property Management System',  description:'Supported and enhanced Onesite — a large-scale property management platform with new features.',            techStack:'C#, ASP.NET Core, MSSQL, React',        category:'Enterprise', isFeatured:false },
  { id:5, title:'Globe 5G FWA Automation',     description:'Automation scripts for Globe 5G FWA and Broadband App — covering data processing and reporting pipelines.', techStack:'C#, JavaScript, MSSQL, Jenkins',        category:'Automation', isFeatured:false },
]

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK)
  const [filter, setFilter]     = useState('All')

  useEffect(() => { getProjects().then(r => setProjects(r.data)).catch(() => {}) }, [])

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered   = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="chip-orange mb-4">My Work</span>
          <h2 className="text-4xl font-black text-ink mt-3">
            Featured <span className="heading-line text-teal" style={{ '--tw-text-opacity':1 }}>Projects</span>
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border"
              style={filter === c
                ? { background: '#10DEBB', color: '#0a2e26', borderColor: '#10DEBB', boxShadow: '0 4px 14px rgba(16,222,187,0.30)' }
                : { background: '#fff', color: '#6b7280', borderColor: '#e5e7eb' }
              }
              onMouseEnter={e => { if (filter !== c) { e.currentTarget.style.borderColor='#10DEBB'; e.currentTarget.style.color='#0ba896' } }}
              onMouseLeave={e => { if (filter !== c) { e.currentTarget.style.borderColor='#e5e7eb'; e.currentTarget.style.color='#6b7280' } }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="card flex flex-col overflow-hidden">
              {/* Top accent bar — orange for featured, teal for others */}
              <div className="h-[3px]" style={{ background: p.isFeatured ? '#F58027' : '#10DEBB' }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-ink leading-snug">{p.title}</h3>
                  {p.isFeatured && (
                    <span className="chip-orange !text-[10px] !py-[2px] !px-2 flex-shrink-0 whitespace-nowrap">★ Featured</span>
                  )}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techStack.split(',').map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-muted border border-gray-200">
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="chip-teal !text-[10px] !py-[2px] !px-2">{p.category}</span>
                  <div className="flex gap-3">
                    {p.liveUrl   && <a href={p.liveUrl}   target="_blank" rel="noreferrer" className="text-xs font-semibold text-orange hover:underline">Live ↗</a>}
                    {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-muted hover:text-ink">GitHub ↗</a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
