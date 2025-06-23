const ExtraLargeParagraph = ({ children }) => {
  return (
    <p className="text-pxl font-[400] text-paragraph leading-paragraph">
      {children}
    </p>
  );
};

ExtraLargeParagraph.Highlight = ({ children }) => (
  <span className="text-paragraph-highlight leading-paragraph">{children}</span>
);

export default ExtraLargeParagraph;
