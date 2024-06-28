"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const information = [
  {
    name: "Mobile Phone",
    description: "+593 992651613",
    icon: <FaPhoneAlt />,
  },
  {
    name: "WhatsApp",
    description: "+593 992651613",
    icon: <FaWhatsapp />,
  },
  {
    name: "Email",
    description: "imbauqingojefferson60@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Address",
    description: "Quito, Ponciano Bajo",
    icon: <FaMapMarkerAlt />,
  },
];
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[38px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form action="flex flex-col gap-6 p-10 rounded-xl ">
              <h3 className="text-4xl text-acent ">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aliquid eum eius, sunt nostrum labore, asperiores
                consequuntur.
              </p>
              {/* Input form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="lastname" placeholder="Lastname"/>
              <Input type="email" placeholder="@Email"/>
              <Input type="telephone" placeholder="Phone Number"/>
              </div>
              {/* Select form */}
              <Select>
                <SelectTrigger className="w-full  my-4">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className=" ">
                    <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">
                        Web Design
                      </SelectItem>
                      <SelectItem value="cst" >
                      Augmented Reality
                    </SelectItem>
                      <SelectItem value="mst" >
                      Web Develop
                    </SelectItem>
                   
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TextArea to write the message */}
              <Textarea className="h-[200]"
              placeholder="Type your message here">
                
              </Textarea>

              {/* button submit */}
              <Button size="default" className="w-full" >
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {information.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="flex gap-4 my-1 items-center justify-center">
                    <div className="w-[52px] h-[52px] xl:-w-[52px] xl:h-[52px]
                    bg-[#27272c] text-acent rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                    <span className="text-white">{item.name}</span>
                    <p>{item.description}</p>
                    </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
