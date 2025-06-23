import Heading from "../../components/Heading";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";

const HealthGoalsPage = ({
  selectedCaloriesValue,
  setSelectedCaloriesValue,
  selectedWeightLogssGoal,
  setSelectedWeightLossGoal,
  errors,
}) => {
  return (
    <>
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
      {errors.weightLossRate && (
        <p className="text-red-500 text-sm">{errors.weightLossRate}</p>
      )}
    </>
  );
};

export default HealthGoalsPage;
