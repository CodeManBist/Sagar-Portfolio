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
    <section className="bg-[#f0f4ff] px-6 md:px-12 lg:px-20 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-bold text-[#001C37]">
          More Projects
        </h2>

        <p className="text-sm text-[#464555] mt-2 mb-8">
          Exploring other technical solutions and architectures.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
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
                <span className="text-[10px] bg-[#EEF2FF] text-[#493EE5] px-2 py-1 rounded-full">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-sm font-semibold text-[#0F172A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-[#64748B] leading-[20px]">
                  {item.desc}
                </p>

                {/* Link */}
                <p className="mt-3 text-xs text-[#4F46E5] font-medium cursor-pointer hover:underline">
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