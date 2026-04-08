import { SectionContainer, Badge, TextGradient } from '../ui'

const ServiceHero = () => {
  return (
    <SectionContainer bgVariant="gradient-navy" as="section" className="relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -z-10" />

      <div className="text-center max-w-4xl mx-auto">
        
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in">
          <Badge color="teal" variant="light" size="md">
            SERVICE SOLUTIONS
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Surgical engineering for{" "}
          <TextGradient variant="teal-amber" as="span">
            high-growth businesses
          </TextGradient>
        </h1>

        {/* Description */}
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Precise, scalable, and business-focused development solutions built on the MERN stack. Explore how I can accelerate your growth and technical infrastructure.
        </p>

      </div>

    </SectionContainer>
  );
};

export default ServiceHero;
