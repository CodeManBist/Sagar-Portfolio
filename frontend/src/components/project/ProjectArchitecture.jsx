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
    <section className="px-6 md:px-12 lg:px-20 py-16 text-center">

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-semibold text-[#001C37] mb-12">
        The Architecture
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-[#E2E8F0] p-6 text-left shadow-sm hover:shadow-md transition"
          >

            {/* Icon Box */}
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#EEF2FF] text-[#4F46E5] mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-[#001C37]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-[13px] text-[#464555] leading-[22px]">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProjectArchitecture;