import Slideshow from "@/components/slideshow";

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
    </div>
  );
}
