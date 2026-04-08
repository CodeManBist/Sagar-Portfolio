import React from "react";
import ActionButton from "../ui/ActionButton";

const Hero = () => {
  return (
    <main className="px-6 sm:px-10 lg:px-16 xl:px-24 py-24 sm:py-28 lg:py-32">
      
      {/* Container */}
      <section className="max-w-7xl mx-auto">
        
        {/* Top Badges */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
            <span className="brand-pill brand-pill-primary">
            3+ projects delivered
          </span>
            <span className="brand-pill brand-pill-success">
            ● Focused on real business results
          </span>
        </div>

        {/* Heading */}
          <h1 className="max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-left lg:text-6xl">
          I build fast, modern web applications that help{" "}
            <span className="text-indigo-600">businesses grow.</span>
        </h1>

        {/* Description */}
          <p className="section-lead mt-6 max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-left">
          Specialized in crafting scalable MERN stack solutions with a clinical focus on
          user experience and business outcomes. High-performance architecture built
          for growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          
          {/* Primary Button */}
          <ActionButton as="a" href="/contact" className="px-8 py-4 text-center">
            Start Your Project
          </ActionButton>

          {/* Secondary Button */}
          <ActionButton as="a" href="/work" variant="secondary" className="px-8 py-4 text-center">
            View Work
          </ActionButton>
        </div>

      </section>
    </main>
  );
};

export default Hero;