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
      <h3 className="mb-2 text-[18px] font-semibold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-sm text-slate-600">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>

    </article>
  );
};

export default ProjectCard;