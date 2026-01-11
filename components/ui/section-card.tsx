"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SectionCardProps = {
  image?: string;
  alt?: string;
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
};

export default function SectionCard({
  image,
  alt,
  title,
  subtitle,
  date,
  description,
}: SectionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDescription = Boolean(description);

  return (
    <div className="flex flex-col w-full mb-4 bg-gray-900 p-4 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-4">
        <div className="flex items-start gap-4 w-full sm:w-auto">
          {image && (
            <Image
              src={image}
              alt={alt || title}
              width={64}
              height={64}
              className="rounded-2xl"
            />
          )}
          <div className="flex flex-col flex-1 min-w-0">
            <h2 className="text-white text-lg sm:text-xl font-bold">{title}</h2>
            {subtitle && (
              <p className="text-white/70 text-sm mt-1">{subtitle}</p> 
            )}
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-0 mt-2 sm:mt-0">
          {date && (
            <p className="text-white/60 text-sm font-semibold">{date}</p>
          )}
          {hasDescription && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-white/70 hover:text-white cursor-pointer transition-transform"
            >
              <ChevronDown
                size={20}
                strokeWidth={3}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {hasDescription && isOpen && (
        <div className="mt-2 sm:ml-[80px] opacity-0 animate-fadeIn">
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
}