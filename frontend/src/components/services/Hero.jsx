import React from "react";

const Hero = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Label */}
          <p className="text-purple-400 text-sm tracking-wide">
            Services
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            What I Can{" "}
            <span className="relative inline-block">
              Help You With
              {/* 🔥 subtle underline */}
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-purple-500/20 blur-sm"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base md:text-lg max-w-xl mx-auto">
            From idea to deployment, I help build scalable and high-performance web applications tailored to your needs.
          </p>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">

            <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-black 
            transition-all duration-200 
            hover:bg-neutral-200 hover:-translate-y-1 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Contact Me
            </button>

            <button className="w-full sm:w-auto px-6 py-3 rounded-md border border-white/10 text-white 
            transition-all duration-200 
            hover:bg-white/5 hover:-translate-y-1">
              View Work
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;