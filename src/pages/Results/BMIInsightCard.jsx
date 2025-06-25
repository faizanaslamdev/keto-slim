import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { motion } from "motion/react";

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
        return "You're right on the edge — just a few small shifts could unlock better energy and faster fat-burning.";
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Heading.H1 className="text-center">📊</Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Heading.H1 className="text-center">
          Your BMI Is{" "}
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
            <Heading.H1.Highlight>{BMI}</Heading.H1.Highlight>
          </motion.span>
        </Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Heading.H2 className="text-center mt-2">— What That Means</Heading.H2>
      </motion.div>

      <motion.img
        src="./bmi-insight.webp"
        alt="BMI Insight"
        className="mx-auto mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
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
            BMI (Body Mass Index) is a quick way to estimate how your weight
            might affect your health based on your height and weight.
          </Paragraph.sm>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph.sm>
            When your BMI is too high, your body may store more fat than it
            uses. That can slow your metabolism, drain your energy, and make fat
            loss harder — even if you're putting in effort.
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

export default BMIInsightCard;
