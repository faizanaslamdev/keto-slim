import Heading from "../../components/Heading";
import { Label } from "../../components/Label";
import { Slider } from "../../components/Slider";
import Paragraph from "../../components/Paragraph";
import Card from "../../components/Card";
import FeedbackMessage from "../../components/FeedbackMessage";
import { bodyFatMessages } from "../../utils/Constants";

const BodyFatPage = ({
  selectedFatValue,
  setSelectedFatValue,
  selectBMIValue,
  setSelectedBMIValue,
}) => {
  let fatFeedback = null;
  if (selectedFatValue >= 5 && selectedFatValue <= 20) {
    fatFeedback = bodyFatMessages.fitness;
  } else if (selectedFatValue > 20 && selectedFatValue <= 35) {
    fatFeedback = bodyFatMessages.average;
  } else if (selectedFatValue > 35) {
    fatFeedback = bodyFatMessages.aboveAverage;
  }

  return (
    <Card>
      <Heading.H1 className="text-center">📊</Heading.H1>
      <Heading.H2 className="text-center">Your Body Metrics</Heading.H2>
      <div className="flex justify-between mb-4 mt-2 items-center">
        <Label className="text-psm ">🔥 Body Fat Percentage</Label>
        <Paragraph.sm>{selectedFatValue}%</Paragraph.sm>
      </div>
      <Slider
        value={[selectedFatValue]}
        onValueChange={(vals) => setSelectedFatValue(vals[0])}
        max={100}
        min={0}
        step={1}
        className="w-full mb-4"
      />
      {fatFeedback && (
        <FeedbackMessage icon={fatFeedback.icon} title={fatFeedback.title}>
          {fatFeedback.message}
        </FeedbackMessage>
      )}
      <div className="flex justify-between mb-4 mt-2 items-center">
        <Label className="text-psm ">📊 Body Mass Index (BMI)</Label>
        <Paragraph.sm>{selectBMIValue}</Paragraph.sm>
      </div>
      <Slider
        value={[selectBMIValue]}
        onValueChange={(vals) => setSelectedBMIValue(vals[0])}
        max={40.0}
        min={0.0}
        step={0.1}
        className="w-full mb-4"
      />
      {selectBMIValue > 0 && (
        <FeedbackMessage icon="💡" title="What is BMI?">
          Body Mass Index (BMI) is a measure that uses your height and weight to
          work out if your weight is healthy.
        </FeedbackMessage>
      )}
    </Card>
  );
};

export default BodyFatPage;
