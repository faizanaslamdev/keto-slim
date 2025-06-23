const H2 = ({ children }) => {
  return <h2 className="font-semibold text-h2 text-heading">{children}</h2>;
};

H2.Highlight = ({ children }) => (
  <span className={`text-heading-highlight`}>{children}</span>
);

export default H2;
