"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card';
export default function Projects() {
  return (
    <div className='flex justify-center flex-col'>
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
          className="text-4xl font-bold"
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
          className="text-5xl text-[#67e8f9] font-semibold"
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
          className="text-4xl font-bold"
        >{`/>`}</motion.span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center my-20'>
          <Card blogContent={blogContent} />
      </div>
    </div>
  )
}

const blogContent = {
    title: "Portfolio Website",
    description:
      "The website you are currently on to showcase my work and projects.",
    image: "/portfl.png",
    techstack:[
        {
            name:'NextJS',
            color:'#61dbfb',
            img:"/nxt.png"
        },
        {
            name:'TailwindCSS',
            color:'#06b6d4',
            img:"/tailwind.png"
        },
        {
            name:'Framer Motion',
            color:'#67e8f9',
            img:"/react.svg"
        }
    ],
    github:"https://github.com/Vilen23/portfoliodesign",
    live:"http://localhost:3000/"
  };