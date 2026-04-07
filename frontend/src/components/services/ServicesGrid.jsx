import { Globe, Layout, LayoutDashboard, Server } from "lucide-react";

const services = [
  {
    icon: <Globe size={18} />,
    title: "Business Websites",
    desc: "High-performance corporate presences engineered for maximum authority and brand trust. Built with SEO-first architecture and global scalability in mind.",
    benefits: [
      "Next-day indexing with Next.js SSR",
      "99+ Google Lighthouse performance scores",
      "Integrated CMS for effortless updates",
    ],
    tags: ["RESPONSIVE UI", "ANALYTICS SETUP", "TECHNICAL SEO"],
  },
  {
    icon: <Layout size={18} />,
    title: "Landing Pages",
    desc: "Conversion-optimized funnels designed with data-backed UX patterns. Engineered to minimize friction and turn traffic into measurable business leads.",
    benefits: [
      "42% average increase in conversion rates",
      "A/B testing ready infrastructure",
      "Lightning-fast 200ms initial load time",
    ],
    tags: ["LEAD CAPTURE", "HEATMAP INTEGRATION", "COPY REVIEW"],
  },
  {
    icon: <LayoutDashboard size={18} />,
    title: "Dashboards & Admin Panels",
    desc: "Complex internal tools that simplify data management. Custom React-based dashboards that turn messy operations into actionable business intelligence.",
    benefits: [
      "Role-Based Access Control (RBAC)",
      "Real-time data via WebSockets",
      "Automated PDF/Excel report generation",
    ],
    tags: ["SECURE AUTH", "DATA EXPORT", "ACTIVITY LOGS"],
  },
  {
    icon: <Server size={18} />,
    title: "Backend & API Development",
    desc: "Robust Node.js infrastructure built for scale. From RESTful APIs to third-party integrations and complex database architectures.",
    benefits: [
      "Enterprise-grade security standards",
      "Auto-scaling AWS/Vercel cloud setup",
      "Comprehensive Swagger/Postman docs",
    ],
    tags: ["API DOCUMENTATION", "DB MIGRATIONS", "UNIT TESTING"],
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 hover:shadow-lg transition"
          >

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-[#EEF2FF] text-[#4F46E5] rounded-md mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0F172A]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-[#64748B] leading-[24px]">
              {service.desc}
            </p>

            {/* Benefits */}
            <div className="mt-5 bg-[#F1F5F9] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#4F46E5] mb-3">
                KEY BENEFITS
              </p>

              <ul className="space-y-2 text-sm text-[#475569]">
                {service.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#4F46E5]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-5">
              <p className="text-[10px] text-[#94A3B8] mb-2 tracking-wide">
                WHAT YOU GET
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-[#EEF2FF] text-[#4F46E5] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default ServicesGrid;