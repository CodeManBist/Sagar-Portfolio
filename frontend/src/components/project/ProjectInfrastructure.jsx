

const ProjectInfrastructure = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden relative">

        <img
          src="/infra.jpg"
          alt="infra"
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              Infrastructure Overview
            </h3>
            <p className="text-[#CBD5F5] text-sm mt-2">
              Visualizing data flow from frontend to backend.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ProjectInfrastructure; 