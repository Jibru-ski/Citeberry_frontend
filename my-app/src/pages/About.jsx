import React from 'react'
import Logo from '../assets/logo.png'
import '../App.css'

const About = () => {
  return (
    <>
    <div className="about-hero">
      <h1>About Us</h1>

      <section className='about-details'>
      <div className="about-text">
        <p>At <strong>Citeberry</strong>, we believe that generating quotes should be as effortless as picking berries — fast, accurate, and enjoyable</p>
        <p>The name <strong>“Citeberry”</strong> combines the precision of <em>“cite”</em> — representing structured quotations and references — with the warmth of <em>“berry”</em> symbolizing a collection that’s small, sweet, and abundant. It reflects our mission to offer a tool that is both powerful and pleasant to use.</p>
        <p>Built for professionals, freelancers, and growing businesses, Citeberry is more than just a quotation tool — it’s your digital orchard of clarity and convenience. Whether you're creating detailed pricing for a client or managing multiple proposals, Citeberry helps you work smarter, present better, and save time</p>
        <p>With simplicity at its core and professionalism in every detail, we’re making quoting not just easy — but enjoyable.</p>
      </div>
      <div className="about-img">
        <img src={Logo} alt="" height={400}/>
      </div>
    </section>
    </div>
    
    
    </>

  )
}

export default About