import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './section/Hero'
import { Projects } from './section/Projects'
import { About } from './section/About'


function App() {


  return (
    <>
      <div id="page-container">
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      </div>
    </>
  )
}

export default App
