
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = ({ project, reverse }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

      {/* 🔥 IMAGE */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[220px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className={`${reverse ? "md:order-1" : ""} space-y-4`}>

        <h3 className="text-white text-xl md:text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="text-[#a1a1aa]">
          {project.desc}
        </p>

        {/* Problem / Solution / Result */}
        <div className="space-y-2 text-sm text-[#a1a1aa]">
          <p><span className="text-white">Problem:</span> {project.problem}</p>
          <p><span className="text-white">Solution:</span> {project.solution}</p>
          <p><span className="text-white">Result:</span> {project.result}</p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3">

          <a
            href={project.live}
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <FaExternalLinkAlt className="text-xs" />
            Demo
          </a>

          <a
            href={project.code}
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectItem;