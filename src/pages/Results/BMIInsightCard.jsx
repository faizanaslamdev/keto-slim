import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const BMIInsightCard = ({ BMI }) => {
  const getBMICategory = (bmi) => {
    if (bmi < 26) return "Almost Healthy";
    if (bmi >= 30 && bmi <= 34.9) return "Obese";
    if (bmi >= 35) return "Very Obese";
    return null; // between 26–29.9 (can be ignored or given a custom label if needed)
  };

  const getBMIMessage = (category) => {
    switch (category) {
      case "Almost Healthy":
        return "You’re right on the edge — just a few small shifts could unlock better energy and faster fat-burning.";
      case "Obese":
        return "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.";
      case "Very Obese":
        return "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.";
      default:
        return "";
    }
  };

  const category = getBMICategory(BMI);
  const message = getBMIMessage(category);

  return (
    <Card>
      <Heading.H1 className="text-center">📊</Heading.H1>
      <Heading.H1 className="text-center">
        Your BMI Is <Heading.H1.Highlight>{BMI}</Heading.H1.Highlight>
      </Heading.H1>

      <Heading.H2 className="text-center mt-2">— What That Means</Heading.H2>

      <img src="./bmi-insight.png" alt="BMI Insight" className="mx-auto mt-4" />
      <div className="mb-5 ">
        <Paragraph.sm className="mb-2">
          BMI (Body Mass Index) is a quick way to estimate how your weight might
          affect your health based on your height and weight.
        </Paragraph.sm>
        <Paragraph.sm>
          When your BMI is too high, your body may store more fat than it uses.
          That can slow your metabolism, drain your energy, and make fat loss
          harder — even if you’re putting in effort.
        </Paragraph.sm>
      </div>
      {message && (
        <Paragraph.sm>
          <Paragraph.sm.Highlight>{message}</Paragraph.sm.Highlight>
        </Paragraph.sm>
      )}
    </Card>
  );
};

export default BMIInsightCard;
