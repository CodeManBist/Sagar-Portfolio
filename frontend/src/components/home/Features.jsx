import FeatureCard from "./FeatureCard";
import { SectionContainer } from "../ui";
import { Zap, Pencil, TrendingUp, Database } from "lucide-react";

const Features = () => {
  const data = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Rapid turnaround times without compromising on code quality or performance metrics."
    },
    {
      icon: <Pencil size={24} />,
      title: "Modern Design",
      description: "Clinical aesthetics inspired by top-tier SaaS platforms like Stripe and Linear."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Growth-Driven",
      description: "Every line of code is written with your business growth and conversion in mind."
    },
    {
      icon: <Database size={24} />,
      title: "Scalable",
      description: "Robust architectures designed to handle growth from 1 to 100k+ users seamlessly."
    }
  ];

  return (
    <SectionContainer bgVariant="light" as="section">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Why Work With Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Professional Development Services
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Features;
