import Paragraph from "../../components/Paragraph";

const ImageComparisonSection = () => (
  <>
    <div className="grid grid-cols-2 gap-6 bg-[url(/double-chevron.png)] bg-contain bg-center bg-no-repeat">
      <img
        src="./obese-middle-aged-woman Medium Background Removed.webp"
        alt="Women"
      />
      <img
        src="./slim-middle-aged-woman Medium Background Removed.webp"
        alt="slim-Women"
      />
    </div>
    <div className="grid grid-cols-2 gap-6 px-2 py-4 rounded-md shadow-lg">
      <Paragraph.sm className="text-center font-[600]">Now</Paragraph.sm>
      <Paragraph.sm className="text-center font-[600]">6 Months</Paragraph.sm>
    </div>
  </>
);
export default ImageComparisonSection;
