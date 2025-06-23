import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-background-card shadow-md rounded-2xl p-6 mb-6 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
