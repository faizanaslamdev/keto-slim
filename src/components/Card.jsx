import { AnimatePresence, motion } from "motion/react";

const Card = ({ children, className }) => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        key="box"
        className={`bg-background-card shadow-md rounded-2xl p-6 mb-6 w-full ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
