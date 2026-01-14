import Slideshow from "@/components/slideshow";
import DioramaCarousel from "@/components/ui/diorama-carousel";

export default function ThreeDWork() {
  return (
    <div className="mb-75">
        <Slideshow
          slides={[
            { image: "/images/3d_renders/dragon_diorama.png" },
            { image: "/images/3d_renders/t60_helmet.png" },
            { image: "/images/3d_renders/offroad_diorama.png" },
          ]}
        />
        <div className="flex justify-center overflow-hidden my-12">
          <DioramaCarousel />
        </div>
        <div className="w-[80%] h-px bg-slate-600 my-6 mt-10 mb-30 mx-auto"></div>
    </div>
  );
}
