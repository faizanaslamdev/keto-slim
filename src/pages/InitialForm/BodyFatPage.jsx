import Heading from "../../components/Heading";
import { Label } from "../../components/Label";
import { Slider } from "../../components/Slider";
import Paragraph from "../../components/Paragraph";

const BodyFatPage = ({
  selectedFatValue,
  setSelectedFatValue,
  selectBMIValue,
  SetSelectedBMIValue,
  errors,
}) => {
  return (
    <>
      <Heading.H1 className="text-center">📊</Heading.H1>
      <Heading.H2 className="text-center">Your Body Metrics</Heading.H2>
      <div className="flex justify-between mb-4 mt-2 items-center">
        <Label className="text-psm ">🔥 Body Fat Percentage</Label>
        <Paragraph.sm>{selectedFatValue}%</Paragraph.sm>
      </div>
      <Slider
        value={selectedFatValue}
        onValueChange={setSelectedFatValue}
        max={100}
        min={0}
        step={1}
        className="w-full mb-4"
      />
      {errors.bodyFatPercent && (
        <p className="text-red-500 text-sm">{errors.bodyFatPercent}</p>
      )}
      <div className="flex justify-between mb-4 mt-2 items-center">
        <Label className="text-psm ">📊 Body Mass Index (BMI)</Label>
        <Paragraph.sm>{selectBMIValue}</Paragraph.sm>
      </div>
      <Slider
        value={selectBMIValue}
        onValueChange={SetSelectedBMIValue}
        max={40.0}
        min={0.0}
        step={0.1}
        className="w-full mb-4"
      />
      {errors.BMI && <p className="text-red-500 text-sm">{errors.BMI}</p>}
    </>
  );
};

export default BodyFatPage;
