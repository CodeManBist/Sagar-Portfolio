import React from "react";
import { FaCode, FaServer, FaLayerGroup, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Modern and responsive UI built with performance and usability in mind.",
    points: [
      "React & Tailwind UI",
      "Responsive design",
      "Performance optimization",
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Robust and scalable backend systems with clean architecture.",
    points: [
      "REST APIs",
      "Authentication",
      "Database design",
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Applications",
    desc: "Complete end-to-end solutions from frontend to backend.",
    points: [
      "Frontend + Backend integration",
      "State management",
      "Deployment ready apps",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Deployment & Hosting",
    desc: "Launch your product with reliable hosting and performance tuning.",
    points: [
      "Cloud deployment",
      "Domain & SSL setup",
      "Performance optimization",
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02]
              hover:bg-white/[0.04] hover:border-white/20 
              transition-all duration-300"
            >

              {/* Icon */}
              <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-md bg-white/5 
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
              <p className="text-[#a1a1aa] text-sm mb-4">
                {service.desc}
              </p>

              {/* 🔥 Bullet Points (key difference) */}
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;