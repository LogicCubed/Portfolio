"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  alt?: string;
  sketchfab?: string;
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
            className="relative w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-label={slide.alt}
          >
            {slide.sketchfab && (
              <a
                href={slide.sketchfab}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-12 left-6 z-10 bg-sky-400 hover:bg-sky-500 text-white font-extrabold px-4 py-2 rounded-md flex items-center gap-2"
              >
                <ExternalLink size={16} />
                View on Sketchfab
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/90 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/90 to-transparent" />

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
              ${
                i === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white cursor-pointer"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}