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
    <section className="page-section page-section-muted text-center">

      {/* Top Label */}
      <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-indigo-600">
        THE WORKFLOW
      </p>

      {/* Heading */}
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        From logic to launch
      </h2>

      {/* Cards */}
      <div className="section-wrap grid gap-6 md:grid-cols-3">

        {workflow.map((item, index) => (
          <div
            key={index}
            className="surface-card relative p-6 text-left transition hover:shadow-md"
          >

            {/* Step Number (faded background) */}
            <span className="absolute right-6 top-4 text-4xl font-bold text-slate-200">
              {item.step}
            </span>

            {/* Title */}
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="section-lead mt-3 max-w-xs text-sm leading-6">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WorkflowSection;