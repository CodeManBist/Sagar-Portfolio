import React from "react";

const TextGradient = ({
  children,
  variant = "purple-teal",
  className = "",
  as = "span",
}) => {
  const gradientClasses = {
    "purple-teal":
      "bg-gradient-to-r from-primary-purple to-primary-teal bg-clip-text text-transparent",
    "teal-navy":
      "bg-gradient-to-r from-primary-teal to-primary-navy bg-clip-text text-transparent",
    "amber-purple":
      "bg-gradient-to-r from-primary-amber to-primary-purple bg-clip-text text-transparent",
    "navy-purple":
      "bg-gradient-to-r from-primary-navy to-primary-purple bg-clip-text text-transparent",
    "teal-amber":
      "bg-gradient-to-r from-primary-teal to-primary-amber bg-clip-text text-transparent",
  };

  const Tag = as;

  return (
    <Tag className={`${gradientClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
};

export default TextGradient;
