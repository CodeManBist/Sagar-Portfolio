import React from "react";

const CTA = () => {
  return (
    <section className="py-24 bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-2xl mx-auto text-center space-y-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Let’s build something great together
          </h2>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base md:text-lg">
            Have a project in mind? I’m open to freelance opportunities and collaborations.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button className="px-6 py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition cursor-pointer">
              Contact Me
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;