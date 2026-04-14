import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/projects/Hero'
import ProjectsList from '../components/projects/ProjectList'

const Projects = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <ProjectsList />
        <Footer />
    </>
  )
}

export default Projects
