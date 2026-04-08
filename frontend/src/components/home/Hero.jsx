import React from "react";
import { Badge, Button, TextGradient, SectionContainer } from "../ui";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <SectionContainer bgVariant="white" className="relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="animate-fade-in">
          {/* Top Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge color="purple" variant="light" size="md">
              3+ Projects Delivered
            </Badge>
            <Badge color="success" variant="light" size="md">
              ● Business Focused
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            I build fast, modern web applications that help{" "}
            <TextGradient variant="purple-teal" as="span">
              businesses grow
            </TextGradient>
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
            Specialized in crafting scalable MERN stack solutions with clinical focus on user experience and business outcomes. High-performance architecture built for rapid growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
            </a>
            <a href="/project">
              <Button variant="outline" size="lg">
                View Featured Work
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-neutral-200">
            <div>
              <p className="text-2xl font-bold text-primary-purple">3+</p>
              <p className="text-sm text-neutral-600">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-teal">MERN</p>
              <p className="text-sm text-neutral-600">Full-Stack Specialist</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-amber">100%</p>
              <p className="text-sm text-neutral-600">Client Focused</p>
            </div>
          </div>
        </div>

        {/* Right Visual - Placeholder for Hero Image or Pattern */}
        <div className="relative hidden lg:block h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-primary-teal/10 to-transparent rounded-2xl" />
          <div className="absolute inset-0 rounded-2xl border border-primary-purple/20" />
          
          {/* Animated elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary-purple rounded-xl opacity-10 animate-float" />
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-teal rounded-full opacity-10 animate-float animation-delay-2000" />
        </div>

      </div>
    </SectionContainer>
  );
};

export default Hero;
