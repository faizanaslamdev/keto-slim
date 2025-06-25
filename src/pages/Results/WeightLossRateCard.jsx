import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { motion } from "motion/react";

const WeightLossRateCard = ({ weightLossRate }) => {
  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Heading.H1 className="text-center">📉</Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Heading.H1 className="text-center">
          You Could Be Losing
          <br />
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
            <Heading.H1.Highlight>
              {weightLossRate} lbs / Week
            </Heading.H1.Highlight>
          </motion.span>
        </Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Heading.H2 className="text-center mt-2">
          With the Right Fuel Source
        </Heading.H2>
      </motion.div>

      <motion.img
        src="./weight-loss.webp"
        alt="Weight Loss"
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
            This is your potential, what your body could lose if it's in
            fat-burning mode. But that depends on getting your metabolism
            working with you, not against you.
          </Paragraph.sm>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph.sm>
            Low energy, stubborn cravings, and slow progress usually mean your
            body is still burning sugar instead of fat — and that keeps weight
            loss stuck.
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
            With your numbers, results could show up even faster than expected,
            but only if your metabolism is dialed in and you're burning fat, not
            sugar.
          </Paragraph.sm.Highlight>
        </Paragraph.sm>
      </motion.div>
    </Card>
  );
};

export default WeightLossRateCard;
