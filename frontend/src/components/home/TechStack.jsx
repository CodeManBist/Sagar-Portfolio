import React from 'react'

const TechStack = () => {
  return (
    <section className='bg-[#EFF4FF] py-10'>

        {/* Container */}
        <div className='max-w-6xl mx-auto px-6 text-center'>
            {/* Heading */}
            <p className='text-xs tracking-widest text-[#777587] mb-6'>TRUSTED TECH STACK</p>

            {/* Tech Stack */}
            <div className='flex flex-wrap justify-center items-center gap-8 md: gap-12 text-[#001C37] text-sm md:text-base font-medium'>
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Tailwind</span>
            </div>
        </div>
    </section>
  )
}

export default TechStack
