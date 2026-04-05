import ProjectCard from "./ProjectCard";

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
    <section className="bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
            Featured Work
          </h2>
          <p className="text-[#64748B] mt-2">
            Real projects designed to deliver results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;