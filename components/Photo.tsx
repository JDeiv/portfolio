"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
//import App from "next/app";
import ParticlesAnima from "./Particles";


const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/profile.jpg"
            priority
            quality={100}
            fill
            alt="foto de perfil"
            className="object-contain rounded-xl shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Circle around */}
          <div className="w-2/3">
          <ParticlesAnima />
          </div>
    </div>
  );
};

export default Photo;
  {/* <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[306px]" 
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="https://www.w3.org/2000/svg"
      >

        <motion.circle
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.8, duration: 0.4, ease: "easeInOut" },
          }}
          cx="253"
          cy="253"
          r="250"
          fill="none"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinejoin="round"
        />

      </motion.svg> */}