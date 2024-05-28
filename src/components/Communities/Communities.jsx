import React from 'react'
import './communities.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../utils/slider.json';
const Communities = () => {
  return (
    <section className="c-wa">
      <div className="section-heading paddings">
         <h1 className='primaryText'>
          Our Communities
         </h1>
         <p className="paragraph">
         Join our vibrant tech communities, where you can engage with passionate individuals from diverse backgrounds and experiences, and broaden your expertise in an energizing and cooperative environment.​Explore the Future - Join Dragonfly and unlock a world of tech communities
         </p>
      
      </div>
      <div className="paddings c-container">
        <Swiper>
          {
            data.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className="r-card">
                  <img src={card.image} alt="" />
                  <h5>{card.tittle}</h5>
                  <p>{card.description}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
    </section>
  )
}

export default Communities