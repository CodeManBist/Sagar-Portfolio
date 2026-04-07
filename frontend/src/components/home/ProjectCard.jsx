const ProjectCard = ({ image, title, description, tech }) => {
  return (
    <article className="group">
      
      {/* Image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#64748B] text-sm mb-3">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs bg-[#E2E8F0] text-[#475569] px-2 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

    </article>
  );
};

export default ProjectCard;