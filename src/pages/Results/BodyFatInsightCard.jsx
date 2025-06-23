import Card from "../../components/Card";
import { Scale } from "lucide-react";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const BodyFatInsightCard = ({ bodyFatPercent, gender }) => {
  const getBodyFatCategory = (percent, gender) => {
    if (gender === "male") {
      if (percent < 24) return "Almost Healthy";
      if (percent <= 31) return "Obese";
      return "Very Obese";
    } else {
      if (percent < 31) return "Almost Healthy";
      if (percent <= 39) return "Obese";
      return "Very Obese";
    }
  };

  const getBodyFatMessage = (category) => {
    switch (category) {
      case "Almost Healthy":
        return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
      case "Obese":
        return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
      case "Very Obese":
        return "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
      default:
        return "";
    }
  };

  const category = getBodyFatCategory(bodyFatPercent, gender);
  const message = getBodyFatMessage(category);

  return (
    <Card>
      <div className="flex justify-center items-center mb-2">
        <Scale className="w-[32px] h-[32px]" />
      </div>
      <Heading.H1 className="text-center">
        Your Body Fat Percentage is{" "}
        <Heading.H1.Highlight>{bodyFatPercent}%</Heading.H1.Highlight>
      </Heading.H1>
      <Heading.H2 className="text-center mt-2">
        Here’s Why That Matters
      </Heading.H2>
      <img
        src="./body-fat.png"
        alt="Body Fat Percentage"
        className="mx-auto mt-4"
      />
      <div className="mb-5">
        <Paragraph.sm>
          Your body fat percentage gives a clearer picture than BMI alone. It
          tells us how much of your body is lean mass (muscle, organs, bone) vs
          stored fat.{" "}
        </Paragraph.sm>
        <Paragraph.sm>
          Too much stored fat doesn’t just affect how you look — it impacts your
          energy, hormone balance, and ability to burn fat efficiently.
        </Paragraph.sm>
      </div>
      <Paragraph.sm>
        <Paragraph.sm.Highlight>{message}</Paragraph.sm.Highlight>
      </Paragraph.sm>
    </Card>
  );
};

export default BodyFatInsightCard;
