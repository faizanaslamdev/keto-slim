const BaseParagraph = ({ children,className }) => {
  return (
    <p className={`text-p font-[400] text-paragraph leading-paragraph ${className}`}>
      {children}
    </p>
  );
};

BaseParagraph.Highlight = ({ children }) => (
  <span className="text-paragraph-highlight leading-paragraph">{children}</span>
);

export default BaseParagraph;
