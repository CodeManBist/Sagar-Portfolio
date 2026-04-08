const ServiceHero = () => {
  return (
    <section className="page-section page-section-muted py-24 text-center">

      {/* Badge */}
      <div className="inline-block mb-6">
        <span className="brand-pill brand-pill-primary text-[11px] tracking-[0.22em]">
          ● SERVICE CATALOG
        </span>
      </div>

      {/* Heading */}
      <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[56px]">
        Surgical engineering <br />
        for{" "}
        <span className="text-indigo-600">
          high-growth
        </span>{" "}
        startups.
      </h1>

      {/* Description */}
      <p className="section-lead mx-auto mt-6 max-w-2xl text-base md:text-lg">
        Precise, scalable, and business-focused development solutions built
        on the MERN stack. Select a category below to explore technical
        specifications and ROI.
      </p>

    </section>
  );
};

export default ServiceHero;