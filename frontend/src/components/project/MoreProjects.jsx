const MoreProjects = () => {
  const projects = [
    {
      tag: "AI / ML",
      title: "Supply Chain Optimizer",
      desc: "Predictive analytics engine for global logistics using Python and AWS SageMaker.",
      img: "/p1.png",
    },
    {
      tag: "HEALTHCARE",
      title: "SwiftHealth Connect",
      desc: "HIPAA-compliant telemedicine portal with end-to-end encrypted video streaming.",
      img: "/p2.png",
    },
    {
      tag: "SECURITY",
      title: "Sentinel Shield",
      desc: "Real-time threat monitoring system for enterprise network infrastructure.",
      img: "/p3.png",
    },
  ];

  return (
    <section id="more-projects" className="page-section bg-indigo-50">

      <div className="section-wrap">

        {/* Heading */}
        <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          More Projects
        </h2>

        <p className="section-lead mt-2 mb-8 text-sm">
          Exploring other technical solutions and architectures.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((item, i) => (
            <div
              key={i}
              className="surface-card overflow-hidden transition hover:shadow-md"
            >

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                {/* Tag */}
                <span className="rounded-full bg-indigo-50 px-2 py-1 text-[10px] text-indigo-600">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {item.desc}
                </p>

                {/* Link */}
                <p className="mt-3 cursor-pointer text-xs font-medium text-indigo-600 hover:underline">
                  View Case Study →
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default MoreProjects;