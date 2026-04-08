const ProjectCTA = () => {
  return (
    <section className="page-section page-section-muted text-center">

      <div className="section-wrap max-w-3xl">

        {/* Heading */}
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
          Like this project? Let’s build yours
        </h2>

        {/* Description */}
        <p className="section-lead mt-4 text-sm sm:text-base">
          I’m currently accepting new projects for Q3 2024. Let’s discuss how we can elevate your product’s technical architecture.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* Primary */}
          <button className="action-button bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-md hover:opacity-90">
            Start Project
          </button>

          {/* Secondary */}
          <button className="action-button bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
            View More Work
          </button>

        </div>

      </div>

    </section>
  );
};

export default ProjectCTA;