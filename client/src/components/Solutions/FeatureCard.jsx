import { useRef } from "react";
import { motion } from "framer-motion";
import FadeInSpanWrapper from "../ui/FadeInSpanWrapper";
import SectionHeading from "../ui/SectionHeading";

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
    <FadeInSpanWrapper>
      <h1 className="text-5xl text-white tracking-tight font-heading-sans text-center">
        {" "}
        {children}{" "}
      </h1>
    </FadeInSpanWrapper>
  );
};

const Text = ({ children }) => {
  return (
    <FadeInSpanWrapper>
      <p className="text-2xl text-slate-300 text-center">{children}</p>;
    </FadeInSpanWrapper>
  );
};

const Image = ({ src }) => {
  return (
    <>
      <SectionHeading>Our Solutions</SectionHeading>
      <img
        src={src}
        alt="alter text for image."
        className="h-full w-auto object-contain"
      />
    </>
  );
};

FeatureCard.Heading = Heading;
FeatureCard.Text = Text;
FeatureCard.Image = Image;

export default FeatureCard;
