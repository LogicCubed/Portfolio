import Slideshow from "@/components/ui/slideshow";
import DioramaCarousel from "@/components/ui/diorama-carousel";
import ArtGrid from "@/components/ui/art-grid";

export default function ThreeDWork() {
  return (
    <div className="mb-75">
        <Slideshow
          slides={[
            {
              image: "/images/3d_renders/t60_helmet.png",
            },
            {
              image: "/images/3d_renders/inverted_spear_of_heaven.png",
            },
            {
              image: "/images/3d_renders/pochita.png",
            },
            {
              image: "/images/3d_renders/dragon_diorama.png"
            },
          ]}
        />
        <div className="flex justify-center overflow-hidden my-6">
          <DioramaCarousel />
        </div>

        <div className="w-[80%] h-px bg-slate-600 my-6 mt-5 mb-20 mx-auto"></div>

        <div>
          <ArtGrid />
        </div>
    </div>
  );
}
