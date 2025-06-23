const H3 = ({ children, className }) => {
  return (
    <h1 className={`font-semibold text-h3  text-heading ${className}`}>
      {children}
    </h1>
  );
};

H3.Highlight = ({ children }) => (
  <span className={`text-heading-highlight`}>{children}</span>
);

export default H3;
