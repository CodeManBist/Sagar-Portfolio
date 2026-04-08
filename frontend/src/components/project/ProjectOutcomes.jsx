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
    <section className="page-section bg-slate-950">

      <div className="section-wrap">

        {/* Heading */}
        <h2 className="mb-10 text-lg font-semibold tracking-tight text-white sm:text-xl">
          Measurable Outcomes
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {data.map((item, i) => (
            <div key={i} className="py-6 sm:px-6">

              {/* Icon */}
              <div className="mb-4 text-indigo-300">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-2xl font-bold text-white">
                {item.value}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
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