"use client";
import React from "react";

import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Socials";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/CV_David.pdf'; // Ruta al archivo en el directorio public
    link.download = 'CV_David.pdf'; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section className="h-full ">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:py-1 ">
            {/*Text to display */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>

              <h1 className="h1 mb-2">
                Hello I'm <br /> <span className="text-acent">David Jeff</span>
              </h1>
              {/* Description */}
              <p className="max-w-[500px] mb-1 text-white/80">
                Soy un desarrollador front-end freelance en la
                creación de interfaces de usuario intuitivas y responsivas.
                Mi especialidad incluye el uso de tecnologías como
                HTML, CSS, JavaScript, React, y TypeScript.
                Me apasiona transformar ideas en experiencias web atractivas y
                funcionales, garantizando la mejor usabilidad y rendimiento.
                Mi enfoque se centra en el detalle y la calidad,
                siempre buscando soluciones innovadoras y eficientes.
              </p>
              {/* Buttons */}
              <div className="flex flex-col xl:flex-row items-center gap-4">
                <Link href="assets/resume/CV_David.pdf" >
                  <Button onClick={handleDownload} className="cursor-pointer flex items-center gap-2 hover:bg-acent hover:text-primary">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
                <div className="mb-4 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-acent rounded-full flex justify-center items-center text-acent hover:bg-acent hover:text-primary transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/*photo*/}
            <div className="order-1 xl:order-none mb-2 xl:mb-0">
              <Photo />
            </div>
          </div>

          {/* Stats */}
          <div>
            <Stats />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
