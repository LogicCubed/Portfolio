import ProjectCard from '@/components/ui/project-card';

export default function Development() {
  return (
    <div className="relative"
      style={{
        minHeight: '150vh',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 py-16 px-6 flex justify-center mb-50">
        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Soft School"
            shortDescription="Program for learning Soft Skills"
            longDescription="A react-based website dedicated towards the teaching of Soft Skills to students through lessons, games, and interactive puzzles"
            githubUrl="https://github.com/LogicCubed/Soft-School-Website"
            imageUrl="/images/project_cards/soft_school.png"
          />
          <ProjectCard
            title="Morse Mate"
            shortDescription="Morse code translation tool"
            longDescription="A Flutter-based tool that converts text into Morse using sound, vibration, and flashlight output, with looping, timing control, and accessibility-first design"
            githubUrl="https://github.com/LogicCubed/Morse-Mate"
            imageUrl="/images/project_cards/morse_mate.png"
          />
          <ProjectCard
            title="Gratuity"
            shortDescription="Simple tip calculator"
            longDescription="A tip calculator developed in Kotlin with features for tax, tip percentage, split, and more"
            githubUrl="https://github.com/LogicCubed/Gratuity"
            imageUrl="/images/project_cards/gratuity.png"
          />
          <ProjectCard
            title="Soft School App"
            shortDescription="Mobile version of Soft School"
            longDescription="A mobile version of Soft School to demonstrate cross-platform development"
            githubUrl="https://github.com/LogicCubed/Soft-School-App"
            imageUrl="/images/project_cards/soft_school_mobile.png"
          />
          <ProjectCard
            title="Doomscroll"
            shortDescription="A game about my guilty pleasure"
            longDescription="A UI based game developed in Unity where you doomscroll to generate points and purchase upgrades"
            githubUrl="https://github.com/LogicCubed/Doomscroll"
            imageUrl="/images/project_cards/doomscroll.png"
          />
          <ProjectCard
            title="Brine Knight"
            shortDescription="A game about a warrior in a hermit shell"
            longDescription="A simple game developed in Unity where you explore levels as a hermit-crab in a 2D world"
            githubUrl="https://github.com/LogicCubed/Brine-Knight"
            imageUrl="/images/project_cards/brine_knight.png"
          />
          <ProjectCard
            title="The Legend of Tim"
            shortDescription="No better protagonist than Tim himself"
            longDescription="A 2D topdown rogue-like developed in Unity where you fight off Tim's greatest fears"
            githubUrl="https://github.com/LogicCubed/Brine-Knight"
            imageUrl="/images/project_cards/the_legend_of_tim.png"
          />
        </div>
      </div>
    </div>
  );
}