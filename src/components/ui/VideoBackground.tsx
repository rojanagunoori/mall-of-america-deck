export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
