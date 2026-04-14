import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import Services from '../components/home/Services'
import Projects from '../components/home/Projects'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <TrustBar />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
        <Footer />
    </>
  )
}

export default Home
