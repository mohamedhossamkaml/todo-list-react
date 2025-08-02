export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 300, duration: 0.6 },
  // exit: { opacity: 0, x: 40 },
  viewport: { once: true },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { type: "spring", stiffness: 300, duration: 0.6 },
  // viewport: { once: true },
};

export const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
  transition: { type: "spring", stiffness: 300, duration: 0.6 },
  // viewport: { once: true },
};

export const zoomIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { type: "spring", damping: 20, stiffness: 150 },
  // viewport: { once: true },
};
