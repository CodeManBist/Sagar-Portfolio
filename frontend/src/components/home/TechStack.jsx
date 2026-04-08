import React from 'react'

const TechStack = () => {
  return (
    <section className='bg-indigo-50 py-10'>

        {/* Container */}
        <div className='max-w-6xl mx-auto px-6 text-center'>
            {/* Heading */}
              <p className='mb-6 text-xs tracking-[0.28em] text-slate-500'>TRUSTED TECH STACK</p>

            {/* Tech Stack */}
              <div className='flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-900 md:gap-12 md:text-base'>
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
