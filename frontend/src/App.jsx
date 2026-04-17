import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"           element={<Hero />} />
        <Route path="/about"      element={<About />} />
        <Route path="/skills"     element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/contact"    element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
