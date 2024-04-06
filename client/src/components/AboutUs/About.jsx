import { fadeInAnimation } from "../../utils/animation";
import FadeInWrapper from "../ui/FadeInWrapper";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";

const About = () => {
  const highlight = "font-medium text-slate-900";

  return (
    <div id="aboutus">
      <div className="mx-auto pt-8 text-center max-w-[70vw] mb-20">
        <FadeInWrapper>
          <SectionHeading>About Us</SectionHeading>
        </FadeInWrapper>

        <motion.div className="mt-4 space-y-6 text-slate-800 text-sm sm:text-sm md:text-base lg:text-[20px]">
          <motion.p
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            className="duration-150 ease-linear leading-snug tracking-wide"
            viewport={{ once: true }}
          >
            At InsightAI, we&apos;re dedicated to delivering unparalleled
            precision in every aspect of our solutions. Our advanced AI models
            are meticulously crafted to achieve exceptional accuracy rates
            across the board, with each model boasting an impressive{" "}
            <span className={highlight}>98% accuracy rate</span>.
          </motion.p>
          <motion.p
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            className="duration-300 ease-linear leading-snug tracking-wide"
            viewport={{ once: true }}
          >
            Whether it&apos;s predictive analysis, demand forecasting, customer
            behavior analytics, or customized AI solutions our AI models
            consistently deliver reliable insights to drive informed
            decision-making and business success. By harnessing the power of
            data and cutting-edge machine learning techniques, we empower
            organizations to{" "}
            <span className={highlight}>
              optimize operations, anticipate market trends, and foster
              meaningful connections{" "}
            </span>
            with customers .
          </motion.p>
          <motion.p
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            className="duration-300 ease-linear leading-snug tracking-wide"
            viewport={{ once: true }}
          >
            With InsightAI, you can trust that your data-driven decisions are
            backed by the highest level of accuracy, enabling you to unlock new
            opportunities and achieve your business objectives with confidence.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
