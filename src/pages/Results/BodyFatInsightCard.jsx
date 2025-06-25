import Card from "../../components/Card";
import { Scale } from "lucide-react";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { motion } from "motion/react";

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
      <motion.div
        className="flex justify-center items-center mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Scale className="w-[32px] h-[32px]" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Heading.H1 className="text-center">
          Your Body Fat Percentage is{" "}
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
            <Heading.H1.Highlight>{bodyFatPercent}%</Heading.H1.Highlight>
          </motion.span>
        </Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Heading.H2 className="text-center mt-2">
          Here's Why That Matters
        </Heading.H2>
      </motion.div>

      <motion.img
        src="./body-fat.webp"
        alt="Body Fat Percentage"
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
        >
          <Paragraph.sm>
            Your body fat percentage gives a clearer picture than BMI alone. It
            tells us how much of your body is lean mass (muscle, organs, bone)
            vs stored fat.{" "}
          </Paragraph.sm>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph.sm>
            Too much stored fat doesn't just affect how you look — it impacts
            your energy, hormone balance, and ability to burn fat efficiently.
          </Paragraph.sm>
        </motion.div>
      </motion.div>

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
    </Card>
  );
};

export default BodyFatInsightCard;
