import React from 'react'
import './nav.css'
import { useState } from 'react'
import {
  AiOutlineHome, 
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage
} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} 
      className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}> <AiOutlineBook/> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}> <AiOutlineMessage/> </a>
    </nav>
  )
}

export default Nav