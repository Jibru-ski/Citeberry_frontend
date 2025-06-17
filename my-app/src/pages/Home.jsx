import React from 'react'
import '../App.css'
import HeroImg from '../assets/home-hero-img.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="home-hero">
        <div className="home-hero-text">
            <h1>Quote <span>Smarter</span>, Close <span>Faster</span></h1>
            <h4>Generate accurate, client-ready quotes in minutes — no spreadsheets, no hassle.</h4>
            <Link className='hero-btn' to='/login'><button className='btn'>Get Started</button></Link>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" height={300}/>
        </div>
    </div>
    
    
    </>
  )
}

export default Home