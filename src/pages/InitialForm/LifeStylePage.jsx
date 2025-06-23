import Heading from "../../components/Heading";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/Select";

const waterIntakeOptions = [
  { value: "1", label: "1 cup 💧" },
  { value: "2", label: "2 cups 💧💧" },
  { value: "4", label: "4 cups 💦" },
  { value: "6", label: "6 cups 🌊" },
];

const LifeStylePage = ({
  selectedWaterIntake,
  setSelectedWaterIntake,
  selectedResultDays,
  setSelectedResultDays,
  errors,
}) => {
  return (
    <>
      <Heading.H1 className="text-center">🌟</Heading.H1>
      <Heading.H2 className="text-center">Your Lifestyle</Heading.H2>

      <Label className="text-psm mb-4 mt-2">💧 Daily Water Intake</Label>
      <Select
        value={selectedWaterIntake}
        onValueChange={setSelectedWaterIntake}
      >
        <SelectTrigger className="text-xl h-14 border-2 focus:border-blue-400 mb-1">
          <SelectValue
            placeholder={
              selectedWaterIntake
                ? waterIntakeOptions.find(
                    (data) => data.value === selectedWaterIntake
                  )?.label
                : "💧 Select your daily water intake"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {waterIntakeOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {errors.waterIntake && (
        <p className="text-red-500 text-sm">{errors.waterIntake}</p>
      )}

      <Label className="text-psm mb-4 mt-2">
        ⏰ When do you expect to see results?
      </Label>
      <Input
        type="number"
        id="weight_loss"
        name="weight_loss"
        placeholder="e.g., 30"
        min="7"
        max="365"
        value={selectedResultDays}
        onChange={(e) => {
          setSelectedResultDays(e.target.value);
        }}
      />

      {errors.seeResultsDays && (
        <p className="text-red-500 text-sm">{errors.seeResultsDays}</p>
      )}
    </>
  );
};

export default LifeStylePage;
