import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Ad_Navbar from './Ad_Navbar'

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
        <Ad_Navbar />
        <Outlet />
        {/* <Body /> */}
        <Footer />
    </div>
  )
}

export default Home