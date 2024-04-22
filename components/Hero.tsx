"use client";
import React from "react";
import { Space_Grotesk, Roboto, Akaya_Telivigala } from "next/font/google";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { BackgroundGradientt } from "./ui/bggradient2";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
const poppins = Roboto({ subsets: ["latin-ext"], weight: "700" });
const akya = Akaya_Telivigala({ subsets: ["latin"], weight: "400" });
const space = Space_Grotesk({ subsets: ["latin"], weight: "700" });
export default function Hero() {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-20 place-items-center">
      <div className="flex flex-col items-center px-10 ">
        <div>
          <h1 className={`${space.className}  text-[50px] md:text-[80px]`}>
            Shivam
          </h1>
          {/* <p className="md:text-2xl  text-white">I am a Full Stack Developer.</p> */}
          <div className="md:text-2xl  text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a Full Stack Developer.")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .start();
              }}
            />
          </div>
          <div className="flex gap-4 my-8">
            <button
              onClick={() => router.push("/#projects")}
              className={`${poppins.className} border-2 border-[#bd93f9] hover:text-[#bd93f9] hover:bg-transparent transition-all duration-500 bg-[#bd93f9] text-[#282a36] px-3 py-2 text-2xl rounded-xl`}
            >
              My Work
            </button>
            <button
              onClick={() => {
                window.location.href = "mailto:shivamlather5@gmail.com";
              }}
              className={`text-[#bd93f9] border-2 hover:bg-[#bd93f9] hover:text-[#282a36] transition-all duration-500 border-[#bd93f9] px-3 py-2 rounded-xl text-2xl ${akya.className}`}
            >
              Hire Me
            </button>
          </div>
          <div className="flex md:flex-row flex-col ">
            <div>
              <div className="h-[40px] border-[#bd93f9] border-l-2 ml-3 mb-4 hidden md:flex"></div>
              <div className="flex md:flex-col gap-3 border-l-2 md:border-none border-[#bd93f9] pl-3 md:ml-0 ml-3 md:pl-0 md:h-fit h-[40px] items-center md:items-start">
                <FaInstagram
                  onClick={() =>
                    window.open("https://www.instagram.com/shivamlather__")
                  }
                  className="text-[#6272a4] text-3xl cursor-pointer hover:text-[#bd93f9] transition-all duration-300"
                />
                <FaLinkedin
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/shivam-lather-7181642aa/"
                    )
                  }
                  className="text-[#6272a4] text-3xl cursor-pointer hover:text-[#bd93f9] transition-all duration-300"
                />
                <FaGithub
                  onClick={() => window.open("https://github.com/Vilen23")}
                  className="text-[#6272a4] text-3xl cursor-pointer hover:text-[#bd93f9] transition-all duration-300"
                />
              </div>
            </div>
            <blockquote className="mt-[-20px] w-[300px] pl-6 text-sm italic text-[#b2dbf2]">
              <TextGenerateEffect words="Hi, I'm Shivam. I'm 20 yrs old and a Full Stack Developer.I love to  code and I love to create. I'm a creative thinker and I love to solve problems." />
            </blockquote>
          </div>
        </div>
      </div>
      <div>
        <BackgroundGradientt>
          <DirectionAwareHover
            imageUrl="/IMG_2402.JPG"
            className="md:h-96 md:w-96 h-[300px] w-[300px]"
          >
            <p className=" italic text-xl font-semibold text-[#bbf7d0]">
            "Coding isn't just my job;it's my superpower.{" "}
              <span className="text-[#caa6f7]">
                {" "}
                I turn ideas into digital magic.
              </span>
              "
            </p>
          </DirectionAwareHover>
        </BackgroundGradientt>
      </div>
    </div>
  );
}
