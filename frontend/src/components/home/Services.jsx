import ServiceCard from "./ServiceCard";
import { Layout, Rocket, BarChart, Server } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const Services = () => {
  const services = [
    {
      icon: <Layout size={20} />,
      title: "Business Websites",
      description:
        "Professional digital presence built to convert visitors into loyal customers.",
    },
    {
      icon: <Rocket size={20} />,
      title: "Landing Pages",
      description:
        "High-impact, performance-optimized pages designed for specific marketing goals.",
    },
    {
      icon: <BarChart size={20} />,
      title: "Dashboards",
      description:
        "Complex data visualization tools and internal management systems.",
    },
    {
      icon: <Server size={20} />,
      title: "Backend/API",
      description:
        "Secure, scalable server architectures and RESTful/GraphQL API development.",
    },
  ];

  return (
    <section className="page-section page-section-muted">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Core offer"
          title="Services that keep the stack lean"
          description="Each service page should read from the same system so the portfolio feels deliberate instead of assembled section by section."
          align="center"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;