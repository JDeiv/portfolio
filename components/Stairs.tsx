import React from "react";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Rendering 6 motion divs which represent stairs.
          All divs have the same animation properties defined by the
          stairAnimation object. The delay for each one is calculated dynamically 
          based on its reversed index, creating a staggered effect with decreasing delay for each step
      */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="relative w-20 h-20 bg-blue-500"
          />
        );
      })}
    </>
  );
};

export default Stairs;
