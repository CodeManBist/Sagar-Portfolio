import React from "react";
import ProjectItem from "./ProjectItem";
import Section from "../common/Section";

const projects = [
  {
    title: "Movie Web App",
    desc: "Full-stack movie platform with authentication and real-time search.",
    problem: "Users needed a fast and clean interface to browse movies.",
    solution: "Built optimized APIs with debounced search and responsive UI.",
    result: "Improved performance and user engagement significantly.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/image1.jpg",
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with clean UI and smooth interactions.",
    problem: "Need strong personal branding and performance.",
    solution: "Designed minimal UI with Tailwind and optimized assets.",
    result: "Better recruiter engagement and faster load time.",
    tech: ["React", "Tailwind"],
    image: "/image2.jpg",
    live: "#",
    code: "#",
  },
  {
    title: "Rentsphere",
    desc: "A comprehensive property rental platform enabling landlords and tenants to connect efficiently.",
    problem: "The rental process was slow and lacked transparency between landlords and tenants.",
    solution: "Developed a seamless property listing and application portal with automated communication features.",
    result: "Streamlined the rental workflow, reducing vacancy periods and improving user satisfaction.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/image3.jpg",
    live: "https://rentsphere.vercel.app/", // replace with your actual live demo URL if different
    code: "https://github.com/CodeManBist/rentsphere",
  },
  {
    title: "Codehub",
    desc: "A developer community platform for sharing code snippets, projects, and feedback.",
    problem: "Developers lacked a central hub for collaboration and discovering reusable code components.",
    solution: "Built an interactive platform with code upload, search, and comment features.",
    result: "Fostered a growing community and sped up dev workflows by encouraging code sharing.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    image: "/image4.jpg",
    live: "https://codehub-one.vercel.app/", // replace with your actual live demo URL if different
    code: "https://github.com/CodeManBist/codehub",
  },
];

const ProjectsList = () => {
  return (
    <Section className="py-24 bg-[#0d0d0d]" containerClassName="space-y-20">

        {projects.map((project, i) => (
          <ProjectItem
            key={i}
            project={project}
            reverse={i % 2 !== 0}
          />
        ))}

    </Section>
  );
};

export default ProjectsList;