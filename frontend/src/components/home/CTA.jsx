const CTA = () => {
  return (
    <section className="page-section page-section-muted">
      
      <div className="section-wrap">
        
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-12 text-center md:px-12 md:py-16">
          
          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-white md:text-4xl">
            Let’s build something that brings you more customers
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Discuss how we can scale your business with modern web technologies and real results.
          </p>

          {/* Button */}
          <div className="mt-8">
            <a href="/contact" className="action-button bg-white text-indigo-700 hover:bg-slate-100">
              Start Your Project
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;