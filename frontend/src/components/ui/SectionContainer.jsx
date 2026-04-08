import React from "react";

const SectionContainer = ({
  children,
  bgVariant = "light",
  className = "",
  id = "",
  as = "section",
}) => {
  const backgroundClasses = {
    light: "bg-neutral-50",
    white: "bg-white",
    dark: "bg-primary-navy text-white",
    "gradient-navy":
      "bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-charcoal text-white",
    "gradient-purple":
      "bg-gradient-to-br from-primary-purple to-primary-navy text-white",
    "gradient-teal":
      "bg-gradient-to-r from-primary-teal/10 to-primary-purple/10",
    none: "",
  };

  const Tag = as;

  return (
    <Tag
      id={id}
      className={`px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28 ${backgroundClasses[bgVariant]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </Tag>
  );
};

export default SectionContainer;
