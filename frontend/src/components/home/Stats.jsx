import { SectionContainer } from '../ui'

const Stats = () => {
  const stats = [
    {
      number: "3+",
      label: "Projects Completed",
      description: "Diverse industries and scales"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "All projects delivered on time"
    },
    {
      number: "50K+",
      label: "Lines of Code",
      description: "Tested and production-ready"
    },
    {
      number: "24H",
      label: "Response Time",
      description: "Quick communication guaranteed"
    }
  ]

  return (
    <SectionContainer bgVariant="gradient-teal" as="section" className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center group hover:scale-105 transition duration-300"
          >
            <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition">
              {stat.number}
            </p>
            <p className="font-semibold text-white/95 mb-1">
              {stat.label}
            </p>
            <p className="text-sm text-white/70">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Stats
