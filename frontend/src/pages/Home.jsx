import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import TechStack from '../components/home/TechStack'
import Features from '../components/home/Features'
import FeaturedWork from '../components/home/FeaturedWork'
import Services from '../components/home/Services'
import CTA from '../components/home/CTA'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <TechStack />
        <Features />
        <FeaturedWork />
        <Services />
        <CTA />
        <Footer />
    </>
  )
}

export default Home
