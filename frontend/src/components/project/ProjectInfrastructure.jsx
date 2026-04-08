

const ProjectInfrastructure = () => {
  return (
    <section className="page-section">

      <div className="section-wrap relative overflow-hidden rounded-2xl">

        <img
          src="/infra.jpg"
          alt="infra"
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 px-4 text-center">
          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Infrastructure Overview
            </h3>
            <p className="mt-2 text-sm text-indigo-200">
              Visualizing data flow from frontend to backend.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ProjectInfrastructure; 