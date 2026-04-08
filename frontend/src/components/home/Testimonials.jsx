import { SectionContainer, Card } from '../ui'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Founder, TechStartup Inc",
      content: "Sagar transformed our legacy system into a modern, scalable MERN application. The results exceeded our expectations.",
      rating: 5,
      avatar: "AJ"
    },
    {
      name: "Sarah Chen",
      role: "CEO, Growth Agency",
      content: "The attention to detail and business focus was remarkable. Not just code, but a strategic partner for our growth.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Ross",
      role: "Product Manager, SaaS Co",
      content: "Delivered ahead of schedule with exceptional code quality. A true professional who understands the business impact.",
      rating: 5,
      avatar: "MR"
    },
  ]

  return (
    <SectionContainer bgVariant="white" as="section" className="relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary-navy/60 uppercase mb-3">
          Client Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Trusted by Innovative Businesses
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          See what our clients say about working with us on their digital transformation.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            variant="floating"
            className="h-full flex flex-col"
            hoverEffect={true}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary-amber text-primary-amber" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-neutral-700 leading-relaxed mb-6 flex-1">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-purple to-primary-teal flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-neutral-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

    </SectionContainer>
  )
}

export default Testimonials
