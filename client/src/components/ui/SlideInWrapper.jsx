import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/animation";

export default function SlideInWrapper({ direction, children }) {
  return direction === "left" ? (
    <motion.span
      variants={slideInFromLeft}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.span>
  ) : (
    <motion.span
      variants={slideInFromRight}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.span>
  );
}
