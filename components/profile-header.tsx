import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ContactButton } from "./ui/contact-button";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
      
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <Image
          src="/images/headshot.png"
          alt="Profile photo"
          width={320}
          height={320}
          className="rounded-xl w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover"
        />
      </div>

      <div className="flex flex-col justify-center space-y-4 w-full md:w-auto text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
          Johann Ocuaman
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
          Computer Science, Entrepreneurship, and 3D Art
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-2">
          <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
            <ContactButton
              icon={<Github className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />}
              href="https://github.com/LogicCubed"
            />
            <ContactButton
              icon={<Linkedin className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />}
              href="https://www.linkedin.com/in/johann-ocuaman/"
            />
            <ContactButton
              icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />}
              href="mailto:johannocuaman@gmail.com"
            />
          </div>

          <a
            href="/files/Resume.pdf"
            download
            className="sm:ml-auto px-4 py-2 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
          >
            Resume <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

    </div>
  );
}