const ServiceHero = () => {
  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-24 text-center">

      {/* Badge */}
      <div className="inline-block mb-6">
        <span className="text-[11px] tracking-wider font-medium text-[#4F46E5] bg-[#E0E7FF] px-4 py-1 rounded-full">
          ● SERVICE CATALOG
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#0F172A] leading-tight max-w-4xl mx-auto">
        Surgical engineering <br />
        for{" "}
        <span className="text-[#4F46E5]">
          high-growth
        </span>{" "}
        startups.
      </h1>

      {/* Description */}
      <p className="mt-6 text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-[28px]">
        Precise, scalable, and business-focused development solutions built
        on the MERN stack. Select a category below to explore technical
        specifications and ROI.
      </p>

    </section>
  );
};

export default ServiceHero;