import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { motion } from "motion/react";

const WaterIntake = () => {
  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Heading.H1 className="text-center">💧</Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Heading.H1 className="text-center">
          Your Body Needs{" "}
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
            <Heading.H1.Highlight>8-9 Cups</Heading.H1.Highlight>
          </motion.span>{" "}
          of Water Daily
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
        src="./drinking-water.png"
        alt="Water Intake"
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
            Hydration is a fat-burning multiplier. Without enough water, your
            body holds onto toxins, slows digestion, and burns fat less
            efficiently.
          </Paragraph.sm>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph.sm>
            Even mild dehydration can feel like fatigue, hunger, or sugar
            cravings. You're not lazy — you're likely underhydrated.
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
          <Paragraph.sm.Highlight>
            Drinking over 6 glasses a day? Nice work — your hydration game is
            strong. Keep it up to support optimal fat loss, steady energy, and
            fewer cravings.
          </Paragraph.sm.Highlight>
        </Paragraph.sm>
      </motion.div>
    </Card>
  );
};

export default WaterIntake;
