import type { Metadata } from "next";
import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import { readContent } from "@/lib/content";
import { aboutSlides } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "UNBURNED is QUEMMEKH's live show, where music meets theatre and performative arts, with the theatrical dimension created by Guram Matskhonashvili.",
};

export default function AboutPage() {
  const cast = readContent("about-cast.html");

  return (
    <>
      <section className="about-hero">
        <h1 className="about-hero__title" aria-label="UNBURNED">
          <span>UN</span>
          <span>BURN</span>
          <span>ED</span>
        </h1>
        <div className="about-hero__media">
          <Image src="/images/about/hero.jpg" alt="" fill priority sizes="(max-width: 749px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
      </section>

      <section className="about-intro">
        <p>
          UNBURNED IS QUEMMEKH’S LIVE SHOW - AN ARTISTIC PROJECT WHERE MUSIC MEETS THEATRE AND PERFORMATIVE ARTS, WITH
          THE THEATRICAL AND PERFORMATIVE DIMENSION CREATED BY GURAM MATSKHONASHVILI.
        </p>
      </section>

      <Slideshow slides={aboutSlides} />

      <section className="about-credits rte" dangerouslySetInnerHTML={{ __html: cast }} />
    </>
  );
}
