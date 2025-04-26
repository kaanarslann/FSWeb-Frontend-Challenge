import { useState } from 'react'
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import data from "./data"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='toggle-options'>
        <button>DARK MODE</button>
        <span> | </span>
        <span>TÜRKÇE'YE GEÇ</span>
      </section>
      <header>
        <div className='logo'>
          <img />
        </div>
        <nav>
          <span>Skills</span>
          <span>Projects</span>
          <span>Hire me</span>
        </nav>
      </header>
      <section className='hero'>
        <Hero />
      </section>
      <section className='skills'>
        <Skills />
      </section>
      <section className='profile'>
        <Profile />
      </section>
      <section className='projects'>
        <Projects />
      </section>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}

export default App
