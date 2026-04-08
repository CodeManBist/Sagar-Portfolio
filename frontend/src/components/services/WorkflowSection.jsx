import { SectionContainer, TextGradient } from "../ui";
import { ArrowRight } from "lucide-react";

const workflow = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We define your data schemas and system architecture before coding. Precision starts with the foundation.",
  },
  {
    step: "02",
    title: "Agile Sprints",
    desc: "Bi-weekly deliverables with working software. MERN stack for rapid prototyping and iteration.",
  },
  {
    step: "03",
    title: "Launch & Support",
    desc: "Production-ready deployment on AWS or Vercel. CI/CD pipelines keep your app secure and updated.",
  },
];

const WorkflowSection = () => {
  return (
    <SectionContainer bgVariant="white" as="section">

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Development Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          From logic to <TextGradient variant="teal-amber" as="span">launch</TextGradient>
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          A structured approach ensuring clarity, quality, and predictable delivery timelines.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="grid md:grid-cols-3 gap-8 relative">
        
        {/* Connecting lines (hidden on mobile) */}
        <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-purple to-primary-teal opacity-20" />

        {workflow.map((item, index) => (
          <div
            key={index}
            className="relative group"
          >
            {/* Step indicator circle */}
            <div className="absolute -top-8 left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-purple to-primary-teal flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {item.step}
            </div>

            {/* Card */}
            <div className="bg-white border border-neutral-100 rounded-xl p-8 pt-12 mt-4 hover:border-primary-purple/20 hover:shadow-lg transition-all duration-300">

              {/* Title */}
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Arrow indicator */}
              {index < workflow.length - 1 && (
                <div className="text-primary-purple opacity-50 text-2xl hidden md:block">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}

            </div>
          </div>
        ))}

      </div>

    </SectionContainer>
  );
};

export default WorkflowSection;
