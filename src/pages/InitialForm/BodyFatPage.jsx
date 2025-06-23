import Heading from "../../components/Heading";
import { Label } from "../../components/Label";
import { Slider } from "../../components/Slider";
import Paragraph from "../../components/Paragraph";

const BodyFatPage = ({ selectedValue, setSelectedValue }) => {
  return (
    <>
      <Heading.H1 className="text-center">📊</Heading.H1>
      <Heading.H2 className="text-center">Your Body Metrics</Heading.H2>
      <div className="flex justify-between">
        <Label className="text-psm mb-4 mt-2">🔥 Body Fat Percentage</Label>
        <Paragraph.sm>{selectedValue}%</Paragraph.sm>
      </div>
      <Slider
        value={selectedValue}
        onValueChange={setSelectedValue}
        max={100}
        min={0}
        step={1}
        className="w-full mb-4"
      />
    </>
  );
};

export default BodyFatPage;
