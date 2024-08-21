"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectLabel, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
    description: "jdavidimbaquingo@hotmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Address",
    description: "Quito, Ponciano Bajo",
    icon: <FaMapMarkerAlt />,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

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
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 rounded-xl">
              <h3 className="text-4xl text-acent">Let's work together</h3>
              <p className="text-white/60">
                Send your message and begin to create a new project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" type="text" placeholder="Firstname" value={formData.firstName} onChange={handleChange} />
                <Input name="lastName" type="text" placeholder="Lastname" value={formData.lastName} onChange={handleChange} />
                <Input name="email" type="email" placeholder="@Email" value={formData.email} onChange={handleChange} />
                <Input name="phoneNumber" type="text" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full my-4">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Design">Web Design</SelectItem>
                    <SelectItem value="Augmented Reality">Augmented Reality</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Web Development">Otros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" className="h-[200]" placeholder="Type your message here" value={formData.message} onChange={handleChange} />
              <Button size="default" className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {information.map((item, index) => (
                <li key={index}>
                  <div className="flex gap-4 my-1 items-center justify-center">
                    <div className="w-[52px] h-[52px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-acent rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-bold">{item.name}</span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
