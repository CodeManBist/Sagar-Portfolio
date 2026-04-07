import React from 'react'
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import ServiceHero from "../components/services/ServiceHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WorkflowSection from "../components/services/WorkflowSection";
import PricingSection from "../components/services/PricingSection";
import CTASection from "../components/services/CTASection";

const Services = () => {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <ServicesGrid />
      <WorkflowSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default Services
