import React from "react";
import ProjectItem from "./ProjectItem";
import Section from "../common/Section";

const projects = [
  {
    title: "Code_Hub",
    desc: "A simplified Git-like version control system built with Node.js that supports commands like init, add, commit, status, push, pull, and revert to demonstrate how tools like Git work internally.",
    problem: "Need a simple and effective version control solution for developers.",
    solution: "Built a lightweight version control system with a user-friendly interface.",
    result: "Improved code management and collaboration among developers.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/project3.png",
    live: "https://code-hub-taupe.vercel.app",
    code: "https://github.com/CodeManBist/Code_Hub.git",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with clean UI and smooth interactions.",
    problem: "Need strong personal branding and performance.",
    solution: "Designed minimal UI with Tailwind and optimized assets.",
    result: "Better recruiter engagement and faster load time.",
    tech: ["React", "Tailwind"],
    image: "/project1.png",
    live: "https://sagar-portfolio-vedv.vercel.app/",
    code: "https://github.com/CodeManBist/Sagar-Portfolio.git",
  },
  {
    title: "Rentsphere",
    desc: "A comprehensive property rental platform enabling landlords and tenants to connect efficiently.",
    problem: "The rental process was slow and lacked transparency between landlords and tenants.",
    solution: "Developed a seamless property listing and application portal with automated communication features.",
    result: "Streamlined the rental workflow, reducing vacancy periods and improving user satisfaction.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/project2.png",
    live: "https://project1-2tfo.onrender.com/listings", // replace with your actual live demo URL if different
    code: "https://github.com/CodeManBist/rentsphere",
  },
];

const ProjectsList = () => {
  return (
    <Section className="py-24 bg-[#0d0d0d]" containerClassName="space-y-20">

        {projects.map((project, i) => (
          <ProjectItem
            key={i}
            project={project}
            reverse={i % 2 !== 0}
          />
        ))}

    </Section>
  );
};

export default ProjectsList;