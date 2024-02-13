import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './section/Hero'
import { Projects } from './section/Projects'
import { About } from './section/About'
import { Footer } from './components/Footer'


function App() {


  return (
    <>
      <Header/>
      <div id="page-container">
      <Hero/>
      <Projects/>
      <About/>
      <Footer/>
      </div>
    </>
  )
}

export default App
