import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container flex-grow-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}