import { useEffect, useState } from "react";
import "./style.css";
import { useInView } from "react-intersection-observer";

import FeatureCard from "./FeatureCard";
import ScrollDisabler from "./ScrollDisabler";
import FadeInWrapper from "../ui/FadeInWrapper";
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
        <FadeInWrapper>
          <FeatureCard>
            <FeatureCard.Image src="one-in-all-solution.png" />
          </FeatureCard>
        </FadeInWrapper>

        <FadeInWrapper>
          <FeatureCard>
            <FeatureCard.Heading>Precision Perfected</FeatureCard.Heading>
            <FeatureCard.Text>
              Our Prediction Models have proven themselves with high Accuracy,
              predictive maintenance with 98%, demand forecasting and inventory
              optimisation with 95%, and customer behaviour analytics with 90%,
              with overall accuracy of 94%.
            </FeatureCard.Text>
          </FeatureCard>
        </FadeInWrapper>
        <ScrollDisabler />
      </div>
    </div>
  );
};

export default Features;
