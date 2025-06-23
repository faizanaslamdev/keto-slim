const H1 = ({ children }) => {
  return (
    <h1 className="font-semibold text-h1 leading-heading text-heading">
      {children}
    </h1>
  );
};

H1.Highlight = ({ children }) => (
  <span className={`text-heading-highlight`}>{children}</span>
);

export default H1;
