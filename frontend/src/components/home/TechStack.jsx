import React from 'react'
import { SectionContainer, Badge } from '../ui'

const TechStack = () => {
  const techs = [
    { name: "MongoDB", color: "teal" },
    { name: "Express.js", color: "navy" },
    { name: "React", color: "purple" },
    { name: "Node.js", color: "amber" },
    { name: "Tailwind CSS", color: "teal" },
    { name: "PostgreSQL", color: "purple" },
  ]

  return (
    <SectionContainer bgVariant="gradient-teal" as="section" className="py-12">
      <div className="text-center">
        {/* Label */}
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 mb-4 uppercase">
          Tech Stack & Expertise
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
          Built with Modern Technologies
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 group cursor-default"
            >
              <div className="text-2xl font-bold mb-2 text-neutral-700 group-hover:scale-110 transition">
                {tech.name.split(' ')[0].slice(0, 2).toUpperCase()}
              </div>
              <p className="text-xs font-medium text-neutral-600 text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-12 text-neutral-600 text-sm max-w-2xl mx-auto">
          Leveraging industry-standard tools and frameworks to build scalable, performant, and maintainable solutions.
        </p>
      </div>
    </SectionContainer>
  )
}

export default TechStack
