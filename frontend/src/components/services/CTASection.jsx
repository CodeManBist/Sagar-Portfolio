import { SectionContainer, Button, TextGradient } from '../ui'
import { Zap } from 'lucide-react'

const CTASection = () => {
  return (
    <SectionContainer bgVariant="white" as="section" className="relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-amber/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 bg-gradient-to-br from-primary-navy to-primary-navy/90 rounded-2xl overflow-hidden">
        
        {/* Content */}
        <div className="px-6 md:px-12 py-12 md:py-16 lg:py-20 text-center">
          <div className="max-w-3xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-amber/20 text-primary-amber text-xs font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Ready to scale your infrastructure?
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Stop the technical debt.{" "}
              <TextGradient variant="teal-amber" as="span">
                Build fast.
              </TextGradient>
            </h2>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Let&apos;s create a clean, high-performance foundation for sustainable business growth. From architecture to deployment, I&apos;ll handle it all.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button 
                  variant="accent" 
                  size="lg"
                  className="bg-primary-amber text-white hover:bg-primary-amber/90"
                >
                  Start Your Project
                </Button>
              </a>
              <a href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-navy"
                >
                  Book a Consultation
                </Button>
              </a>
            </div>

          </div>
        </div>

      </div>

    </SectionContainer>
  );
};

export default CTASection;
