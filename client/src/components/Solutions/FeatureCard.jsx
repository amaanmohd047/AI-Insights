import { useRef } from "react";
import { motion } from "framer-motion";
import FadeInWrapper from "../ui/FadeInWrapper";

const FeatureCard = ({ children }) => {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      className="h-[90vh] bg-blue-950 flex flex-col justify-center items-center m-auto w-[70vw] pt-20"
    >
      {children}
    </motion.section>
  );
};

const Heading = ({ children }) => {
  return (
    <FadeInWrapper>
      <h1 className="text-5xl text-white tracking-tight font-heading-sans text-center">
        {" "}
        {children}{" "}
      </h1>
    </FadeInWrapper>
  );
};

const Text = ({ children }) => {
  return (
    <FadeInWrapper>
      <p className="text-2xl text-slate-300 text-center">{children}</p>;
    </FadeInWrapper>
  );
};

FeatureCard.Heading = Heading;
FeatureCard.Text = Text;

export default FeatureCard;
