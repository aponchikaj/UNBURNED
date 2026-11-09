import Image from "next/image";

export default function HomePage() {
  return (
    <section className="home-hero" aria-label="Slideshow">
      <div className="home-hero__media">
        <Image src="/images/home/hero.jpg" alt="UNBURNED live show crowd" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
}
