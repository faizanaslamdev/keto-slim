const H3 = ({ children }) => {
  return <h1 className="font-semibold text-h3  text-heading">{children}</h1>;
};

H3.Highlight = ({ children }) => (
  <span className={`text-heading-highlight`}>{children}</span>
);

export default H3;
