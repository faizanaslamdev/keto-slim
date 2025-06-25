import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { motion } from "motion/react";

const VisibleChangesTimelineCard = ({ seeResultsDays }) => {
  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Heading.H1 className="text-center">⏳</Heading.H1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Heading.H1 className="text-center">
          You Could See Results in as Little as{" "}
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
            <Heading.H1.Highlight>{seeResultsDays}</Heading.H1.Highlight>
          </motion.span>{" "}
          Days
        </Heading.H1>
      </motion.div>

      <motion.img
        src="./timeline.webp"
        alt="timeline"
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
            Visible change doesn't take forever — when your metabolism shifts,
            your body can start dropping bloat, water weight, and fat
            surprisingly fast
          </Paragraph.sm>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Paragraph.sm>
            It's not about how long you try — it's about whether your body's
            actually set up to change. The wrong plan wastes months.
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
            You're already aware — and that's step one. Now imagine pairing that
            awareness with a plan that shows results in the mirror by day 10.
          </Paragraph.sm.Highlight>
        </Paragraph.sm>
      </motion.div>
    </Card>
  );
};

export default VisibleChangesTimelineCard;
