const ProjectCTA = () => {
  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-20 text-center">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#001C37]">
          Like this project? Let’s build yours
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-[#464555] leading-[26px]">
          I’m currently accepting new projects for Q3 2024. Let’s discuss how we can elevate your product’s technical architecture.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">

          {/* Primary */}
          <button className="bg-gradient-to-r from-[#493EE5] to-[#6366F1] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:opacity-90 transition">
            Start Project
          </button>

          {/* Secondary */}
          <button className="bg-[#DCE9FF] text-[#493EE5] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#c7d2fe] transition">
            View More Work
          </button>

        </div>

      </div>

    </section>
  );
};

export default ProjectCTA;