const SmallParagraph = ({ children }) => {
  return (
    <p className="text-psm font-[400] text-paragraph leading-paragraph">
      {children}
    </p>
  );
};

SmallParagraph.Highlight = ({ children }) => (
  <span className="text-paragraph-highlight leading-paragraph">{children}</span>
);

export default SmallParagraph;
