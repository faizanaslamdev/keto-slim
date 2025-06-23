import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const TrustedSources = () => (
  <>
    <Heading.H2>Trusted by health & nutrition professionals</Heading.H2>
    <div className="flex items-center justify-center mt-5">
      <img src="./pubmed-logo-b.svg" alt="Pubmed" className="mb-2" />
    </div>
    <Paragraph.sm>
      There is evidence to suggest that a Ketogenic Diet can help with weight
      loss, visceral adiposity, and appetite control.
    </Paragraph.sm>
    <Paragraph.sm.Highlight className="underline">
      source
    </Paragraph.sm.Highlight>
    <div className="flex items-center justify-center mt-5">
      <img src="./mayo-clinic-b.webp" alt="Mayo" className="h-[50px] mb-2" />
    </div>
    <Paragraph.sm>
      Research shows that a keto diet can result in weight loss and improvements
      in cardiovascular risk factors.
    </Paragraph.sm>
    <Paragraph.sm.Highlight className="underline">
      source
    </Paragraph.sm.Highlight>
  </>
);

export default TrustedSources;
