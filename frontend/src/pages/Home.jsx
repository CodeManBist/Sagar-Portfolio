import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import TechStack from '../components/home/TechStack'
import Features from '../components/home/Features'
import FeaturedWork from '../components/home/FeaturedWork'
import Services from '../components/home/Services'
import Stats from '../components/home/Stats'
import ComparisonSection from '../components/home/ComparisonSection'
import Testimonials from '../components/home/Testimonials'
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
        <Stats />
        <ComparisonSection />
        <Testimonials />
        <CTA />
        <Footer />
    </>
  )
}

export default Home
