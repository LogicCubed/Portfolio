import ProjectCard from '@/components/ui/ProjectCard';

export default function Development() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '64px 24px 400px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        <ProjectCard
          title="Soft School"
          shortDescription="A website to learn Soft Skills"
          longDescription="A react-based website dedicated towards the teaching of Soft Skills to students through lessons, games, and interactive puzzles"
          githubUrl="https://github.com/LogicCubed/Soft-School-Website"
          imageUrl="/images/dragon_diorama.png"
        />
        <ProjectCard
          title="Morse Mate"
          shortDescription="A simple morse code translation tool"
          longDescription="A Flutter-based learning tool that converts text into Morse using sound, vibration, and flashlight output, with looping, timing control, and accessibility-first design"
          githubUrl="https://github.com/LogicCubed/Morse-Mate"
          imageUrl="/images/dragon_diorama.png"
        />
        <ProjectCard
          title="Gratuity"
          shortDescription="A simple tip calculator"
          longDescription="A tip calculator developed in Kotlin with features for tax, tip percentage, split, and more"
          githubUrl="https://github.com/LogicCubed/Gratuity"
          imageUrl="/images/dragon_diorama.png"
        />
        <ProjectCard
          title="Soft School App"
          shortDescription="Mobile version of Soft School"
          longDescription="A mobile version of Soft School to demonstrate cross-platform development"
          githubUrl="https://github.com/LogicCubed/Soft-School-App"
          imageUrl="/images/dragon_diorama.png"
        />
        <ProjectCard
          title="Doomscroll"
          shortDescription="A question of productivity"
          longDescription="An Art-heavy UI based game developed in Unity where you doomscroll to generate points and purchase upgrades"
          githubUrl="https://github.com/LogicCubed/Doomscroll"
          imageUrl="/images/dragon_diorama.png"
        />
        <ProjectCard
          title="Brine Knight"
          shortDescription="A warrior in a hermit shell"
          longDescription="A simple game developed in Unity where you explore levels as a hermit-crab in a 2D world"
          githubUrl="https://github.com/LogicCubed/Brine-Knight"
          imageUrl="/images/dragon_diorama.png"
        />
      </div>
    </main>
  );
}