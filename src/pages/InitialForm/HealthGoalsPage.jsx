import Heading from "../../components/Heading";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import Card from "../../components/Card";
import FeedbackMessage from "../../components/FeedbackMessage";
import { weightLossMessages } from "../../utils/Constants";

const HealthGoalsPage = ({
  selectedCaloriesValue,
  setSelectedCaloriesValue,
  selectedWeightLogssGoal,
  setSelectedWeightLossGoal,
  errors,
}) => {
  let feedback = null;
  const goal = parseFloat(selectedWeightLogssGoal);

  if (goal > 5) {
    feedback = weightLossMessages.unsafe;
  } else if (goal >= 1 && goal <= 2) {
    feedback = weightLossMessages.sustainable;
  } else if (goal > 2) {
    feedback = weightLossMessages.ambitious;
  }

  return (
    <Card>
      <Heading.H1 className="text-center">🎯</Heading.H1>
      <Heading.H2 className="text-center">Your Health Goals</Heading.H2>

      <Label className="text-psm mb-4 mt-2">🍎 Daily Calorie Target</Label>
      <Input
        type="number"
        id="calories"
        name="calories"
        value={selectedCaloriesValue}
        onChange={(e) => {
          setSelectedCaloriesValue(e.target.value);
        }}
      />
      {errors.calorieTarget && (
        <p className="text-red-500 text-sm">{errors.calorieTarget}</p>
      )}
      <Label className="text-psm mb-4 mt-2">
        🎯 Weekly Weight Loss Goal (lbs)
      </Label>
      <Input
        type="number"
        id="weight_loss"
        name="weight_loss"
        value={selectedWeightLogssGoal}
        onChange={(e) => {
          setSelectedWeightLossGoal(e.target.value);
        }}
      />
      {feedback && (
        <FeedbackMessage icon={feedback.icon} title={feedback.title}>
          {feedback.message}
        </FeedbackMessage>
      )}
      {errors.weightLossRate && (
        <p className="text-red-500 text-sm">{errors.weightLossRate}</p>
      )}
    </Card>
  );
};

export default HealthGoalsPage;
