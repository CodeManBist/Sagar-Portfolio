import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='bg-[#FFFFFF] p-6 rounded-xl shadow-sm hover:shadow-md transition'>

      {/* Icon */}
      <div className='text-[#493EE5] text-xl mb-4'>
        {icon}
      </div>

      {/* Title */}
      <h3 className='text-[#001C37] font-semibold text-[16px] mb-2'>
        {title}
      </h3>
      
      {/* Description */}
      <p className='text-[#464555] text-[14px] leading-relaxed'>
        {description}
      </p>

    </div>
  )
}

export default FeatureCard
