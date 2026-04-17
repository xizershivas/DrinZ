const jobs = [
  {
    role: 'Full-Stack Developer', company: 'iRely PH', location: 'Makati City', period: '2024 – 2026',
    stack: 'Ext JS · C# Core API · MSSQL · Docker · Git',
    bullets: [
      'Built enterprise apps for transport, tax forms, and dealer credit card systems.',
      'Created Docker-based testing environments and reviewed pull requests.',
      'Integrated AI commands to automate bug-fixing and workflow automation.',
      'Mentored junior devs with code reviews and architecture guidance.',
    ],
  },
  {
    role: '.NET Developer III', company: 'RealPage Inc.', location: 'Pasig City', period: '2023 – 2024',
    stack: 'C# · ASP.NET Core · MSSQL · React',
    bullets: [
      'Enhanced Onesite Property Management System with new features and API optimizations.',
      'Led debugging and issue resolution ensuring seamless user experience.',
    ],
  },
  {
    role: '.NET Programmer / Analyst', company: 'Metrobank', location: 'Taguig City', period: '2022 – 2023',
    stack: 'C# · ASP.NET Core API · MSSQL · Keycloak SSO',
    bullets: [
      'Developed the Remittance API System for international transactions.',
      'Integrated security features and data validation to improve system reliability.',
    ],
  },
  {
    role: 'Application Developer', company: 'Globe Telecom', location: 'Mandaluyong City', period: '2018 – 2022',
    stack: 'C# · JavaScript · MSSQL · Jenkins',
    bullets: [
      'Created automation scripts for Globe 5G FWA and Broadband App.',
      'Developed and optimized backend processes for data migration and reporting.',
    ],
  },
]

const DOT_COLOR = ['#F58027', '#10DEBB', '#F58027', '#10DEBB']

export default function Experience() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="chip-teal mb-4">My Journey</span>
          <h2 className="text-4xl font-black text-ink mt-3">
            Work <span className="heading-line text-orange">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-200" />

          {jobs.map((job, i) => (
            <div key={i} className={`relative flex gap-6 mb-10 flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white mt-5 z-10"
                style={{ background: DOT_COLOR[i], boxShadow: `0 0 0 3px ${DOT_COLOR[i]}33` }} />

              <div className="hidden md:block md:flex-1" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:flex-1 card p-6"
                onMouseEnter={e => e.currentTarget.style.borderColor = '#F58027'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-ink">{job.role}</h3>
                    <p className="font-semibold text-sm text-orange">{job.company}</p>
                    <p className="text-muted text-xs mt-0.5">{job.location}</p>
                  </div>
                  <span className="chip-teal !text-[11px]">{job.period}</span>
                </div>

                <p className="text-xs font-semibold mb-3" style={{ color: '#10DEBB' }}>{job.stack}</p>

                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted flex gap-2">
                      <span className="mt-0.5 flex-shrink-0 text-orange">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
