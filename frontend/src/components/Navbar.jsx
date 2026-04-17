import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About',      path: '/about'      },
  { label: 'Skills',     path: '/skills'     },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects',   path: '/projects'   },
  { label: 'Contact',    path: '/contact'    },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200'
        : 'bg-[#1a2d45]/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className={`text-2xl font-black tracking-tight group-hover:text-orange transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>drin</span>
          <span className="text-2xl font-black text-orange">Z</span>
          <span className="ml-1 w-2 h-2 rounded-full bg-orange animate-pulse-slow" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, path }) => {
            const active = location.pathname === path
            return (
              <Link key={path} to={path}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  active ? 'text-orange' : scrolled ? 'text-muted hover:text-ink' : 'text-white/70 hover:text-white'
                }`}
              >
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-orange" />
                )}
                {label}
              </Link>
            )
          })}
          <Link to="/contact" className="btn-orange ml-4 !py-2 !px-5 !text-sm">
            Hire Me
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 focus:outline-none" onClick={() => setMenuOpen(o => !o)}>
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'opacity-0 w-0' : ''}`} />
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className={`border-t px-6 py-3 flex flex-col gap-1 shadow-lg ${scrolled ? 'bg-white border-slate-200' : 'bg-[#1a2d45] border-white/10'}`}>
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={path} to={path}
              className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                location.pathname === path
                  ? 'text-orange bg-orange/10'
                  : scrolled ? 'text-muted hover:text-orange hover:bg-orange/10' : 'text-white/70 hover:text-orange hover:bg-orange/10'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn-orange mt-2 w-full !py-3 text-center">Hire Me</Link>
        </div>
      </div>
    </nav>
  )
}
