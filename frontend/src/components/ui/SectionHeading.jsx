const SectionHeading = ({ eyebrow, title, description, align = "left", className = "", titleClassName = "" }) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignment} ${className}`.trim()}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-indigo-600">{eyebrow}</p> : null}
      <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl ${titleClassName}`.trim()}>{title}</h2>
      {description ? <p className="section-lead mt-3 text-sm md:text-base max-w-2xl">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;