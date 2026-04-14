import React from 'react'
import PageLayout from '../components/common/PageLayout'
import Hero from '../components/projects/Hero'
import ProjectsList from '../components/projects/ProjectList'
import CTA from '../components/projects/CTA'

const Projects = () => {
  return (
    <PageLayout>
        <Hero />
        <ProjectsList />
        <CTA />
    </PageLayout>
  )
}

export default Projects
