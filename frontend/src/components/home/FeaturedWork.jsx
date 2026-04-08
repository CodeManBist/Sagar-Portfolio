import ProjectCard from "./ProjectCard";
import { SectionContainer } from "../ui";

const FeaturedWork = () => {
  const projects = [
    {
      image: "/project1.jpg",
      title: "Data-Driven Analytics Dashboard",
      description:
        "Optimized performance and load times through React efficiency and Node.js caching strategies.",
      tech: ["React", "Chart.js", "Node.js"],
    },
    {
      image: "/project2.jpg",
      title: "E-commerce Experience Optimization",
      description:
        "Streamlined checkout flow and order management with a custom headless commerce architecture.",
      tech: ["Next.js", "MongoDB", "Stripe"],
    },
  ];

  return (
    <SectionContainer bgVariant="white" as="section">
      
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Featured Projects
        </h2>
        <p className="text-neutral-600">
          Real solutions that deliver measurable results for businesses.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </SectionContainer>
  );
};

export default FeaturedWork;
