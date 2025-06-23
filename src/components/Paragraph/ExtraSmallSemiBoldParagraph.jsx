const ExtraSmallSemiBoldParagraph = ({ children }) => {
  return (
    <p className="text-pxs font-[600] text-label leading-paragraph">
      {children}
    </p>
  );
};

ExtraSmallSemiBoldParagraph.Empty = ({ children }) => (
  <p className="text-pxs font-[400] text-label-empty leading-paragraph">
    {children}
  </p>
);

export default ExtraSmallSemiBoldParagraph;
