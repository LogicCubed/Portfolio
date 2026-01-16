import Image from "next/image";

import { ContactButton } from "./ui/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white">
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
        <Image
          src="/wave.svg"
          alt="Wave"
          className="w-full h-auto"
          width={1920}
          height={300}
        />
      </div>

      <div className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-lg mb-4">Socials</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <ContactButton
                icon={<GithubIcon className="w-5 h-5" strokeWidth={2} />}
                href="https://github.com/LogicCubed"
              />
              <ContactButton
                icon={<LinkedinIcon className="w-5 h-5" strokeWidth={2} />}
                href="https://www.linkedin.com/in/johann-ocuaman/"
              />
              <ContactButton
                icon={<YoutubeIcon className="w-5 h-5" strokeWidth={2} />}
                href="https://www.youtube.com/@UnLogic_"
              />
              <ContactButton
                icon={<TwitterIcon className="w-5 h-5" strokeWidth={2} />}
                href="https://x.com/LogicCubed"
              />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Ventures</h3>
            <ul className="space-y-2">
              <li><a href="https://softschool.ai" className="text-gray-400 hover:text-white transition-colors">Soft School</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Other</h3>
            <ul className="space-y-2">
              <li><a href="https://mcmodels.net/vendors/201/unlogic" className="text-gray-400 hover:text-white transition-colors">MC Models</a></li>
              <li><a href="https://sketchfab.com/UnLogic_" className="text-gray-400 hover:text-white transition-colors">Sketchfab</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Johann Ocuaman. All rights reserved.
        </div>
      </div>
    </footer>
  );
};