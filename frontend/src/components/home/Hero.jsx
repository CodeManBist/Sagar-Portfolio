import React from "react";

const Hero = () => {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-3xl space-y-6 transition-transform duration-300 hover:scale-[1.01]">

          {/* Small intro */}
          <p className="text-purple-500 text-sm tracking-wide">
            Full Stack Developer
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Building clean &{" "}
            <span className="relative inline-block">
              scalable
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <br />
            web applications.
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-lg max-w-xl">
            I design and develop modern web applications using React, Node.js,
            and scalable backend systems — focused on performance, usability, and clean UI.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">

            {/* Primary */}
            <button className="px-6 py-3 rounded-md bg-white text-black transition-all duration-200 
            hover:bg-neutral-200 hover:-translate-y-1 hover:shadow-lg">
              View Work
            </button>

            {/* Secondary */}
            <button className="px-6 py-3 rounded-md border border-white/10 text-white transition-all duration-200 
            hover:bg-white/5 hover:-translate-y-1">
              Contact Me
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;