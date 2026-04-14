import React from 'react'
import PageLayout from '../components/common/PageLayout'
import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import Services from '../components/home/Services'
import Projects from '../components/home/Projects'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <PageLayout>
        <Hero />
        <TrustBar />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
    </PageLayout>
  )
}

export default Home
