import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ParticleBackground from './ParticleBackground'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on every page change
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <ParticleBackground />
      <div className="relative z-[1] min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
