import { Zap, Clock, Rocket } from "lucide-react";

const ProjectOutcomes = () => {
  const data = [
    {
      icon: <Zap size={18} />,
      value: "99.9%",
      desc: "System uptime through the first quarter of deployment.",
    },
    {
      icon: <Clock size={18} />,
      value: "<200ms",
      desc: "Average API latency for complex global data requests.",
    },
    {
      icon: <Rocket size={18} />,
      value: "3x",
      desc: "Developer velocity increase via modular component library.",
    },
  ];

  return (
    <section className="bg-[#05233B] px-6 md:px-12 lg:px-20 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-10">
          Measurable Outcomes
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

          {data.map((item, i) => (
            <div key={i} className="py-6 sm:px-6">

              {/* Icon */}
              <div className="text-[#A5B4FC] mb-4">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-2xl font-bold text-white">
                {item.value}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[#94A3B8] leading-[22px] max-w-xs">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectOutcomes;