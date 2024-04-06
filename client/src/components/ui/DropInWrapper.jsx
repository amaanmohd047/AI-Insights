import { motion } from "framer-motion";
import { dropInAnimation } from "../../utils/animation";

const DropInWrapper = ({ children }) => {
  return (
    <motion.div
      variants={dropInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default DropInWrapper;
