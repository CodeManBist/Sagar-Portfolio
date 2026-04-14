import React from "react";
import { FaStar } from "react-icons/fa";
import Section from "../common/Section";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    feedback:
      "Sagar delivered a clean and scalable web app. The attention to detail and performance optimization was impressive.",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Client",
    feedback:
      "Very professional and reliable. Built my website end-to-end including deployment. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <Section className="py-24 bg-[#0d0d0d]">

        {/* Heading */}
        <div className="max-w-2xl mb-12 space-y-4">
          <p className="text-purple-500 text-sm tracking-wide">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Feedback
          </h2>

          <p className="text-[#a1a1aa]">
            What clients say about working with me.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-white/10 bg-white/[0.02]
              hover:bg-white/[0.04] hover:border-white/20 
              transition-all duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 text-purple-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                "{t.feedback}"
              </p>

              {/* User */}
              <div>
                <p className="text-white text-sm font-medium">
                  {t.name}
                </p>
                <p className="text-[#71717a] text-xs">
                  {t.role}
                </p>
              </div>

            </div>
          ))}

        </div>

    </Section>
  );
};

export default Testimonials;