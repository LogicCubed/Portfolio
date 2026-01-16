"use client";

import ImageTextSection from "@/components/ui/image-text-section";
import ScrollIn from "@/components/ui/scroll-in";
import SectionCard from "@/components/ui/section-card";
import { SoftSchoolButton } from "@/components/ui/soft-school-button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Ventures() {
  return (
    <div className="py-16 px-6 flex flex-col items-center mb-75">
      <div className="text-white text-6xl md:text-[100px] font-extrabold">
        Soft School
      </div>
      <Image
        src="/images/logos/softy.png"
        alt="Softy"
        width={250}
        height={250}
      />
      <SoftSchoolButton
        onClick={() => window.open("https://softschool.ai", "_blank")}
        variant="primary"
        className="cursor-pointer"
      >
        <ExternalLink width={16} height={16} strokeWidth={3}/>Check Us Out!
      </SoftSchoolButton>

      <div className="w-[80%] h-px bg-slate-600 my-6 mt-10 mb-10 mx-auto"></div>

      <ImageTextSection
        title="What is Soft School?"
        description={
          <>
            Soft School is a startup founded by{" "}
            <a
              href="https://www.linkedin.com/in/jonathan-alvarez-soft-school/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              Jonathan Alvarez
            </a>
            , and co-founded by me - Johann Ocuaman. Our mission is to create a product accessible to classrooms that provides students with lessons, puzzles, simulations, games, and other resources that will allow them to build and refine their social skills. We hope to repair damage that has been caused by social media and the digital age, as well as other contributing factors such as COVID-19.
          </>
        }
        imageSrc="/images/misc/hux.svg"
      />
      <ImageTextSection
        title="How it Works"
        description="Inspired by cartoon-themed educational websites, we have designed Soft School to derive inspiration from apps such as Duolingo, Kahoot, Quizlet, and more. With engaging lessons, puzzles, AI-simulations, and gamification through custom avatars, achievements, and streaks, we hope that Soft School will cultivate an environment where the youth will want to grow more on an emotional level."
        imageSrc="/images/misc/softygaming.svg"
        reverse
      />
      <ImageTextSection
        title="Building Soft School"
        description="The process behind developing Soft School involves new challenges that I have never faced before as a junior developer. Due to this project starting out with just Jonathan and I, we have both been tasked with brainstorming, planning, and executing each section of the startup. From designing the MVP and how we want our product to work in classrooms, to anticipating the creation of the final product, we hope to expand our services to help the youth around the world."
        imageSrc="/images/misc/softyglasses.svg"
      />

      <div className="w-[80%] h-px bg-slate-600 my-6 mt-10 mb-20 mx-auto"></div>

      <ScrollIn>
        <div className="w-4/5 md:w-[50%] bg-slate-800 p-6 text-left rounded-2xl mb-8">
          <h1 className="text-white text-3xl font-extrabold mb-6">Soft School Awards</h1>
            <SectionCard
              image="/images/logos/tcvn_survivor.png"
              alt="TCVN Survivor"
              title="TCVN Survivor XII"
              subtitle="2nd Place"
              description={
                <>
                  Read more about the competition{" "}
                  <a
                    href="https://www.linkedin.com/posts/jonathan-alvarez-soft-school_fastpitch-entrepreneurship-softschool-activity-7394661625452142592-ei0d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZaFoMBw7FvInniNyeGo87Xo4BM8DTGLSk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    here
                  </a>
                </>
              }
            />
            <SectionCard
              image="/images/logos/socal_startup_day.png"
              alt="Soft School"
              title="Socal Startup Pitch Competition"
              subtitle="1st Place"
              description={
                <>
                  Read more about the competition{" "}
                  <a
                    href="https://www.linkedin.com/posts/jonathan-alvarez-soft-school_entrepreneurship-victory-pitch-activity-7324647511762030592-Q-P6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZaFoMBw7FvInniNyeGo87Xo4BM8DTGLSk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    here
                  </a>
                </>
              }
            />
            <SectionCard
              image="/images/logos/socal_celebrates_entrepreneurship.png"
              alt="Soft School"
              title="Socal Celebrates Entrepreneurship"
              subtitle="1st Place"
              description={
                <>
                  Read more about the competition{" "}
                  <a
                    href="https://www.linkedin.com/posts/jonathan-alvarez-soft-school_lightningpitch-entrepreneurship-winning-activity-7319908210671263747-sLPp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZaFoMBw7FvInniNyeGo87Xo4BM8DTGLSk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    here
                  </a>
                </>
              }
            />
            <SectionCard
              image="/images/logos/csuf_logo.png"
              alt="Soft School"
              title="Titan Fast Pitch"
              subtitle="1st Place"
              description={
                <>
                  Read more about the competition{" "}
                  <a
                    href="https://csuftitanfastpitch.com/past-events/2024-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    here
                  </a>
                </>
              }
            />
        </div>
      </ScrollIn>
    </div>
  );
}
