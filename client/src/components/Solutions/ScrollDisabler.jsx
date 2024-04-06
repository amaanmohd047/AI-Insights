import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollDisabler = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 50% of the target is visible
  });

  useEffect(() => {
    if (ref) {
      console.log(inView);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000);
    }

    return () => {
      clearTimeout();
    };
  }, [ref, inView]);

  return <div className="absolute left-0 bottom-5" ref={ref}></div>;
};

export default ScrollDisabler;
