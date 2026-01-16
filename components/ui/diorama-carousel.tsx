"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import DioramaCard from "./diorama-card";

interface CarouselItem {
  title: string;
  description: string;
  modelPath: string;
}

export default function DioramaCarousel() {
  const items: CarouselItem[] = [
    {
      title: "Where I Started",
      description:
        "I initially began my journey in the world of 3D modelling in 2019, when I created assets to be used for game development. This is where I initially adopted a low-poly style for simplicity, before evolving and beginning to attempt larger art-based projects with software such as Blender",
      modelPath: "/models/dragon_diorama.glb",
    },
    {
      title: "What I Use",
      description:
        "Today, I use tools like Blockbench, Blender, and Sketchfab to create and render various projects and am looking to break into the world of concept-art, animation, and more",
      modelPath: "/models/rattler_drone_diorama.glb",
    },
    {
      title: "What I Do Now",
      description:
        "Now, I have managed the process of creating, showcasing, and selling assets for game developers online who, like I once was, eager to build but lack the graphical resources to do so",
      modelPath: "/models/robotic_velociraptor_diorama.glb",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  return (
    <div className="relative w-full flex items-center justify-center my-12">
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-0 ml-40 z-10 bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition cursor-pointer"
      >
        <ChevronLeftIcon className="w-8 h-8 text-white" strokeWidth={3} />
      </button>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-5xl overflow-visible h-[500px]">
        {/* Previous Card */}
        <motion.div
          key={prevIndex}
          initial={{ x: -350, scale: 0.75, opacity: 0.25 }}
          animate={{ x: -350, scale: 0.75, opacity: 0.25 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-5"
        >
          <DioramaCard {...items[prevIndex]} />
        </motion.div>

        {/* Current Card */}
        <motion.div
          key={currentIndex}
          initial={{ x: 500, scale: 0.75, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          exit={{ x: -500, scale: 0.75, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        >
          <DioramaCard {...items[currentIndex]} />
        </motion.div>

        {/* Next Card */}
        <motion.div
          key={nextIndex}
          initial={{ x: 350, scale: 0.75, opacity: 0.25 }}
          animate={{ x: 350, scale: 0.75, opacity: 0.25 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-5"
        >
          <DioramaCard {...items[nextIndex]} />
        </motion.div>
      </div>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-0 mr-40 z-10 bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition cursor-pointer"
      >
        <ChevronRightIcon className="w-8 h-8 text-white" strokeWidth={3} />
      </button>
    </div>
  );
}