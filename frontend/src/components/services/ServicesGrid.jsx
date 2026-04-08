import { Globe, Layout, LayoutDashboard, Server } from "lucide-react";
import { SectionContainer, Badge } from "../ui";
import { Check } from "lucide-react";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Business Websites",
    desc: "High-performance corporate presences engineered for authority and trust. SEO-first architecture with global scalability.",
    benefits: [
      "Next-day indexing with SSR",
      "99+ Google Lighthouse score",
      "Integrated CMS for updates",
    ],
    tags: ["RESPONSIVE", "SEO", "ANALYTICS"],
    color: "purple",
  },
  {
    icon: <Layout size={24} />,
    title: "Landing Pages",
    desc: "Conversion-optimized funnels with data-backed UX patterns. Turn traffic into measurable business results.",
    benefits: [
      "42% conversion rate increase",
      "A/B testing ready",
      "200ms load time",
    ],
    tags: ["LEAD CAPTURE", "ANALYTICS", "OPTIMIZATION"],
    color: "teal",
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboards & Admin Panels",
    desc: "Complex internal tools that simplify data management. Turn operations into actionable business intelligence.",
    benefits: [
      "Role-Based Access Control",
      "Real-time WebSocket updates",
      "Automated report generation",
    ],
    tags: ["SECURE AUTH", "EXPORT", "LOGS"],
    color: "amber",
  },
  {
    icon: <Server size={24} />,
    title: "Backend & API",
    desc: "Robust Node.js infrastructure built for scale. RESTful APIs to third-party integrations and databases.",
    benefits: [
      "Enterprise-grade security",
      "Auto-scaling cloud setup",
      "Complete API documentation",
    ],
    tags: ["API DOCS", "MIGRATIONS", "TESTING"],
    color: "navy",
  },
];

const ServicesGrid = () => {
  return (
    <SectionContainer bgVariant="light" as="section">
      <div className="grid md:grid-cols-2 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white border border-neutral-100 rounded-xl p-8 hover:border-neutral-200 hover:shadow-lg transition-all duration-300"
          >

            {/* Icon Container */}
            <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6
              ${service.color === "purple" ? "bg-primary-purple/10 text-primary-purple" : ""}
              ${service.color === "teal" ? "bg-primary-teal/10 text-primary-teal" : ""}
              ${service.color === "amber" ? "bg-primary-amber/10 text-primary-amber" : ""}
              ${service.color === "navy" ? "bg-primary-navy/10 text-primary-navy" : ""}
              group-hover:scale-110 transition`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {service.desc}
            </p>

            {/* Benefits */}
            <div className="space-y-2 mb-6 pb-6 border-b border-neutral-100">
              {service.benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className={`w-4 h-4 flex-shrink-0 mt-0.5
                    ${service.color === "purple" ? "text-primary-purple" : ""}
                    ${service.color === "teal" ? "text-primary-teal" : ""}
                    ${service.color === "amber" ? "text-primary-amber" : ""}
                    ${service.color === "navy" ? "text-primary-navy" : ""}`} />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <Badge 
                  key={i} 
                  color={service.color} 
                  variant="light" 
                  size="sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>

          </div>
        ))}

      </div>
    </SectionContainer>
  );
};

export default ServicesGrid;
