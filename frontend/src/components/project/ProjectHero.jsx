

const ProjectHero = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-[60px] sm:text-4xl md:text-5xl font-extrabold text-[#001C37] leading-tight">
          Fintech Wealth Dashboard
        </h1>

        <p className="mt-4 text-[#464555] text-[20px]">
          A high-performance wealth management interface designed for real-time asset tracking and institutional-grade portfolio analytics.
        </p>
        <hr className="my-6 border-t border-[#E2E8F0]" />

        {/* Meta */}
        <div className="mt-8 grid grid-cols-3 gap-8 text-[#475569]">

        {/* ROLE */}
        <div>
          <p className="text-[10px] sm:text-xs text-[#493EE5] font-semibold tracking-wide uppercase">
            ROLE
          </p>
          <p className="mt-1 text-semibold text-[14px] text-[#001C37]">
            Full Stack Developer
          </p>
        </div>

        {/* DURATION */}
        <div>
          <p className="text-[10px] sm:text-xs text-[#493EE5] font-semibold tracking-wide uppercase">
            DURATION
          </p>
          <p className="mt-1 text-semibold text-[14px] text-[#001C37]">
            3 Months
          </p>
        </div>

         {/* STACK */}
         <div>
           <p className="text-[10px] sm:text-xs text-[#493EE5] font-semibold tracking-wide uppercase">
             STACK
           </p>
           <p className="mt-1 text-semibold text-[14px] text-[#001C37]">
             MongoDB, Express, React, Node
           </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectHero;