import React from 'react'
import './about.css'
const About = () => {
  return (
    <section className="a-wrapper">
        <div className="section-heading">
            <h1 className="primaryText">
                About Us 
            </h1>
            <h4 className="secondaryText">
                "Learn Together - Grow Together"
            </h4>
            <img src="./logo.png" height={200} width={200} alt="" />
        </div>
        <div className=" paddings a-container">
            <div className="flexCenter">
             <p>
             The Tech Club – Dragonfly, stands as a true beacon, illuminating a path for students to come together, collaborate, and delve into the ever-evolving realm of technology. It's more than just a club; it's a dynamic platform where coding prowess transforms from theoretical understanding to practical application, seamlessly integrating classroom knowledge with real-world challenges.​ ​

Our vision extends beyond technology alone. We're laying the foundation for a diverse club that embraces students with various interests, creating a familial atmosphere that not only propels academic achievement but also nurtures practical skills and unleashes creativity. In this vibrant space, our planned activities, from workshops to excursions and service projects, promise students a holistic experience that transcends the confines of traditional learning.
            </p>    
            </div> 
            <div className="button">
            <a href="#"><button>Know More</button></a>
            </div>          
        </div>
    </section>
  )
}

export default About