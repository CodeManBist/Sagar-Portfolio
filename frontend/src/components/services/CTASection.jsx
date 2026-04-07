const CTASection = () => {
  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-20">

      <div className="max-w-6xl mx-auto">

        <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden
          bg-gradient-to-br from-[#0B0F2A] via-[#0A0E24] to-[#0B0F2A] shadow-xl">

          {/* Badge */}
          <div className="mb-6">
            <span className="text-[10px] tracking-widest text-[#A5B4FC] bg-white/5 px-4 py-1 rounded-full">
              READY TO SHIP
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to scale your{" "}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
              technical infrastructure?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto leading-[28px]">
            Stop dealing with technical debt. Let's build a clean, high-performance foundation for your business growth today.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <button className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white px-6 py-3 rounded-md text-sm font-medium shadow-lg hover:opacity-90 transition">
              Start Your Project
            </button>

            <button className="bg-white/5 text-white px-6 py-3 rounded-md text-sm font-medium border border-white/10 hover:bg-white/10 transition">
              Book a Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;