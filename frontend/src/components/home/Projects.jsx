import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Section from "../common/Section";

const projects = [
  {
    title: "Movie Web App",
    desc: "A full-stack movie platform with authentication, search, and dynamic UI using React and Node.js.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio with responsive design, animations, and clean UI.",
    tech: ["React", "Tailwind"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <Section className="bg-[#0d0d0d]">

        {/* Heading */}
        <div className="max-w-2xl mb-12 space-y-4">
          <p className="text-purple-500 text-sm tracking-wide">
            Projects
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Selected Work
          </h2>

          <p className="text-[#a1a1aa]">
            A collection of projects showcasing my skills in building scalable and modern web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-white/10 bg-white/[0.02]
              hover:bg-white/[0.04] hover:border-white/20 
              transition-all duration-300"
            >

              {/* Title */}
              <h3 className="text-white text-lg font-medium mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#a1a1aa] text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm">

                <a
                  href={project.live}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live
                </a>

                <a
                  href={project.code}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition"
                >
                  <FaGithub />
                  Code
                </a>

              </div>

            </div>
          ))}

        </div>

    </Section>
  );
};

export default Projects;