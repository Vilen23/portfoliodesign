"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { BackgroundGradient } from "./ui/background-gradient";
import { useRouter } from "next/navigation";
import { IoDocumentOutline } from "react-icons/io5";
import { motion } from "framer-motion";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex w-[100vw] justify-center py-5 ">
      <BackgroundGradient className="flex justify-around px-5 md:px-10 items-center h-[8vh] w-fit rounded-full gap-10  bg-[#1e1e2e]">
        <div className="title text-3xl font-semibold md:mr-10 flex items-center gap-2 cursor-pointer">
          <span className="text-[#282a36] bg-[#9886d7] hidden md:block font-bold rounded-[100%] py-2 px-2 text-xl">
            {"</>"}
          </span>{" "}
          <div>
            <span>S</span>
            <span className="text-white font-normal text-xl uppercase ">
              hivam
            </span>
          </div>
        </div>
        <div className="text-2xl md:text-xl cursor-pointer flex items-center">
          ./<span className="text-white hidden md:flex">Home</span>
          <span className="text-white md:hidden">
            <FaHome />
          </span>
        </div>
        <div
          onClick={() => router.push("/#projects")}
          className="text-xl text-white cursor-pointer"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="text-white hidden md:flex "
          >
            Projects
          </motion.span>
          <span className="md:hidden text-2xl">
            <GoProjectRoadmap />
          </span>
        </div>
        <a
          href="/Shivam_Resume.pdf"
          download
          className="text-xl text-white cursor-pointer hidden md:flex"
        >
          CV
        </a>
        <a
          href="/Shivam_Resume.pdf"
          download
          className="text-white text-2xl md:hidden"
        >
          <IoDocumentOutline />
        </a>
      </BackgroundGradient>
    </div>
  );
}
