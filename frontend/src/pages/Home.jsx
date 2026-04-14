import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <TrustBar />
        <Footer />
    </>
  )
}

export default Home
