import React from 'react'
import './home.css'
import image from '../../assets/avatar-blank.png'
import CTA from '../../components/homebuton/Butons'
import HeaderSocials from './HomeSocials'

const Home = () => {
 
  return (
    <header>
      <section id='home' className='container header__container'>
        <h5>Hello I`m</h5>
        <h1>Natanael Signorini</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='image__me'>
          <img src={image} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </section>
    </header>
  )
}

export default Home