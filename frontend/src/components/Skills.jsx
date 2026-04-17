import { useEffect, useState } from 'react'
import { getSkills } from '../api/portfolioApi'

const FALLBACK = [
  { id:1,  name:'C# / ASP.NET Core',     proficiency:95, category:'Backend'  },
  { id:2,  name:'Entity Framework Core', proficiency:90, category:'Backend'  },
  { id:4,  name:'REST API Design',        proficiency:92, category:'Backend'  },
  { id:14, name:'Node.js',                proficiency:78, category:'Backend'  },
  { id:5,  name:'React',                  proficiency:85, category:'Frontend' },
  { id:6,  name:'JS / TypeScript',        proficiency:88, category:'Frontend' },
  { id:7,  name:'HTML5 / CSS3',           proficiency:88, category:'Frontend' },
  { id:8,  name:'Bootstrap / Tailwind',   proficiency:85, category:'Frontend' },
  { id:3,  name:'MS SQL Server',          proficiency:90, category:'Database' },
  { id:11, name:'MongoDB',                proficiency:75, category:'Database' },
  { id:9,  name:'Docker',                 proficiency:80, category:'DevOps'   },
  { id:10, name:'Git / Azure DevOps',     proficiency:88, category:'DevOps'   },
  { id:12, name:'AI API Integration',     proficiency:82, category:'AI'       },
  { id:13, name:'Prompt Engineering',     proficiency:85, category:'AI'       },
]

const CAT_ICONS = { Backend:'⚙️', Frontend:'🎨', Database:'🗄️', DevOps:'🚀', AI:'🤖' }
const BAR       = { Backend:'#3A8FBF', Frontend:'#5CC8DC', Database:'#3A8FBF', DevOps:'#5CC8DC', AI:'#3A8FBF' }

export default function Skills() {
  const [skills, setSkills] = useState(FALLBACK)
  const [active, setActive] = useState('All')

  useEffect(() => { getSkills().then(r => setSkills(r.data)).catch(() => {}) }, [])

  const categories = ['All', ...new Set(skills.map(s => s.category))]
  const filtered   = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section className="py-24 bg-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="chip-orange mb-4">What I Know</span>
          <h2 className="text-4xl font-black text-ink mt-3">
            Technical <span className="heading-line text-teal" style={{ '--tw-text-opacity':1 }}>Skills</span>
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border"
              style={active === c
                ? { background: '#3A8FBF', color: '#fff', borderColor: '#3A8FBF', boxShadow: '0 4px 14px rgba(58,143,191,0.35)' }
                : { background: '#fff', color: '#6b7280', borderColor: '#e5e7eb' }
              }
              onMouseEnter={e => { if (active !== c) { e.currentTarget.style.borderColor='#3A8FBF'; e.currentTarget.style.color='#3A8FBF' } }}
              onMouseLeave={e => { if (active !== c) { e.currentTarget.style.borderColor='#e5e7eb'; e.currentTarget.style.color='#6b7280' } }}
            >
              {c !== 'All' && <span className="mr-1">{CAT_ICONS[c]}</span>}{c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(s => (
            <div key={s.id} className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base">{CAT_ICONS[s.category]}</span>
                  <span className="text-sm font-bold text-ink">{s.name}</span>
                </div>
                <span className="text-xs font-black px-2 py-0.5 rounded-full"
                  style={{ background: BAR[s.category] + '18', color: BAR[s.category] }}>
                  {s.proficiency}%
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${s.proficiency}%`, background: BAR[s.category] }} />
              </div>
              <span className="chip-teal mt-3 !text-[10px] !py-[2px] !px-2">{s.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
