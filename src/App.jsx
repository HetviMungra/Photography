import React from 'react'

import './App.css'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import About from './componets/About'
import OurServices from './componets/OurServices'
import OurPortfolio from './componets/OurPortfolio'
import OurClients from './componets/OurClients'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <OurServices/>
     <OurPortfolio/>
     <OurClients/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
