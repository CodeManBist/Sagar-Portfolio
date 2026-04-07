import FeatureCard from "./FeatureCard";
import { Zap, Pencil, TrendingUp, Database } from "lucide-react";

const Features = () => {
  const data = [
    {
      icon: <Zap size={20} />,
      title: "Fast delivery",
      description: "Rapid turnaround times without compromising on code quality or performance metrics."
    },
    {
      icon: <Pencil size={20} />,
      title: "Clean and modern UI",
      description: "Clinical aesthetics inspired by top-tier SaaS platforms like Stripe and Linear."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Business-focused",
      description: "Every line of code is written with your business growth and conversion in mind."
    },
    {
      icon: <Database size={20} />,
      title: "Scalable backend",
      description: "Robust architectures designed to handle growth from 1 to 100k+ users seamlessly."
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
};

export default Features;