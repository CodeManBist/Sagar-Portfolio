import ServiceCard from "./ServiceCard";
import { Layout, Rocket, BarChart, Server } from "lucide-react";

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
    <section className="bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0F172A] mb-10">
          Core Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Services;