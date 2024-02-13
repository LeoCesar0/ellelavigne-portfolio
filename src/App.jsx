import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './section/Hero'
import { Projects } from './section/Projects'


function App() {


  return (
    <>
      <div id="page-container">
      <Header/>
      <Hero/>
      <Projects/>
      </div>
    </>
  )
}

export default App
