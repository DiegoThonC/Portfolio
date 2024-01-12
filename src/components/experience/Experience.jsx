import './Experience.css';
import Angular from '../../assets/angular_.svg';
import Javascript from '../../assets/javascript_.svg';
import React from '../../assets/react_.svg';
import Bootstrap from '../../assets/bootstrap_.svg';
import Tailwind from '../../assets/tailwind_.svg';
import Html from '../../assets/html_.svg';
import Css from '../../assets/css3_.svg';
import Ionic from '../../assets/ionic_.svg';
import Node from '../../assets/nodejs_.svg';
import Nest from '../../assets/nestjs_.svg';
import Firebase from '../../assets/firebase_.svg';
import Mongo from '../../assets/mongodb_.svg';


const Experience = () => {

  const experience = [
    {
      img: Angular,
      name: 'Angular'
    },
    {
      img: Javascript,
      name: 'Javascript'
    },
    {
      img: React,
      name: 'React'
    },
    {
      img: Bootstrap,
      name: 'Bootstrap'
    },
    {
      img: Tailwind,
      name: 'Tailwind'
    },
    {
      img: Html,
      name: 'Html'
    },
    {
      img: Css,
      name: 'Css'
    },
    {
      img: Ionic,
      name: 'Ionic'
    },
    {
      img: Node,
      name: 'NodeJs'
    },
    {
      img: Nest,
      name: 'NestJs'
    },
    {
      img: Firebase,
      name: 'Firebase'
    },
    {
      img: Mongo,
      name: 'MongoDB'
    }
  ]

  return (
    <section id='experience'>
      <h5>What Skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__frontend'>
          <div className="experience__content">
            {
              experience.map(({img, name}, index) => {
                return (
                  <article key={index} className='experience__details'>
                    <img src={img} alt={name} />
                    <small className='text-light'>{name}</small>
                  </article>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience