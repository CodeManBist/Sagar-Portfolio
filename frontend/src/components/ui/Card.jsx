import React from "react";

const Card = ({
  children,
  variant = "filled",
  icon,
  title,
  description,
  badge,
  badgeColor = "purple",
  hoverEffect = true,
  className = "",
  bgColor = "white",
  ...props
}) => {
  const variantClasses = {
    filled: `bg-${bgColor} border border-neutral-100 shadow-md hover:shadow-lg hover:border-neutral-200`,
    outline: "bg-transparent border-2 border-primary-purple shadow-sm hover:shadow-md",
    gradient: "bg-gradient-to-br from-primary-purple to-primary-teal shadow-xl hover:shadow-2xl",
    "gradient-teal": "bg-gradient-to-br from-primary-teal to-primary-navy shadow-xl hover:shadow-2xl",
    "gradient-amber": "bg-gradient-to-br from-primary-amber to-primary-purple shadow-xl hover:shadow-2xl",
    floating: "bg-white border border-neutral-100/80 shadow-lg hover:shadow-xl hover:border-neutral-200/80 hover:-translate-y-0.5",
  };

  const badgeColorClasses = {
    purple: "bg-primary-purple/15 text-primary-purple border border-primary-purple/20",
    teal: "bg-primary-teal/15 text-primary-teal border border-primary-teal/20",
    amber: "bg-primary-amber/15 text-primary-amber border border-primary-amber/20",
    navy: "bg-primary-navy/15 text-primary-navy border border-primary-navy/20",
    neutral: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  };

  const baseClasses = `rounded-xl p-6 transition-all duration-300 ${
    hoverEffect && !variant.includes("gradient") ? "hover:-translate-y-1" : ""
  }`;

  const isGradient = variant.includes("gradient");
  const textColor = isGradient ? "text-white" : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {badge && (
        <div className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${badgeColorClasses[badgeColor]}`}>
          {badge}
        </div>
      )}

      {icon && (
        <div className={`${isGradient ? "text-white" : "text-primary-purple"} mb-4 text-2xl`}>
          {icon}
        </div>
      )}

      {title && (
        <h3 className={`text-lg font-semibold mb-2 ${textColor} ${!isGradient ? "text-neutral-900" : ""}`}>
          {title}
        </h3>
      )}

      {description && (
        <p className={`${isGradient ? "text-white/90" : "text-neutral-600"} text-sm leading-relaxed mb-4`}>
          {description}
        </p>
      )}

      {children && (
        <div className={isGradient ? "text-white/95" : ""}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
