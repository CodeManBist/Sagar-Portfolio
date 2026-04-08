import { Activity, Server, Shield } from "lucide-react";

const ProjectArchitecture = () => {
  const items = [
    {
      icon: <Activity size={18} />,
      title: "Real-time Engine",
      desc: "Implemented Socket.io for live market updates, reducing frontend polling overhead by 85% and ensuring millisecond-perfect data sync.",
    },
    {
      icon: <Server size={18} />,
      title: "Scalable API",
      desc: "Built a modular Node.js/Express RESTful API with Redis caching layers to handle complex portfolio aggregations in under 200ms.",
    },
    {
      icon: <Shield size={18} />,
      title: "Secure Auth",
      desc: "Engineered a custom JWT-based RBAC (Role-Based Access Control) system with multi-factor authentication and audit logging.",
    },
  ];

  return (
    <section className="page-section text-center">

      {/* Heading */}
      <h2 className="mb-12 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        The Architecture
      </h2>

      {/* Cards */}
      <div className="section-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {items.map((item, i) => (
          <div
            key={i}
            className="surface-card p-6 text-left transition hover:shadow-md"
          >

            {/* Icon Box */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-slate-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="section-lead mt-2 text-[13px] leading-6">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProjectArchitecture;