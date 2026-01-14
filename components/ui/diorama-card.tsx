import Diorama from "@/components/3d/diorama";

interface DioramaCardProps {
  title: string;
  description: string;
  modelPath: string;
}

export default function DioramaCard({
  title,
  description,
  modelPath,
}: DioramaCardProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-md">
        <div className="w-full h-[500px] overflow-hidden">
            <Diorama modelPath={modelPath} />
        </div>

        <div className="mt-[-150px] text-center px-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
    </div>
  );
}