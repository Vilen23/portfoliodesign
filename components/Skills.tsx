"use client";
import Image from "next/image";
import React from "react";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
const space = Space_Grotesk({ subsets: ["latin"], weight: "400" });
const fronendskills = [
  {
    id: 1,
    name: "NextJs",
    icon: "/nxt.png",
  },
  {
    id: 2,
    name: "ReactJs",
    icon: "/react.svg",
  },
  {
    id: 3,
    name: "Typescript",
    icon: "/typescript-icon.svg",
  },
  {
    id: 4,
    name: "Javascript",
    icon: "/js.png",
  },
];

const backendSkills = [
  {
    id: 0,
    name: "TailwindCss",
    icon: "/tailwind.png",
  },
  {
    id: 1,
    name: "NodeJs",
    icon: "/nodejs.png",
  },
  {
    id: 2,
    name: "ExpressJs",
    icon: "/express.png",
  },
  {
    id: 3,
    name: "Prisma",
    icon: "/image.png",
  },
];

const databases = [
  {
    id: 0,
    name: "MongoDB",
    icon: "/mongo.png",
  },
  {
    id: 1,
    name: "Postgres",
    icon: "/postgres.png",
  },
  {
    id: 2,
    name: "Redis",
    icon: "/redis.png",
  },
];

const tools = [
  {
    id: 0,
    name: "Docker",
    icon: "/docker.png",
  },
  {
    id: 1,
    name: "Git",
    icon: "/git.png",
  },
  {
    id: 2,
    name: "Github",
    icon: "/github.png",
  },
];

const tools_2 = [
  {
    id: 1,
    name: "VsCode",
    icon: "/vscode.png",
  },
  {
    id: 2,
    name: "Neovim",
    icon: "/neovim.png",
  },
];

const tools_3 = [
  {
    id: 1,
    name: "Linux",
    icon: "/linux.png",
  },
];

export default function Skills() {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, x: -100, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" text-3xl md:text-4xl font-bold"
        >{`<`}</motion.span>
        <motion.span
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-4xl text-[#67e8f9] font-semibold"
        >
          Skills
        </motion.span>
        <motion.span
          initial={{ scale: 0.8, x: 100, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" text-3xl md:text-4xl font-bold"
        >{`/>`}</motion.span>
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {fronendskills.map((skill) => (
          <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#caa6f7] w-[150px] md:w-[160px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px] md:w-[160px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {backendSkills.map((skill) => (
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#34c07c] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {databases.map((skill) => (
          <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#dc8070] w-[150px] md:w-[160px] "></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px] md:w-[160px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {tools.map((skill) => (
          <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#67e8f9] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {tools_2.map((skill) => (
          <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#34c07c] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10">
        {tools_3.map((skill) => (
          <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
            className="flex flex-wrap justify-center gap-6 cursor-pointer"
          >
            <div className="relative ">
              <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full  rounded  bg-[#caa6f7] w-[150px]"></span>
              <span
                className={` ${space.className} relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[150px]`}
              >
                <Image
                  src={skill.icon}
                  width={25}
                  height={25}
                  alt={skill.name}
                />
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
