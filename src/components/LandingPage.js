import React from 'react'
import Dale from '../images/Dale.JPG'
import Kara from '../images/RubyKara500.jpg'

const LandingPage = () => {
  return (
    <section>
      <div>
        <h1 className='text-title'> Welcome to The Crafty Eagle</h1>
        <h3>Artisan & Custom Crafts</h3>
      </div>

      <div className='crafty-eagle'>
        <button
        className='shop-now-btn'>Shop Now</button>
      </div>
      <br/>
      <div>
      <h2 className='text-title'>What We Do?</h2>
      <p>We make artisan and custom crafts: 
       <ul>
          <li>Wood Working</li>
          <li>Crochet</li>
          <li>Cross Stitch</li>
          <li>Knitting</li>
          <li>Needle Felting</li>
          <li>Dream Catchers</li>
          <li>Web Sites such as this and Others</li>
          <li>and More with More to Come as We Learn New Skills</li>
       </ul>
      </p>
      </div>
      
      
      <h3 className='text-title'>Who Are We?</h3>
        <p>A couple of kooks in love who love creating and sharing. You can call us The Peoples.</p>
        <div className='landing-info-div'>
        <p> Him<div className><img src={Dale} alt="Dale" className='dale'/></div>Call Me Dale, I am the Eagle of Woodworking and Outdoor Items</p>

        <p>Her <div><img src={Kara} alt="Kara" className='kara'/></div>Call Me Kara, I am the Crafty part of the team. I do needlework of most types and build Full Stack Web Applications for more information on my career please visit: <a href="https://www.karapeoples.com">karapeoples.com</a></p>
      </div>
    </section>
  )
}

export default LandingPage
