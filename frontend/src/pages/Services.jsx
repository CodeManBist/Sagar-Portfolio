import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const Services = () => {
	return (
		<>
			<Navbar />
			<section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20 text-white">
				<h1 className="text-4xl md:text-5xl font-bold">Services</h1>
				<p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
					End-to-end web development services focused on clean UI, fast performance,
					and maintainable frontend architecture.
				</p>
			</section>
			<Footer />
		</>
	)
}

export default Services
