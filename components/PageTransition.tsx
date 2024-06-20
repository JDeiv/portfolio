"use client";

import { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,transition: {delay:1, duration: 0.5, ease: "easeInOut"}}}
        // exit={{ opacity: 0 }}
        
        key={pathname}
        className=" bg-primary"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
