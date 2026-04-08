import { SectionContainer, Card, TextGradient } from '../ui'
import { Check, X } from 'lucide-react'

const ComparisonSection = () => {
  const comparison = [
    { feature: "Business-First Approach", you: true, freelancers: false },
    { feature: "Post-Launch Support", you: true, freelancers: false },
    { feature: "Performance Optimization", you: true, freelancers: false },
    { feature: "Code Quality & Testing", you: true, freelancers: false },
    { feature: "Scalable Architecture", you: true, freelancers: false },
    { feature: "24H Response Time", you: true, freelancers: true },
    { feature: "Real-time Communication", you: true, freelancers: false },
    { feature: "Complete Documentation", you: true, freelancers: false },
  ]

  return (
    <SectionContainer bgVariant="white" as="section" className="relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Why Choose This Partnership
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Go Beyond Traditional <TextGradient variant="teal-amber" as="span">Freelancing</TextGradient>
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          What sets this partnership apart from typical freelance arrangements.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-neutral-100 shadow-lg">
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-6 grid grid-cols-3 gap-4">
          <div className="font-semibold">Feature</div>
          <div className="text-center font-semibold">This Partnership</div>
          <div className="text-center font-semibold">Typical Freelancers</div>
        </div>

        {comparison.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-4 p-5 border-t border-neutral-100 ${
              index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
            } hover:bg-neutral-100 transition`}
          >
            <div className="font-medium text-neutral-900">
              {item.feature}
            </div>
            <div className="flex justify-center">
              {item.you ? (
                <Check className="w-5 h-5 text-primary-teal font-bold" />
              ) : (
                <X className="w-5 h-5 text-neutral-300" />
              )}
            </div>
            <div className="flex justify-center">
              {item.freelancers ? (
                <Check className="w-5 h-5 text-primary-purple font-bold" />
              ) : (
                <X className="w-5 h-5 text-neutral-300" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Text */}
      <div className="text-center mt-12">
        <p className="text-neutral-600 max-w-2xl mx-auto">
          I'm not just a developer—I'm a <span className="font-semibold text-primary-purple">strategic partner</span> committed to your business growth and long-term success.
        </p>
      </div>

    </SectionContainer>
  )
}

export default ComparisonSection
