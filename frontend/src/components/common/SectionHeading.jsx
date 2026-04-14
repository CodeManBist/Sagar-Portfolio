import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  className = "",
  eyebrowClassName = "text-purple-500 text-sm tracking-wide",
  titleClassName = "text-3xl md:text-5xl font-semibold text-white",
  descriptionClassName = "text-[#a1a1aa]",
}) => {
  return (
    <div className={className}>
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
      <h2 className={titleClassName}>{title}</h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
