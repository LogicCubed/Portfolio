"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import DioramaCard from "./diorama-card";

interface CarouselItem {
  title: string;
  description: string;
  modelPath: string;
}

export default function DioramaCarousel() {
  const items: CarouselItem[] = [
    {
      title: "Dragon Diorama",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      modelPath: "/models/dragon_diorama.glb",
    },
    {
      title: "Helmet Diorama",
      description:
        "Another description goes here for the helmet model. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      modelPath: "/models/dragon_diorama.glb",
    },
    {
      title: "Offroad Diorama",
      description:
        "Third description here for offroad diorama. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      modelPath: "/models/dragon_diorama.glb",
    },
    {
      title: "Extra Filler",
      description:
        "Just some more filler. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      modelPath: "/models/dragon_diorama.glb",
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
      <button
        onClick={prev}
        className="absolute left-0 ml-40 z-10 bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition cursor-pointer"
      >
        <ChevronLeftIcon className="w-8 h-8 text-white" strokeWidth={3} />
      </button>

      <div className="relative flex items-center justify-center w-full max-w-5xl overflow-visible h-[500px]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none transition-transform duration-500"
          style={{
            transform: "translateX(-350px) scale(0.75)",
            opacity: 0.25,
            zIndex: 5,
          }}
        >
          <DioramaCard {...items[prevIndex]} />
        </div>

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-500"
          style={{
            transform: "translateX(0px) scale(1)",
            opacity: 1,
            zIndex: 10,
          }}
        >
          <DioramaCard {...items[currentIndex]} />
        </div>

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none transition-transform duration-500"
          style={{
            transform: "translateX(350px) scale(0.75)",
            opacity: 0.25,
            zIndex: 5,
          }}
        >
          <DioramaCard {...items[nextIndex]} />
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-0 mr-40 z-10 bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition cursor-pointer"
      >
        <ChevronRightIcon className="w-8 h-8 text-white" strokeWidth={3} />
      </button>
    </div>
  );
}
