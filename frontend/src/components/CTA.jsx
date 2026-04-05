const CTA = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#F8FAFC]">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-2xl text-center px-6 md:px-12 py-12 md:py-16">
          
          {/* Heading */}
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
            Let’s build something that brings you more customers
          </h2>

          {/* Description */}
          <p className="text-indigo-100 mt-4 max-w-2xl mx-auto">
            Discuss how we can scale your business with modern web technologies and real results.
          </p>

          {/* Button */}
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-white text-[#4F46E5] px-6 py-3 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition"
            >
              Start Your Project
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;