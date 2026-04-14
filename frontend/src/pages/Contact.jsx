import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
          Let&apos;s build something great together. Reach out for freelance work,
          collaborations, or project discussions.
        </p>
      </section>
      <Footer />
    </>
  )
}

export default Contact
