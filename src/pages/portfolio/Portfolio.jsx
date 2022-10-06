import React from 'react'
import './portfolio.css'

import image1 from '../../assets/avatar-blank.png'



const data = [
  {
    id: 1,
    image:image1,
    title: ' Projeto 1',
    github: 'https://github.com'
  },
  {
    id: 2,
    image:image1,
    title: ' Projeto 2',
    github: 'https://github.com'
  },
  {
    id: 3,
    image:image1,
    title: ' Projeto 3',
    github: 'https://github.com'
  },
  {
    id: 4,
    image:image1,
    title: ' Projeto 4',
    github: 'https://github.com'
  },
  {
    id: 5,
    image:image1,
    title: ' Projeto 5',
    github: 'https://github.com'
  },
  {
    id: 6,
    image:image1,
    title: ' Projeto 6',
    github: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-button">
                  <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a> 
                </div>
              </article>

            )
          })
        }

        

      </div>
    
    
    </section>
  )
}

export default Portfolio