"use client";
import React from "react";
import { color, motion } from "framer-motion";
import Card from "./Card";
export default function Projects() {
  return (
    <div className="flex justify-center flex-col mt-20">
      <div className="flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, x: -80, opacity: 0 }}
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
          className="text-4xl md:text-5xl text-[#67e8f9] font-semibold"
        >
          Projects
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
          className="text-3xl md:text-4xl font-bold"
        >{`/>`}</motion.span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-20 gap-10">
        {blogContent.map((blog) => (
          <Card blogContent={blog} key={blog.title}/>
        ))}
      </div>
    </div>
  );
}

const blogContent = [
  {
    title:"Medium",
    description:"A Medium clone where users can write and share their stories with others.Can share their photos and stories with others.",
    image:"/medium.png",
    techstack:[
      {
        name:"ReactJs",
        color:"#61dbfb",
        img:"/react.svg"
      },
      {
        name:"TailwindCSS",
        color:"#06b6d4",
        img:"/tailwind.png"
      },
      {
        name:"Typescript",
        color:"#007acc",
        img:"/typescript-icon.svg"
      },
      {
        name:"Firebase",
        color:"#ffca28",
        img:"/firebase.png"
      },
      {
        name:"Cloudflare workers",
        color:"#f38020",
        img:"/cloudflare.png"
      },
      {
        name:"Postgresql",
        color:"#336791",
        img:"/postgres.png"
      },
      {
        name:"Prisma",
        color:"#2d3748",
        img:"/image.png"
      }
    ],
    github:"https://github.com/Vilen23/Medium",
    live:"https://medium-zeta.vercel.app/"
  },
  {
    title:"Socialy",
    description:"A social media app where users can post their photos and stories.Users can follow other users and like their posts.",
    image:"/socialy.png",
    techstack:[
      {
        name:"NextJs",
        color:"#61dbfb",
        img:"/nxt.png"
      },
      {
        name:"Typescript",
        color:"#007acc",
        img:"/typescript-icon.svg"
      },
      {
        name:'Socket.io',
        color:"#010101",
        img:"/socket.png"
      },
      {
        name:"TailwindCSS",
        color:"#06b6d4",
        img:"/tailwind.png"
      },
      {
        name:"Postgresql",
        color:"#336791",
        img:"/postgres.png"
      },
      {
        name:"Prisma",
        color:"#2d3748",
        img:"/image.png"
      },
    ],
    github:"https://github.com/Vilen23/Socialy",
    live:"https://socialy-production.up.railway.app/"
  },
  {
    title: "Portfolio Website",
    description:
      "The website you are currently on to showcase my work and projects.I have added animations using framer motion.",
    image: "/portfl.png",
    techstack: [
      {
        name: "NextJS",
        color: "#61dbfb",
        img: "/nxt.png",
      },
      {
        name:"Typescript",
        color:"#007acc",
        img:"/typescript-icon.svg"
      },
      {
        name: "TailwindCSS",
        color: "#06b6d4",
        img: "/tailwind.png",
      },
      {
        name: "Framer Motion",
        color: "#67e8f9",
        img: "/react.svg",
      },
    ],
    github: "https://github.com/Vilen23/portfoliodesign",
    live: "http://localhost:3000/",
  },
  {
    title:"SnipIt",
    description:"A code snippet manager to save and share code snippets.One can save picture of their code and share it with others.",
    image:"/snipit.png",
    techstack:[
      {
        name:"NextJs",
        color:"#61dbfb",
        img:"/nxt.png"
      },
      {
        name:"TailwindCSS",
        color:"#06b6d4",
        img:"/tailwind.png"
      },
      {
        name:"React",
        color:"#ffca28",
        img:"/react.svg"
      },{
        name:"Typescript",
        color:"#007acc",
        img:"/typescript-icon.svg"
      },
      
    ],
    github:"https://github.com/Vilen23/SnipIt",
    live:"https://snip-it-blond.vercel.app/"
  }
];
