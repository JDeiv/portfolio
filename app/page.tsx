import React from "react";

import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Socials";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
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
              <p className="max-w-[500px] mb-1 text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis asperiores tempora quia dolores
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-4">
                <Link href="/">
                  <Button className="cursor-pointer flex items-center gap-2 hover:bg-acent hover:text-primary">
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
          <div>
            <Stats />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
