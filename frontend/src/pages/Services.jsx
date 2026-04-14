import React from 'react'
import PageLayout from '../components/common/PageLayout'
import Hero from '../components/services/Hero'
import ServicesGrid from '../components/services/ServicesGrid'
import Process from '../components/services/Process'
import CTA from '../components/services/CTA'

const Services = () => {
	return (
		<PageLayout>
			<Hero />
			<ServicesGrid />
			<Process />
			<CTA />
		</PageLayout>
	)
}

export default Services
