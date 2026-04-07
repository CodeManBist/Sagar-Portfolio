const plans = [
  {
    title: "THE MVP",
    price: "$2k–$5k",
    desc: "Ideal for validating a concept or launching a high-end marketing site with custom interactions.",
    features: [
      "Custom React Frontend",
      "14-Day Delivery Sprints",
      "SEO Architecture",
    ],
    button: "Start Discovery",
    highlight: false,
  },
  {
    title: "THE FULL STACK",
    price: "$5k–$12k",
    desc: "Complete web application with secure user auth, complex database logic, and admin dashboard.",
    features: [
      "MERN Architecture",
      "Custom Analytics Dashboard",
      "API Integration",
    ],
    button: "Book Now",
    highlight: true,
  },
  {
    title: "THE PLATFORM",
    price: "$15k+",
    desc: "Complex multi-user platforms requiring high scalability, microservices, and custom external APIs.",
    features: [
      "Scalable Microservices",
      "24/7 Priority Support",
      "Multi-Tenancy Setup",
    ],
    button: "Request Quote",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-[#F5F7FB] px-6 md:px-12 lg:px-20 py-20">

      {/* Top */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">

        <div>
          <p className="text-xs tracking-[3px] text-[#6366F1] font-semibold mb-2">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Value-led investment models
          </h2>
        </div>

        <p className="text-sm text-[#64748B] max-w-md">
          All projects include comprehensive documentation, 30 days of post-launch support, and full source code ownership.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 md:p-8 border transition-all ${
              plan.highlight
                ? "bg-white border-[#6366F1] shadow-lg scale-[1.03]"
                : "bg-white border-[#E2E8F0]"
            }`}
          >

            {/* Badge */}
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-[#6366F1] text-white px-3 py-1 rounded-full">
                MOST REQUESTED
              </span>
            )}

            {/* Title */}
            <p className="text-xs text-[#94A3B8] mb-2">
              {plan.title}
            </p>

            {/* Price */}
            <h3 className="text-2xl font-bold text-[#4F46E5]">
              {plan.price}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-[#64748B] leading-[22px]">
              {plan.desc}
            </p>

            {/* Features */}
            <ul className="mt-5 space-y-3 text-sm text-[#475569]">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#4F46E5]">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-6 w-full py-2 rounded-md text-sm font-medium transition ${
                plan.highlight
                  ? "bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white shadow-md hover:opacity-90"
                  : "border border-[#6366F1] text-[#4F46E5] hover:bg-[#EEF2FF]"
              }`}
            >
              {plan.button}
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PricingSection;