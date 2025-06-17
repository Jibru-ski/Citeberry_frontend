import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <>
    <div className="contact-hero">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Whether you have a question about features, pricing, support, or just want to say hello — the Citeberry team is here to help</p>
          <div className='contact-sp-details'>
            <span>< i class='bx  bx-mail-open'  ></i> support@citeberry.com</span>
            <span>< i class='bx  bx-phone'  ></i>+254 712 345 678</span>
            <span>< i class='bx  bx-location-alt-2'  ></i>Nairobi, Kenya</span>
          </div>
          
        </div>
        <form action="" className='contact-form'>
            <span>Send a Message</span>
            <div className='input-box'>
              <input type="text" placeholder='Name'/>
            </div>
            <div className='input-box'>
              <input type="text" placeholder='Email address' required/>
            </div>
            <div className='input-box'>
              <textarea name="message" placeholder='Message' required></textarea>
            </div>
            <p>By submitting, you agree to processing of your personal information by Citeberrry administration</p>
            <div className='contact-btn'>
              <button className='btn'>Submit</button>
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default Contact