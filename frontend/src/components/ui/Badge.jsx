import React from "react";

const Badge = ({
  children,
  variant = "filled",
  color = "purple",
  size = "md",
  icon,
  className = "",
}) => {
  const colorClasses = {
    purple: {
      filled: "bg-primary-purple text-white",
      outline: "border-2 border-primary-purple text-primary-purple bg-primary-purple/5",
      light: "bg-primary-purple/10 text-primary-purple",
    },
    teal: {
      filled: "bg-primary-teal text-white",
      outline: "border-2 border-primary-teal text-primary-teal bg-primary-teal/5",
      light: "bg-primary-teal/10 text-primary-teal",
    },
    amber: {
      filled: "bg-primary-amber text-white",
      outline: "border-2 border-primary-amber text-primary-amber bg-primary-amber/5",
      light: "bg-primary-amber/10 text-primary-amber",
    },
    navy: {
      filled: "bg-primary-navy text-white",
      outline: "border-2 border-primary-navy text-primary-navy bg-primary-navy/5",
      light: "bg-primary-navy/10 text-primary-navy",
    },
    neutral: {
      filled: "bg-neutral-200 text-neutral-800",
      outline: "border-2 border-neutral-400 text-neutral-700 bg-neutral-50",
      light: "bg-neutral-100 text-neutral-700",
    },
    success: {
      filled: "bg-green-500 text-white",
      outline: "border-2 border-green-500 text-green-600 bg-green-50",
      light: "bg-green-100 text-green-700",
    },
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-xs",
    lg: "px-4 py-2 text-sm",
  };

  const baseClasses = `inline-flex items-center gap-1.5 font-semibold rounded-full whitespace-nowrap transition-colors duration-200`;

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]?.[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
