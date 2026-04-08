import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='surface-card p-6 transition hover:shadow-md'>

      {/* Icon */}
      <div className='mb-4 text-xl text-indigo-600'>
        {icon}
      </div>

      {/* Title */}
      <h3 className='mb-2 text-[16px] font-semibold text-slate-900'>
        {title}
      </h3>
      
      {/* Description */}
      <p className='text-sm leading-relaxed text-slate-600'>
        {description}
      </p>

    </div>
  )
}

export default FeatureCard
