import React from 'react'

import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import About from './pages/about/About'
import Experience from './pages/experience/Experience'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
     
    
    </>
  )
}

export default App