const H2 = ({ children, className }) => {
  return (
    <h2 className={`font-semibold text-h2 text-heading ${className}`}>
      {children}
    </h2>
  );
};

H2.Highlight = ({ children }) => (
  <span className={`text-heading-highlight`}>{children}</span>
);

export default H2;
