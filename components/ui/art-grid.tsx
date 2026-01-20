import ArtCard from "./art-card";

export default function ArtGrid() {
  return (
    <div className="w-full max-w-[80%] mx-auto p-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <ArtCard title="T60 Helmet" image="/images/3d_renders/t60_helmet.png" />
        <ArtCard title="Hollow Knight" image="/images/3d_renders/hollow_knight.png" />
        <ArtCard title="Wumpus" image="/images/3d_renders/wumpus.png" />
        <ArtCard title="Pochita" image="/images/3d_renders/pochita.png" />
        <ArtCard title="Inverted Spear of Heaven" image="/images/3d_renders/inverted_spear_of_heaven.png" />
        <ArtCard title="Robotic Kraken" image="/images/3d_renders/robotic_kraken.png" />
        <ArtCard title="Robotic Angler" image="/images/3d_renders/robotic_angler.png" />
        <ArtCard title="Mining Spaceship" image="/images/3d_renders/orion_spaceship.png" />
        <ArtCard title="Red Spacecraft" image="/images/3d_renders/red_spacecraft.png" />
        <ArtCard title="Rattler Drone" image="/images/3d_renders/rattler_drone.png" />
        <ArtCard title="Police Car" image="/images/3d_renders/police_car.png" />
        <ArtCard title="Rolls Royce" image="/images/3d_renders/rolls_royce.png" />
        <ArtCard title="Cryo Gun" image="/images/3d_renders/cryo_gun.png" />
        <ArtCard title="Space Blaster" image="/images/3d_renders/starlord_blaster.png" />
      </div>
    </div>
  );
}