"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#MainContent">
        Skip to content
      </a>
      <header className="header">
        <div className="header__row">
          <button
            className="header__burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
          <nav className="header__nav" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header__link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="header__logo" aria-label="UNBURNED">
            <Image src="/images/logo-black.png" alt="UNBURNED" width={24} height={36} priority />
          </Link>
        </div>
      </header>

      <div
        className={`drawer-backdrop${menuOpen ? " is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside aria-label="Menu" className={`drawer drawer--left${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <button className="drawer__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <nav className="drawer__nav" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

    </>
  );
}
