export const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } },
};
export const dropInAnimation = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.3 } },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: 300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: -300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const indexedFadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.075 * index,
      },
    };
  },
};
