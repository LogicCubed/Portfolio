import Image from "next/image";

type ArtCardProps = {
  title: string;
  image: string;
  link?: string;
};

export default function ArtCard({ title, image, link }: ArtCardProps) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 p-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        />
      )}
    </div>
  );
}