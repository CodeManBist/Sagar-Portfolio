import React from "react";

const Section = ({ className = "", containerClassName = "", children }) => {
  return (
    <section className={className}>
      <div className={`max-w-7xl mx-auto px-6 md:px-10 lg:px-12 ${containerClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
};

export default Section;
