import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import Features from '../components/Features'
import FeaturedWork from '../components/FeaturedWork'
import Services from '../components/Services'
import CTA from '../components/CTA'

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
    </>
  )
}

export default Home
