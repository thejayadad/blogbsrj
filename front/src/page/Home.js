import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container-md">
        <Navbar />
        <Category />
        <Footer />

    </div>
  )
}

export default Home