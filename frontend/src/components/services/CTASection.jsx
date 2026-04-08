const CTASection = () => {
  return (
    <section className="page-section page-section-muted">

      <div className="section-wrap">

        <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden
          bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 shadow-xl">

          {/* Badge */}
          <div className="mb-6">
            <span className="rounded-full bg-white/5 px-4 py-1 text-[10px] tracking-[0.28em] text-indigo-200">
              READY TO SHIP
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Ready to scale your{" "}
            <span className="bg-linear-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
              technical infrastructure?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Stop dealing with technical debt. Let's build a clean, high-performance foundation for your business growth today.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="action-button bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-lg hover:opacity-90">
              Start Your Project
            </button>

            <button className="action-button border border-white/10 bg-white/5 text-white hover:bg-white/10">
              Book a Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;