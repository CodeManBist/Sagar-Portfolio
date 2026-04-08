

import { SectionContainer } from "../ui"

const ProjectHero = () => {
  return (
    <SectionContainer bgVariant="white" as="section" className="relative">

      <div className="space-y-8">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
          Fintech Wealth Dashboard
        </h1>

        {/* Description */}
        <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
          A high-performance wealth management interface designed for real-time asset tracking and institutional-grade portfolio analytics.
        </p>

        {/* Divider */}
        <div className="border-t border-neutral-200 pt-8" />

        {/* Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Role */}
          <div>
            <p className="text-xs font-bold tracking-widest text-primary-purple uppercase mb-2">
              Role
            </p>
            <p className="text-lg font-semibold text-neutral-900">
              Full Stack Developer
            </p>
          </div>

          {/* Duration */}
          <div>
            <p className="text-xs font-bold tracking-widest text-primary-teal uppercase mb-2">
              Duration
            </p>
            <p className="text-lg font-semibold text-neutral-900">
              3 Months
            </p>
          </div>

          {/* Stack */}
          <div>
            <p className="text-xs font-bold tracking-widest text-primary-amber uppercase mb-2">
              Tech Stack
            </p>
            <p className="text-lg font-semibold text-neutral-900">
              MERN + PostgreSQL
            </p>
          </div>

        </div>

      </div>

    </SectionContainer>
  );
};

export default ProjectHero;
