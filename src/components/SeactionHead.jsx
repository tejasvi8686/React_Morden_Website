import React from "react";

const SeactionHead = ({ icon, title, className }) => {
  return (
    <div>
      <div className={`section__head ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SeactionHead;
