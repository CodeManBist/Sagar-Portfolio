import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import Features from '../components/Features'
import FeaturedWork from '../components/FeaturedWork'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <TechStack />
        <Features />
        <FeaturedWork />
    </>
  )
}

export default Home
