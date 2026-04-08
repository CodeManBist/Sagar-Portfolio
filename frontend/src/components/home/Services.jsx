import ServiceCard from "./ServiceCard";
import { SectionContainer } from "../ui";
import { Layout, Rocket, BarChart, Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Layout size={24} />,
      title: "Business Websites",
      description:
        "Professional digital presence built to convert visitors into loyal customers.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Landing Pages",
      description:
        "High-impact, performance-optimized pages designed for marketing goals.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Dashboards",
      description:
        "Complex data visualization tools and internal management systems.",
    },
    {
      icon: <Server size={24} />,
      title: "Backend/API",
      description:
        "Secure, scalable server architectures and RESTful/GraphQL APIs.",
    },
  ];

  return (
    <SectionContainer bgVariant="light" as="section">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          What I Offer
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          End-to-end solutions for your digital needs, from concept to deployment.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <ServiceCard key={index} {...item} />
        ))}
      </div>

    </SectionContainer>
  );
};

export default Services;
