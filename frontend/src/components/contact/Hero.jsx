import React from "react";

const Hero = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-2xl space-y-5">

          {/* Label */}
          <p className="text-purple-400 text-sm tracking-wide">
            Contact
          </p>

          {/* 🔥 Conversational Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Let’s build something{" "}
            <span className="text-purple-400">great together.</span>
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed">
            Whether you have a project in mind or just an idea, feel free to reach out.  
            I’m always open to discussing new opportunities.
          </p>

          {/* 🔥 Subtle divider (unique touch) */}
          <div className="w-10 h-[2px] bg-purple-500/40"></div>

        </div>

      </div>
    </section>
  );
};

export default Hero;