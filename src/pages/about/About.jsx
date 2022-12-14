import React from 'react'
import './about.css'
import image from '../../assets/avatar-blank.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

      <div className="container about__container">
       
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="About_Image"></img> 
          </div> 
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small> 200+ Worldwide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum, or lipsum as it is sometimes known, 
            is dummy text used in laying out print, 
            graphic or web designs. 
            The passage is attributed to an unknown typesetter 
            in the 15th century who is thought to have scrambled 
            parts of Cicero's De Finibus Bonorum et Malorum for 
            use in a type specimen book. It usually begins with
          </p>

          <a href="#contact" className='btn btn-primary'>Le`s Talk</a>

        </div>
      </div> 
      

    </section>
  )
}

export default About