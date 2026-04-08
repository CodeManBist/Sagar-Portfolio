import React from 'react'
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"  
import ProjectHero from "../components/project/ProjectHero";
import ProjectChallenge from "../components/project/ProjectChallenge";
import ProjectArchitecture from "../components/project/ProjectArchitecture";
import ProjectInfrastructure from "../components/project/ProjectInfrastructure";
import ProjectOutcomes from "../components/project/ProjectOutcomes";
import ProjectImpact from "../components/project/ProjectImpact";
import MoreProjects from "../components/project/MoreProjects";
import ProjectCTA from "../components/project/ProjectCTA";
const Project = () => {
  return (
    <>
      <Navbar />
      <ProjectHero />
      <ProjectChallenge />
      <ProjectArchitecture />
      <ProjectInfrastructure />
      <ProjectOutcomes />
      <ProjectImpact />
      <MoreProjects />
      <ProjectCTA />
      <Footer />
    </>
  )
}

export default Project
