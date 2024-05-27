import React from 'react'
import './purpose.css'
const Purpose = () => {
  return (
    <section className="p-wrapper">
        <div className="section-heading flexColStart">
        <h1 className="primaryText ">
            Our Purpose & Outlook
        </h1>
        <h3 className="secondaryText">
            Learn Together - Grow Together!!
        </h3>
        </div>
        <div className="p-container paddings flexSpaceBetween">
           <div className="p-left">
            <img src="./purpose&outlook.jpg" alt="" />
           </div>
           <div className="p-right flexColStart">
            <div className="flexCenter right-card">
                <img src="./1.jpg" alt="" />
                <p className='secondaryText'>Community Building & Networking</p>
            </div>
            <div className="flexCenter right-card">
                <img src="./1.jpg" alt="" />
                <p className='secondaryText'>Interactive Tech Talks & Seminars</p>
            </div>
            <div className="flexCenter right-card">
                <img src="./1.jpg" alt="" />
                <p className='secondaryText'>Hackthons & Coding Competitions</p>
            </div>
            <div className="flexCenter right-card">
                <img src="./1.jpg" alt="" />
                <p className='secondaryText'>Skills Develpment</p>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Purpose