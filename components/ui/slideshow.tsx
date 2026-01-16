"use client";

import { useEffect, useState } from "react";

type Slide = {
  image: string;
  alt?: string;
};

type SlideshowProps = {
  slides: Slide[];
  interval?: number;
};

export default function Slideshow({
  slides,
  interval = 6000,
}: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(id);
  }, [slides.length, interval, tick]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-label={slide.alt}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setTick((t) => t + 1);
            }}
            className={`
              h-5 w-5 rounded-full transition-all
              ${i === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white cursor-pointer"}
            `}
          />
        ))}
      </div>
    </div>
  );
}