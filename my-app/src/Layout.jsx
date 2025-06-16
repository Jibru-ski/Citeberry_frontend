import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

const Layout = () => {
  return (
    <>
    <header className="header">
        <h1>My Application</h1>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Application</p>
      </footer>
    </>
  )
}

export default Layout