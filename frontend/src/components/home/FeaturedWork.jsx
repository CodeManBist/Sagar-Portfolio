import ProjectCard from "./ProjectCard";
import SectionHeading from "../ui/SectionHeading";

const FeaturedWork = () => {
  const projects = [
    {
      image: "/project1.jpg", // replace with your image
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
    <section className="page-section page-section-muted">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A few representative builds, all presented with the same hierarchy and language."
          className="mb-10"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;