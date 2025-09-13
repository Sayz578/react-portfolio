// src/components/SectionTitle.jsx
import React from "react";

const SectionTitle = ({ number, text, extraClass, nextClass }) => {
  return (
    <h2 className={`inner-title ${extraClass} ${nextClass}`}>
      <span className="text-orange data-number">{number}</span> {text}
    </h2>
  );
};

export default SectionTitle;
