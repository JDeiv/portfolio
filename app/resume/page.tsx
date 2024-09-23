"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { BiLogoBlender } from "react-icons/bi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { title } from "process";

//Our data on cv
const personalInformation = {
  //Description About Me
  tittle: "Perfil",
  description:
    "Ingeniero en Informática con un año de sólida experiencia en el medio de IT, enfocado en el desarrollo de soluciones innovadoras y eficientes. Mi pasión por la tecnología y mi compromiso con la excelencia me impulsan a buscar constantemente oportunidades para crecer profesionalmente y aportar valor en cada proyecto en el que participo.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "David Imbaquingo",
    },
    {
      fieldName: "Móvil",
      fieldValue: "+593 992651613",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Ecuadorian",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Spanish, English",
    },
    {
      fieldName: "Email",
      fieldValue: "imbaquingojefferson60@gmail.com",
    },
    {
      fieldName: "Trabajo",
      fieldValue: "Disponible ",
    },
  ],
};

//Experience data
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Experiencia",
  description:
    "Soy un desarrollador web apasionado con experiencia en la creación de proyectos frontend. He trabajado en una variedad de proyectos que van desde sitios web informativos hasta aplicaciones web interactivas, utilizando tecnologías modernas para ofrecer soluciones eficientes y atractivas ",
    //Soy un desarrollador web apasionado con experiencia en la creación de proyectos frontend innovadores y funcionales. He trabajado en una variedad de proyectos que van desde sitios web informativos hasta aplicaciones web interactivas, utilizando tecnologías modernas para ofrecer soluciones eficientes y atractivas
  items: [
    {
      company: "Tecsago",
      position: "IT Leader Support",
      duration: "2023-2024",
    },
    {
      company: "Tecsago",
      position: "Web Develop",
      duration: "2020 - 2021",
    },
    {
      company: "Personal Projects",
      position: "3D Modeler",
      duration: "2020 - 2021",
    },
  ],
};

// education section
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi Educación",
  description:
    "",
  items: [
    
    {
      school: "Bootcamp Javascript",
      degree: "Udemy Certificate",
      duration: "2023",
    },
    {
      school: "Blender Udemy Courses",
      degree: "Udemy Certificate",
      duration: "2022",
    },
    {
      school: "Universidad Politécnica Estatal del Carchi",
      degree: "Information Technology Engineer",
      duration: "2021",
    },
    {
      school: "Realidad Aumentada con Unity Udemy Courses",
      degree: "Udemy Certificate",
      duration: "2020",
    },
  ],
};

// skills section
const skills = {
  title: "Mis Habilidades",
  description:
    "Mi pasión por la tecnología y mi compromiso con la excelencia me impulsan a seguir aprendiendo constantemente y buscar oportunidades para crecer profesionalmente.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <BiLogoBlender />,
      name: "Blender",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80px] flex items-center justify-center py-8 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experiences" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiences">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="personalInformation">Sobre Mí</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experiences */}
            <TabsContent value="experiences" className="w-full">
              <div className="p-3">
                <h3 className="text-lg font-semibold ">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences.description}</p>
                <ScrollArea>
                  <div className="flex flex-col xl:grid grid-cols-2 gap-14  py-4">
                    {experiences.items.map((item, index) => (
                      <div key={index} className="flex flex-col gap-2 shadow-xl container">
                        <p className="text-lg font-semibold text-acent">{item.company}</p>
                        <p className="text-sm">{item.position}</p>
                        <p className="text-sm">{item.duration}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="p-3">
                <h3 className="text-lg font-semibold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea>
                  <div className="flex flex-col py-4 xl:grid grid-cols-2 gap-14">
                    {education.items.map((item, index) => (
                      <div key={index} className="flex flex-col shadow-xl container ">
                        <p className="text-lg font-semibold text-acent">{item.school}</p>
                        <p className="text-sm">{item.degree}</p>
                        <p className="text-sm">{item.duration}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div>
                <h3 className="text-lg font-semibold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ScrollArea>
                  <div className="grid grid-cols-2 xl:grid-cols-3 container justify-items-center xl:items-center xl:justify-center gap-4 py-4">
                    {skills.skillList.map((item, index) => (
                      <div key={index} className="shadow-xl ">
                        <p className="text-sm font-semibold text-center ">{item.name}</p> 
                        <p className=" text-8xl xl:text-9xl">{item.icon}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* About Me */}
            <TabsContent value="personalInformation" className="w-full">
              <div>
                <h3 className="text-lg font-semibold ">{personalInformation.tittle}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{personalInformation.description}</p>
                <ScrollArea>
                  <div className="grid grid-cols-2 xl:grid-cols-3 items-center gap-8 py-4 mx-8 xl:mx-0">
                    {personalInformation.info.map((item, index) => (
                      <div key={index} className="flex flex-col gap-2 shadow-xl container">
                        <p className="text-lg font-semibold text-acent">{item.fieldName}</p>
                        <p className="text-[12px]">{item.fieldValue}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
