import React from 'react'
import './communities.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../utils/slider.json';
import { sliderSettings } from '../utils/common';
const Communities = () => {
  return (
    <section className="c-wrapper">
      <div className="section-heading paddings">
         <h1 className='primaryText'>
          Our Communities
         </h1>
         <p className="paragraph">
         Join our vibrant tech communities, where you can engage with passionate individuals from diverse backgrounds and experiences, and broaden your expertise in an energizing and cooperative environment.​Explore the Future - Join Dragonfly and unlock a world of tech communities
         </p>
         <div className="c-head">
          <h4 className='secondaryText'>Unlock your Potential With <br/> Our Diverse Tech Communities</h4>
        </div>
      </div>
      <div className="paddings c-container">
       
       
        <Swiper {...sliderSettings}>
        <SliderButtons />
          {
            data.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className="c-card">
                  <img src={card.image} alt="" />
                  <h5 className='primaryText'>{card.title}</h5>
                  <p>{card.description}</p>
                  <button className="butt">Explore</button>
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

const SliderButtons = () =>{
  const swiper = useSwiper();
  return(
      <div className="c-buttons">
          <button onClick={()=> swiper.slidePrev()}>&lt;</button>
          <button onClick={()=> swiper.slideNext()}>&gt;</button>
      </div>
  )
}