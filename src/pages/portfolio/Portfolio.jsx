import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import image from '../../assets/avatar-blank.png'
import './portfolio.css'


const Portfolio = () => {

  const [repositores, setRepositories] = useState([]);
  const gitUserName='natanaelsignorini'

  useEffect(() => {
    axios.get('https://api.github.com/users/'+gitUserName+'/repos')
    .then(response => {
      setRepositories(response.data)
    })
  }, [])


  return (
    <section id='portfolio'> 
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          repositores.map(repo => {
            return (
              <article key={repo.id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={repo.name}></img>
                </div>
                <h3>{repo.description}</h3>
                <div className="portfolio__item-button">
                  <a href={repo.html_url} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a> 
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