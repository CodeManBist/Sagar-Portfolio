import { Button, SectionContainer, TextGradient } from '../ui'
import { Sparkles } from 'lucide-react'

const CTA = () => {
  return (
    <SectionContainer bgVariant="white" as="section" className="relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 bg-gradient-to-r from-primary-teal to-primary-teal/80 rounded-2xl overflow-hidden">
        
        {/* Content Grid */}
        <div className="px-6 md:px-12 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white/90 text-xs font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Ready to transform your digital presence?
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Let&apos;s build something that brings you{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">more customers</span>
                <div className="absolute bottom-1 left-0 right-0 h-3 bg-primary-amber/40 -z-10 rounded" />
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl">
              Discuss your project goals and discover how we can scale your business with modern web technologies and measurable results.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-primary-teal hover:bg-neutral-100"
                >
                  Start Your Project
                </Button>
              </a>
              <a href="/project">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-teal"
                >
                  View My Work
                </Button>
              </a>
            </div>

          </div>
        </div>

      </div>

    </SectionContainer>
  );
};

export default CTA;
