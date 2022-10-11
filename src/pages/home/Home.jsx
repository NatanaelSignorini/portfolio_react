import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import './home.css'
import CTA from '../../components/homebuton/Butons'
import HeaderSocials from './HomeSocials'

const Home = () => {
  const [user, setUser] = useState(null);
  const gitUserName='natanaelsignorini'

  useEffect(() => {
    axios.get('https://api.github.com/users/'+gitUserName)
    .then(response => {
      setUser(response.data)
    })
  }, [])

  return (
    <header>
      <section id='home' className='container header__container'>
        <h5>Hello I`m</h5>
        <h1>{user?.name}</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='image__me'>
          <img src={user?.avatar_url} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </section>
    </header>
  )
}

export default Home