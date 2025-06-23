import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const RecommendedCalories = ({ calorieTarget }) => {
  const getCalorieCategory = (calories) => {
    if (calories < 1100) return "Very Obese Range";
    if (calories >= 1100 && calories <= 1299) return "Obese Range";
    if (calories >= 1300 && calories <= 1500) return "Almost Healthy";
    return null; // Optional: handle values > 1500 if needed
  };

  const getCalorieMessage = (category) => {
    switch (category) {
      case "Very Obese Range":
        return "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.";
      case "Obese Range":
        return "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.";
      case "Almost Healthy":
        return "You’re already close — just upgrading your food quality could unlock smoother fat loss and better focus.";
      default:
        return "";
    }
  };

  const category = getCalorieCategory(calorieTarget);
  const message = getCalorieMessage(category);

  return (
    <Card>
      <Heading.H1 className="text-center">🔥</Heading.H1>
      <Heading.H1 className="text-center">
        You Should Be Eating Around{" "}
        <Heading.H1.Highlight>{calorieTarget}</Heading.H1.Highlight> Calories
      </Heading.H1>

      <Heading.H2 className="text-center mt-2">
        But Not All Calories Are Equal
      </Heading.H2>

      <img src="./calories.png" alt="calories" className="mx-auto mt-4" />
      <div className="mb-5 ">
        <Paragraph.sm className="mb-2">
          Your body burns calories just to stay alive — that’s your BMR. Add in
          movement, and you burn even more. Eat less than you burn? You lose
          weight. Eat more? You store it. Simple math, but the type of calories
          still makes or breaks your results.
        </Paragraph.sm>
        <Paragraph.sm>
          Most people eat low-quality calories that spike cravings, crash
          energy, and cause fat to stick — even if they’re technically under
          their daily limit.
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

export default RecommendedCalories;
