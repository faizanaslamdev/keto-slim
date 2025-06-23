const ExtraSmallParagraph = ({ children }) => {
  return <p className="text-pxs font-[400] text-label leading-paragraph">{children}</p>;
};

ExtraSmallParagraph.Empty = ({children})=(
    <p className="text-pxs font-[400] text-label-empty leading-paragraph">{children}</p>
)

export default ExtraSmallParagraph;
