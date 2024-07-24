"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlideButtons from "@/components/WorkSlideButtons";

const projects = [
  {
    number: "01",
    category: "frontend",
    title: "Project 1",
    description: "Desarrollo de Web Site a medida del cliente",
    technologies: [
      {
        name: "React.JS",
      },
      {
        name: "Vite",
      },
      {
        name: "Typescript",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
    ],
    images: "/assets/work/First.png",
    live: "https://tecsago.com/",
    github: "https://github.com/JDeiv/Tecsa",
  },
  {
    number: "02",
    category: "frontend",
    title: "Project 2",
    description: "Página web a medida del cliente",
    technologies: [
      {
        name: "JavaScript",
      },
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
    ],
    images: "/assets/work/second.png",
    live: "https://www.grupolopezvallejo.com/",
    github: "https://github.com/JDeiv/grupoAma",
  },
];

type Project = {
  technologies: { name: string }[]; // Define la estructura de `technologies`
};

// type Props = {
//   techLine: Project; Propiedad `techLine` que debe cumplir con el tipo `Project`
// };

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    //get current slide index
    const slideIndex = swiper.activeIndex;
    //update project store based on current slide index
    setProject(projects[slideIndex]);
  };

  const chunkedTechnologies = project.technologies.reduce<string[][]>(
    (acc, tech, index) => {
      if (index % 5 === 0) acc.push([tech.name]);
      // Crea un nuevo grupo de nombres cada 5 elementos
      else acc[acc.length - 1].push(tech.name); // Agrega nombres al grupo actual
      return acc;
    },
    []
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex flex-col justify py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Projects Container */}
            <div
              className="w-full xl:w-[50%] xl:h-[460px] flex 
            flex-col xl:justify-between order-2 xl:order-none"
            >
              <div className="">
                {/* Work Number */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.number}
                </div>
                {/* project category */}
                <h2
                  className="text-[42px] fotn-bold leading-none text-white group-hover:text-acent 
                transition-all duration-500 capitalize"
                >
                  {project.category} Project
                </h2>
                {/* Project description */}
                <p className="text-white/60">{project.description}</p>
                
                {/* Technologies names */}
                {chunkedTechnologies.map((group, groupIndex) => (
                  <ul
                    key={groupIndex}
                    className="flex gap-4 border-b-2 pb-2 border-white/20"
                  >
                    {group.map((name, index) => (
                      <li key={index} className="text-xl text-acent">
                        {name}
                        {/* remove the last comma */}
                        {index !== group.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                ))}
                {/* border */}
                <div></div>
                {/* Buttons */}
                <div className="flex items-center gap-4 p-3">
                  {/* Live project */}
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-xl group-hover:text-acent  " />
                        </TooltipTrigger>
                        <TooltipContent className="text-primary bg-white rounded-full">
                          Live Project
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* Github Project */}
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-xl group-hover:text-acent  " />
                        </TooltipTrigger>
                        <TooltipContent className="text-primary bg-white rounded-full">
                          Github Project
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            {/* Slider Container  */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px]  "
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justife-center items-center bg-translucent">
                        {/* Overlay */}
                        <div className="border-4"></div>
                        {/* Images */}
                        <div></div>
                        <Image
                          src={project.images}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* Work Slide Buttons */}
                <WorkSlideButtons
                  containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] xl:bottom-12 z-20 w-full justify-between xl:w-max
                xl:justify-none "
                  buttonStyles="hover:text-acent xl:text-acent xl:text-[30px] text-primary text-[50px] w-[44px]
                h-[44px] flex justify-center items-center transition-all"
                ></WorkSlideButtons>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
