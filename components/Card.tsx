import React from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { MdOnlinePrediction } from "react-icons/md";
import { GithubIcon } from "lucide-react";
import { motion } from "framer-motion";
const space = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export interface BlogContent {
  title: string;
  description: string;
  image: string;
  techstack: { name: string; color: string; img: string }[];
  github: string;
  live: string;
}

export default function Card({ blogContent }: { blogContent: BlogContent }) {
  return (
    <motion.div
    initial={{ scale: 0.8, opacity: 0 }} 
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{duration:1,type:"spring",stiffness:260,damping:20,delay:0.1}}
    className="relative md:h-[506px] ">
      <span className="absolute top-0  left-0 mt-[10px] ml-[10px] h-full   bg-[#8646d7] w-[85vw] md:w-[525px] rounded-xl"></span>
      <span
        className={` ${space.className}  relative h-full border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-4 py-3 text-md text-white  transition duration-100 flex items-center gap-2 justify-center w-[85vw] md:w-[525px] rounded-xl`}
      >
        <div className="flex flex-col items-center">
          <DirectionAwareHover
            imageUrl={blogContent.image}
            className=" w-[270px] md:w-[400px] md:h-[250px] shadow-2xl border-l-[1px] border-[#374151] border-t-[1px] rounded-xl flex"
          >
            <div className="flex gap-4 justify-center w-full items-center flex-wrap">
              {blogContent.techstack.map((tech) => (
                <Image src={tech.img} alt={tech.name} width={25} height={25} key={tech.name}/>
              ))}
            </div>
          </DirectionAwareHover>
          <div className="font-bold text-3xl md:text-4xl mt-4 mb-2 text-[#ffbe6f]">
            {blogContent.title}
          </div>
          <div className="font-sm text-justify text-sm md:text-lg line-clamp-2 md:w-[425px]">
            {blogContent.description}
          </div>
          <div className="flex gap-10 justify-around my-4  w-full">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="px-3 py-2 text-2xl text-[#67e8f9] flex gap-2 items-center cursor-pointer"
              onClick={() => window.open(blogContent.live)}
            >
              {" "}
              <span>
                <MdOnlinePrediction />
              </span>
              Live
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className=" cursor-pointer px-3 py-2 text-2xl text-[#caa6f7] flex gap-2 items-center"
              onClick={() => window.open(blogContent.github)}
            >
              <span>
                <GithubIcon />
              </span>
              Github
            </motion.button>
          </div>
        </div>
      </span>
    </motion.div>
  );
}
