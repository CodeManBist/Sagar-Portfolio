const variantClasses = {
  primary: "action-button action-button-primary",
  secondary: "action-button action-button-secondary",
};

const ActionButton = ({ as: Component = "button", variant = "primary", className = "", ...props }) => {
  const classes = `${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim();

  return <Component className={classes} {...props} />;
};

export default ActionButton;