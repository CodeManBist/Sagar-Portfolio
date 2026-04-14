import React from "react";
import Section from "../common/Section";

const CTA = () => {
  return (
    <Section className="py-24 bg-[#0d0d0d] border-t border-white/10">

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
          <div className="pt-4 flex justify-center sm:block">
            <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition cursor-pointer">
              Contact Me
            </button>
          </div>

        </div>

    </Section>
  );
};

export default CTA;