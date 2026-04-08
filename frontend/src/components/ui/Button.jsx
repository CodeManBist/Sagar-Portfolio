import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) => {
  // Size mappings
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  // Variant mappings (Stripe-inspired with premium elevation)
  const variantClasses = {
    primary:
      "bg-primary-purple text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#4A3FD8] active:translate-y-0 active:shadow-md",
    secondary:
      "bg-primary-teal text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#17B893] active:translate-y-0 active:shadow-md",
    accent:
      "bg-primary-amber text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#E08C16] active:translate-y-0 active:shadow-md",
    outline:
      "border-2 border-primary-purple text-primary-purple hover:border-primary-purple/60 hover:text-primary-purple/70 active:border-primary-purple/40",
    "outline-teal":
      "border-2 border-primary-teal text-primary-teal hover:border-primary-teal/60 hover:text-primary-teal/70 active:border-primary-teal/40",
    "outline-amber":
      "border-2 border-primary-amber text-primary-amber hover:border-primary-amber/60 hover:text-primary-amber/70 active:border-primary-amber/40",
    ghost:
      "text-primary-purple hover:bg-primary-purple/8 active:bg-primary-purple/12",
  };

  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="inline-block animate-spin mr-2">●</span>
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
