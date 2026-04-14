import React from "react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    title: "Discovery",
    desc: "Understanding your requirements, goals, and project scope.",
  },
  {
    title: "Planning",
    desc: "Designing architecture and choosing the right tech stack.",
  },
  {
    title: "Development",
    desc: "Building scalable and high-performance applications.",
  },
  {
    title: "Launch",
    desc: "Deployment, testing, and optimization for production.",
  },
];

const Process = () => {
  return (
    <Section className="py-20 md:py-24 bg-[#0d0d0d] border-t border-white/10">

        {/* Heading */}
        <SectionHeading
          className="max-w-2xl mb-16 space-y-4"
          eyebrow="Process"
          title="How I Work"
          description="A simple and structured process to deliver high-quality results efficiently."
          eyebrowClassName="text-purple-400 text-sm tracking-wide"
        />

        {/* 🔥 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <div key={i} className="relative group">

              {/* 🔥 Connector line (desktop only) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block left-5 absolute top-5 right-[-50%] w-full h-[1px] bg-white/10" />
              )}

              {/* Step content */}
              <div className="space-y-3">

                {/* Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium group-hover:border-purple-400 transition">
                  {`0${i + 1}`}
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-medium">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#a1a1aa] text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

    </Section>
  );
};

export default Process;