import { cloneElement } from "react";
import {motion} from "framer-motion";

const FeatureCard = ({ children }) => {
  return (
    <motion.div
      className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center border-t-8 border-blue-900"
    >
      {children}
    </motion.div>
  );
};

const Heading = ({ children }) => (
  <h1 className="text-xl font-semibold mb-4">{children}</h1>
);

const Text = ({ children }) => <p className="text-gray-600"> {children} </p>;

const Icon = ({ children }) => (
  <span className="mb-8 text-blue-950">
    {cloneElement(children, { className: "w-16 h-16 " })}
  </span>
);

FeatureCard.Heading = Heading;
FeatureCard.Text = Text;
FeatureCard.Icon = Icon;

export default FeatureCard;
