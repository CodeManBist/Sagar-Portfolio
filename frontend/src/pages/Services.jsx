import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/services/Hero'
import ServicesGrid from '../components/services/ServicesGrid'
import Process from '../components/services/Process'
import CTA from '../components/services/CTA'

const Services = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<ServicesGrid />
			<Process />
			<CTA />
			<Footer />
		</>
	)
}

export default Services
