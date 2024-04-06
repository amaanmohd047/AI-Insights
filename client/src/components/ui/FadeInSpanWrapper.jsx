import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animation";

export default function FadeInSpanWrapper({ children }) {
  return (
    <motion.span
      variants={fadeInAnimation}
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
