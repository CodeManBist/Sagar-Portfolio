import React from "react";

const CTA = () => {
  return (
    <section className="py-24 bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        {/* 🔥 Card-style CTA (different from home) */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-10 md:p-14 text-center">

          {/* Subtle glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[400px] h-[200px] bg-purple-500/20 blur-3xl opacity-30" />
          </div>

          <div className="relative space-y-6 max-w-2xl mx-auto">

            {/* Label */}
            <p className="text-purple-400 text-sm tracking-wide">
              Let’s Work Together
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Have a project in mind?
            </h2>

            {/* Description */}
            <p className="text-[#a1a1aa] text-base md:text-lg">
              I help turn ideas into scalable, production-ready web applications. Let’s discuss your project.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center sm:block">
              <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition">
                Start a Project
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;