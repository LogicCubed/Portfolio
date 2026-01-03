import Image from "next/image";

// Footer Color: #111112
export const Footer = () => {
  return (
    <footer className="relative bg-[#111112]">
      {/* Wave (decorative, overlaps upward) */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
        <Image
          src="/wave.svg"
          alt="Wave"
          className="w-full h-auto"
          width={1920}
          height={300}
        />
      </div>

      {/* Actual footer content */}
      <div className="relative z-10 py-16 text-white text-center">
        Footer
      </div>
    </footer>
  );
};