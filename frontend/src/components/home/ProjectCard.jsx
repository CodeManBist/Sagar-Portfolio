import { Badge, TextGradient } from '../ui'
import { ArrowRight } from 'lucide-react'

const ProjectCard = ({ image, title, description, tech }) => {
  return (
    <article className="group overflow-hidden rounded-xl bg-white border border-neutral-100 hover:border-primary-purple/20 transition-all duration-300">
      
      {/* Image Container */}
      <div className="overflow-hidden h-56 bg-neutral-100 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-purple transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <Badge key={index} color="neutral" variant="light" size="sm">
              {item}
            </Badge>
          ))}
        </div>

        {/* View Link */}
        <div className="flex items-center gap-2 text-primary-purple font-medium text-sm group/link cursor-pointer">
          View Project
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
        </div>
      </div>

    </article>
  );
};

export default ProjectCard;
