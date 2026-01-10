import { Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  shortDescription: string;
  longDescription: string;
  githubUrl: string;
  imageUrl?: string;
};

export default function ProjectCard({
  title,
  shortDescription,
  longDescription,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        h-[220px]
        w-full
        rounded-xl
        cursor-pointer
        overflow-hidden
        transition-transform duration-300 ease-out
        hover:scale-[1.02]
        hover:shadow-xl
        hover:shadow-black/40
      "
      style={{
        backgroundColor: !imageUrl ? '#000' : undefined,
      }}
    >

      {imageUrl && (
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            transition-all duration-300
            group-hover:blur-sm
          "
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      )}

      <div
        className="
          absolute inset-0
          bg-black/60
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div
        className="
          absolute inset-0 p-4
          flex flex-col justify-end
          transition-opacity duration-200
          group-hover:opacity-0
        "
      >
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white/70 text-sm mt-1">{shortDescription}</p>
      </div>

      <div
        className="
          absolute inset-0 p-4
          flex flex-col
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
      >
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white/80 text-sm mt-2 leading-relaxed">
          {longDescription}
        </p>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-200
          z-10
        "
      >
        <div
          className="
            flex items-center gap-2
            rounded-md
            bg-black
            px-4 py-2
            text-sm
            font-semibold
            text-white
            hover:bg-gray-900
            transition-colors
          "
        >
          <Github size={16} />
          View on GitHub
        </div>
      </a>
    </div>
  );
}