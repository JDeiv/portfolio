"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

//own component

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="flex"></div>
          <motion.div className="flex"
          initial={{opacity: 1}}
          animate={{opacity: 1, transition:{delay:1, duration:0.4, ease: "easeInOut"}}}
          >
            
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
