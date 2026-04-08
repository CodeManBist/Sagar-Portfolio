import { SectionContainer, Badge, Button } from "../ui";
import { Check } from "lucide-react";

const plans = [
  {
    title: "The MVP",
    price: "$2k–$5k",
    desc: "Perfect for validating concepts or launching high-end marketing sites with custom interactions.",
    features: [
      "Custom React Frontend",
      "14-Day Delivery Sprints",
      "SEO Architecture",
      "30 Days Support",
    ],
    button: "Start Discovery",
    highlight: false,
    color: "purple",
  },
  {
    title: "The Full Stack",
    price: "$5k–$12k",
    desc: "Complete web application with secure auth, complex database logic, and admin dashboard.",
    features: [
      "MERN Architecture",
      "Analytics Dashboard",
      "API Integration",
      "60 Days Support",
      "Performance Optimization",
    ],
    button: "Book Now",
    highlight: true,
    color: "teal",
  },
  {
    title: "The Platform",
    price: "$15k+",
    desc: "Complex multi-user platforms with high scalability, microservices, and external API integrations.",
    features: [
      "Scalable Microservices",
      "24/7 Priority Support",
      "Multi-Tenancy",
      "Custom Infrastructure",
      "Team Training",
    ],
    button: "Request Quote",
    highlight: false,
    color: "amber",
  },
];

const PricingSection = () => {
  return (
    <SectionContainer bgVariant="light" as="section">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Value-Driven Investment Models
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          All packages include comprehensive documentation, post-launch support, and full source code ownership.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 relative">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
              plan.highlight
                ? "md:scale-105 ring-2 ring-primary-teal shadow-xl"
                : "hover:shadow-lg"
            }`}
          >

            {/* Background */}
            <div className={`absolute inset-0 ${
              plan.highlight 
                ? "bg-gradient-to-br from-primary-teal/5 to-transparent" 
                : "bg-white"
            }`} />

            {/* Content */}
            <div className="relative p-8 bg-white border border-neutral-100 rounded-xl h-full flex flex-col">

              {/* Badge */}
              {plan.highlight && (
                <div className="mb-6">
                  <Badge color="teal" variant="filled" size="sm">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              {/* Title */}
              <p className="text-xs font-bold tracking-widest text-neutral-600 uppercase mb-2">
                {plan.title}
              </p>

              {/* Price */}
              <h3 className={`text-3xl font-bold mb-2 ${
                plan.highlight ? "text-primary-teal" : "text-neutral-900"
              }`}>
                {plan.price}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {plan.desc}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-neutral-100 mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? "text-primary-teal" : "text-primary-purple"
                    }`} />
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button 
                variant={plan.highlight ? "secondary" : "outline"}
                size="md"
                className="w-full"
              >
                {plan.button}
              </Button>

            </div>

          </div>
        ))}

      </div>

    </SectionContainer>
  );
};

export default PricingSection;
