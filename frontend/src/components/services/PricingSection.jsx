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
    <section className="page-section page-section-muted">

      {/* Top */}
      <div className="section-wrap mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-indigo-600">
            PRICING
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Value-led investment models
          </h2>
        </div>

        <p className="section-lead max-w-md text-sm">
          All projects include comprehensive documentation, 30 days of post-launch support, and full source code ownership.
        </p>

      </div>

      {/* Cards */}
      <div className="section-wrap grid gap-6 md:grid-cols-3">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 md:p-8 border transition-all ${
              plan.highlight
                ? "surface-card border-indigo-200 shadow-lg scale-[1.03]"
                : "surface-card border-slate-200"
            }`}
          >

            {/* Badge */}
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-[10px] text-white">
                MOST REQUESTED
              </span>
            )}

            {/* Title */}
            <p className="mb-2 text-xs tracking-[0.18em] text-slate-400">
              {plan.title}
            </p>

            {/* Price */}
            <h3 className="text-2xl font-bold text-indigo-600">
              {plan.price}
            </h3>

            {/* Description */}
            <p className="section-lead mt-3 text-sm leading-6">
              {plan.desc}
            </p>

            {/* Features */}
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-indigo-600">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`action-button mt-6 w-full ${
                plan.highlight
                  ? "bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-md hover:opacity-90"
                  : "border border-indigo-200 text-indigo-700 hover:bg-indigo-50"
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