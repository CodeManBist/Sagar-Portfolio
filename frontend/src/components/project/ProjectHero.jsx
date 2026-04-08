

const ProjectHero = () => {
  return (
    <section className="page-section py-16">
      <div className="section-wrap max-w-5xl">

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Fintech Wealth Dashboard
        </h1>

        <p className="section-lead mt-4 text-lg md:text-xl">
          A high-performance wealth management interface designed for real-time asset tracking and institutional-grade portfolio analytics.
        </p>
        <hr className="my-6 border-t border-slate-200" />

        {/* Meta */}
        <div className="mt-8 grid grid-cols-3 gap-8 text-slate-600">

        {/* ROLE */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-600 sm:text-xs">
            ROLE
          </p>
          <p className="mt-1 text-[14px] font-semibold text-slate-900">
            Full Stack Developer
          </p>
        </div>

        {/* DURATION */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-600 sm:text-xs">
            DURATION
          </p>
          <p className="mt-1 text-[14px] font-semibold text-slate-900">
            3 Months
          </p>
        </div>

         {/* STACK */}
         <div>
           <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-600 sm:text-xs">
             STACK
           </p>
           <p className="mt-1 text-[14px] font-semibold text-slate-900">
             MongoDB, Express, React, Node
           </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectHero;