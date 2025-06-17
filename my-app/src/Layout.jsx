import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Logo from './assets/logo.png'

const Layout = () => {
  return (
    <>
    <header className="blurry">
        <div className="logo">
          <img src={Logo} alt="Logo" height={60}/>
        </div>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <nav className="Login">
          <Link to={"/"}>Login</Link>
          <Link to={"/"}>Signup</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Citeberry</p>
      </footer>
    </>
  )
}

export default Layout