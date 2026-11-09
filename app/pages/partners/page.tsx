import type { Metadata } from "next";
import Image from "next/image";
import { partners } from "@/lib/site";

export const metadata: Metadata = {
  title: "PARTNERS",
  description: "The partners and supporters behind UNBURNED.",
};

export default function PartnersPage() {
  return (
    <section className="partners">
      <h2 className="partners__title">Our Partners</h2>
      <ul className="partners__grid">
        {partners.map((p) => (
          <li key={p.href}>
            <a className="partners__card" href={p.href} target="_blank" rel="noreferrer" aria-label={p.name}>
              <span className="partners__logo">
                <Image src={p.src} alt={p.name} fill sizes="(max-width: 749px) 45vw, 245px" style={{ objectFit: "contain" }} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
