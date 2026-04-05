import React from "react";

const Hero = () => {
  return (
    <main className="px-6 sm:px-10 lg:px-16 xl:px-24 py-24 sm:py-28 lg:py-32">
      
      {/* Container */}
      <section className="max-w-7xl mx-auto">
        
        {/* Top Badges */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
          <span className="px-4 py-1.5 text-[#493EE5] bg-[#DCE9FF] rounded-full text-xs sm:text-sm font-medium">
            3+ projects delivered
          </span>
          <span className="px-4 py-1.5 text-[#22C55E] bg-[#F0FDF4] rounded-full text-xs sm:text-sm font-medium">
            ● Focused on real business results
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001C37] leading-tight max-w-4xl text-center lg:text-left">
          I build fast, modern web applications that help{" "}
          <span className="text-[#493EE5]">businesses grow.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-[#464555] text-sm sm:text-base md:text-lg max-w-2xl text-center lg:text-left">
          Specialized in crafting scalable MERN stack solutions with a clinical focus on
          user experience and business outcomes. High-performance architecture built
          for growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          
          {/* Primary Button */}
          <a
            href="/contact"
            className="bg-[#493EE5] px-8 py-4 rounded-xl text-white text-sm font-medium shadow-lg 
            hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] 
            transition-all duration-200 text-center"
          >
            Start Your Project
          </a>

          {/* Secondary Button */}
          <a
            href="/work"
            className="bg-[#D2E4FF] text-[#001C37] px-8 py-4 rounded-xl text-sm font-medium 
            hover:bg-[#c6dcff] hover:shadow-md hover:scale-[1.03] active:scale-[0.98] 
            transition-all duration-200 text-center"
          >
            View Work
          </a>
        </div>

      </section>
    </main>
  );
};

export default Hero;