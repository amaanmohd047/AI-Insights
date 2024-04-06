import { motion } from "framer-motion";
import { indexedFadeInAnimation } from "../../utils/animation";

function IndexedFadeInWrapper({ children, index=1 }) {
  return (
    <motion.span
      variants={indexedFadeInAnimation}
      custom={index}
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

export default IndexedFadeInWrapper;
