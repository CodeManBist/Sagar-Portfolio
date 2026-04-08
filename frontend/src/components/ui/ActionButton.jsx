const variantClasses = {
  primary: "action-button action-button-primary",
  secondary: "action-button action-button-secondary",
};

const ActionButton = ({ as = "button", variant = "primary", className = "", type = "button", ...props }) => {
  const classes = `${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim();

  if (as === "button") {
    return <button type={type} className={classes} {...props} />;
  }

  const Component = as;

  return <Component className={classes} {...props} />;
};

export default ActionButton;