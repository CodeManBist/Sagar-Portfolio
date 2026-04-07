const workflow = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We define your data schemas and system architecture before a single line of UI is coded. Precision starts with the foundation.",
  },
  {
    step: "02",
    title: "Agile Sprints",
    desc: "Bi-weekly deliverables where you see working software. I use the MERN stack to rapidly prototype and iterate on core business logic.",
  },
  {
    step: "03",
    title: "Deployment & Ops",
    desc: "Production-ready launch on AWS or Vercel. Continuous CI/CD pipelines ensure your app stays updated and secure.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-20 text-center">

      {/* Top Label */}
      <p className="text-xs tracking-[3px] text-[#6366F1] font-semibold mb-4">
        THE WORKFLOW
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12">
        From logic to launch
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {workflow.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-[#E2E8F0] rounded-2xl p-6 text-left hover:shadow-md transition"
          >

            {/* Step Number (faded background) */}
            <span className="absolute top-4 right-6 text-4xl font-bold text-[#E2E8F0]">
              {item.step}
            </span>

            {/* Title */}
            <h3 className="text-base font-semibold text-[#0F172A]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-[#64748B] leading-[24px] max-w-xs">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WorkflowSection;