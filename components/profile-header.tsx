import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ContactButton } from "./ui/contact-button";

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-8 p-6">
      <div className="flex-shrink-0">
        <Image
          src="/images/headshot.png"
          alt="Profile photo"
          width={320}
          height={320}
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-6xl font-extrabold text-white">Johann Ocuaman</h1>
        <p className="text-lg text-gray-300 max-w-lg">
          Computer Science, Entrepreneurship, and 3D Art
        </p>

        <div className="flex items-center w-full">
            <div className="flex space-x-4">
                <ContactButton
                    icon={<Github className="w-5 h-5" strokeWidth={2}/>}
                    href="https://github.com/LogicCubed"
                />
                <ContactButton
                    icon={<Linkedin className="w-5 h-5" strokeWidth={2}/>}
                    href="https://www.linkedin.com/in/johann-ocuaman/"
                />
                <ContactButton
                    icon={<Mail className="w-5 h-5" strokeWidth={2}/>}
                    href="mailto:johannocuaman@gmail.com"
                />
            </div>
            <a
                href="/files/Resume.pdf"
                download
                className="ml-auto px-4 py-2 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition-colors flex items-center gap-2"
            >
                Resume <Download className="w-5 h-5" />
            </a>
        </div>
      </div>
    </div>
  );
}