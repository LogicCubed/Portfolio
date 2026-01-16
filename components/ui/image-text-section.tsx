import Image from "next/image";

type ImageTextSectionProps = {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  reverse?: boolean;
};

const ImageTextSection = ({ title, description, imageSrc, reverse = false }: ImageTextSectionProps) => {
  return (
    <section className="w-[80%] mx-auto py-12">
      <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-10 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-white tracking-wide mb-5">{title}</h2>
          <p className="text-lg text-gray-300">{description}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={title}
            height={325}
            width={325}
            className="relative overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;