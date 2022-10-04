import React from 'react'
import './nav.css'
import {
  AiOutlineHome, 
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage
} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <div>
      <a href='#home'> <AiOutlineHome/> </a>
      <a href='#about'> <AiOutlineUser/> </a>
      <a href='#experience'> <AiOutlineBook/> </a>
      <a href='#services'> <RiServiceLine/> </a>
      <a href='#contact'> <AiOutlineMessage/> </a>

    </div>
  )
}

export default Nav