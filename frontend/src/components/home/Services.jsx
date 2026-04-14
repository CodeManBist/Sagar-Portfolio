import React from "react";
import { FaCode, FaServer, FaLayerGroup, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Building responsive and modern user interfaces using React and Tailwind CSS.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Designing scalable APIs and backend systems with Node.js and databases.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Apps",
    desc: "End-to-end web applications with seamless frontend and backend integration.",
  },
  {
    icon: <FaCloud />,
    title: "Deployment & Hosting",
    desc: "Deploying applications on cloud platforms with domain setup, SSL, and performance optimization.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        {/* Heading */}
        <div className="max-w-2xl mb-12 space-y-4">
          <p className="text-purple-500 text-sm tracking-wide">
            Services
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            What I Do
          </h2>

          <p className="text-[#a1a1aa]">
            I build scalable, high-performance web applications with clean UI and modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-white/10 bg-white/[0.02]
              hover:bg-white/[0.04] hover:border-white/20 
              hover:-translate-y-1
              transition-all duration-300"
            >

              {/* Icon */}
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-md bg-white/5 
              text-white/80 group-hover:text-purple-400 transition">
                <span className="text-lg">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-medium mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;