import { useEffect, useState } from "react";
import "./style.css";
import { useInView } from "react-intersection-observer";

import FeatureCard from "./FeatureCard";
import { features } from "../../utils/data";
import ScrollDisabler from "./ScrollDisabler";
// import { scrollToID } from "../../utils/scrollToID";

const Features = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  }, [inView, setIsScrollable, ref]);

  return (
    <div className="features-slideshow">
      <div
        className={`parent bg-blue-950 ${
          isScrollable ? "overflow-scroll " : "overflow-hidden "
        }`}
        ref={ref}
      >
        {features.map((feat) => (
          <FeatureCard key={feat.heading}>
            <FeatureCard.Heading>{feat.heading}</FeatureCard.Heading>
            <FeatureCard.Text>{feat.text}</FeatureCard.Text>
          </FeatureCard>
        ))}
        <ScrollDisabler />
      </div>
    </div>
  );
};

export default Features;
