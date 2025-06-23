import BaseParagraph from "./BaseParagraph";
import ExtraLargeParagraph from "./ExtraLargeParagraph";
import ExtraSmallParagraph from "./ExtraSmallParagraph";
import ExtraSmallSemiBoldParagraph from "./ExtraSmallSemiBoldParagraph";
import SmallParagraph from "./SmallParagraph";

const Paragraph = Object.assign(BaseParagraph, {
  sm: SmallParagraph,
  xl: ExtraLargeParagraph,
  xs: ExtraSmallParagraph,
  xsSemibold: ExtraSmallSemiBoldParagraph,
});

export default Paragraph;
