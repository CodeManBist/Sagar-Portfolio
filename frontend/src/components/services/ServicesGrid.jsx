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
    <section className="page-section page-section-muted">
      <div className="section-wrap grid gap-8 md:grid-cols-2">

        {services.map((service, index) => (
          <div
            key={index}
            className="surface-card p-6 transition hover:shadow-lg md:p-8"
          >

            {/* Icon */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900">
              {service.title}
            </h3>

            {/* Description */}
            <p className="section-lead mt-3 text-sm leading-6">
              {service.desc}
            </p>

            {/* Benefits */}
            <div className="mt-5 rounded-xl bg-slate-100 p-4">
              <p className="mb-3 text-xs font-semibold text-indigo-600">
                KEY BENEFITS
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                {service.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-5">
              <p className="mb-2 text-[10px] tracking-[0.2em] text-slate-400">
                WHAT YOU GET
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-[10px] text-indigo-600"
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