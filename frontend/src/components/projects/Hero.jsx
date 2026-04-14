
const Hero = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0d0d0d] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="max-w-3xl space-y-4">

          {/* Label */}
          <p className="text-purple-500 text-sm tracking-wide">
            Work
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Selected Projects
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base md:text-lg">
            A collection of projects showcasing real-world problem solving, scalable architecture, and clean UI.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;