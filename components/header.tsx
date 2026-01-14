"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const link = (href: string, label: string) => {
    const active = pathname === href;

    return (
      <a
        href={href}
        className="relative group px-3 py-2 hidden md:inline-block"
      >
        {label}
        <span
          className={`
            absolute left-0 bottom-0 h-[6px] bg-[#f0075c] rounded-full
            transition-all duration-300 ease-out
            ${active ? "w-full" : "w-0"} 
            group-hover:w-full
          `}
        />
      </a>
    );
  };

  return (
    <header className="w-full bg-[#111112] px-4 md:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-6 md:space-x-12 w-full md:w-auto">
          <Image src="/images/logo.png" alt="Logo" width={64} height={64} />

          <nav className="hidden md:flex space-x-12 text-white font-extrabold uppercase text-lg">
            {link("/", "Home")}
            {link("/development", "Development")}
            {link("/3d_work", "3D Work")}
            {link("/ventures", "Ventures")}
            {link("/about_me", "About Me")}
          </nav>
        </div>

        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col md:hidden bg-[#111112] text-white font-bold uppercase text-lg px-4 pb-4 space-y-2">
          <a href="/" className="px-2 py-1 w-max">
            Home
          </a>
          <a href="/development" className="px-2 py-1 w-max">
            Development
          </a>
          <a href="/3d_work" className="px-2 py-1 w-max">
            3D Work
          </a>
          <a href="/ventures" className="px-2 py-1 w-max">
            Ventures
          </a>
          <a href="/about_me" className="px-2 py-1 w-max">
            About Me
          </a>
        </nav>
      )}
    </header>
  );
};