import React from "react";

const FeedbackMessage = ({ icon, title, children }) => {
  return (
    <div className="bg-[#EBF5FF] border border-blue-200 rounded-lg p-3 my-2 text-[#757575] text-sm shadow-sm">
      <span role="img" aria-label="icon" className="mr-2">
        {icon}
      </span>
      <b>{title}</b>
      <div className="mt-1 ml-1">{children}</div>
    </div>
  );
};

export default FeedbackMessage;
