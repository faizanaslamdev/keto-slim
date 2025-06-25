import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { motion } from "motion/react";

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
        return "You're already close — just upgrading your food quality could unlock smoother fat loss and better focus.";
      default:
        return "";
    }
  };

  const category = getCalorieCategory(calorieTarget);
  const message = getCalorieMessage(category);

  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Heading.H1 className="text-center">🔥</Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Heading.H1 className="text-center">
          You Should Be Eating Around{" "}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-block"
          >
            <Heading.H1.Highlight>{calorieTarget}</Heading.H1.Highlight>
          </motion.span>{" "}
          Calories
        </Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Heading.H2 className="text-center mt-2">
          But Not All Calories Are Equal
        </Heading.H2>
      </motion.div>

      <motion.img
        src="./calories.webp"
        alt="calories"
        className="mx-auto mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      />

      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-2"
        >
          <Paragraph.sm>
            Your body burns calories just to stay alive — that's your BMR. Add
            in movement, and you burn even more. Eat less than you burn? You
            lose weight. Eat more? You store it. Simple math, but the type of
            calories still makes or breaks your results.
          </Paragraph.sm>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph.sm>
            Most people eat low-quality calories that spike cravings, crash
            energy, and cause fat to stick — even if they're technically under
            their daily limit.
          </Paragraph.sm>
        </motion.div>
      </motion.div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <Paragraph.sm>
            <Paragraph.sm.Highlight>{message}</Paragraph.sm.Highlight>
          </Paragraph.sm>
        </motion.div>
      )}
    </Card>
  );
};

export default RecommendedCalories;
