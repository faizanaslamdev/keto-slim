const SmallParagraph = ({ children, className = "" }) => {
  return (
    <p
      className={`text-psm font-[400] text-paragraph leading-paragraph ${className}`}
    >
      {children}
    </p>
  );
};

SmallParagraph.Highlight = ({ children, className = "" }) => (
  <span className={`text-paragraph-highlight leading-paragraph ${className}`}>
    {children}
  </span>
);

export default SmallParagraph;
