import { useState } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import { OptionsContextProvider } from './context/OptionsContext'
import './App.css'

function App() {

  return (
    <OptionsContextProvider>
      <section className='header'>
        <Header />
      </section>
      <section className='hero mt-20'>
        <Hero/>
      </section>
      <section className='skills mt-20'>
        <Skills/>
      </section>
      <section className='profile mt-20'>
        <Profile/>
      </section>
      <section className='projects mt-20'>
        <Projects/>
      </section>
      <footer className='footer mt-20'>
        <Footer/>
      </footer>
    </OptionsContextProvider>
  )
}

export default App
