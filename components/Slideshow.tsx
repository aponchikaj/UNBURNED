"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Slideshow({ slides, interval = 5000 }: { slides: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => go(index + 1), interval);
    return () => clearTimeout(id);
  }, [index, paused, interval, go, slides.length]);

  return (
    <section
      className="slideshow"
      aria-roledescription="carousel"
      aria-label="Slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="slideshow__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((src, i) => (
          <div className="slideshow__slide" key={src} aria-hidden={i !== index}>
            <Image src={src} alt="" fill sizes="100vw" priority={i === 0} style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <>
          <button className="slideshow__arrow slideshow__arrow--prev" aria-label="Previous slide" onClick={() => go(index - 1)}>
            ‹
          </button>
          <button className="slideshow__arrow slideshow__arrow--next" aria-label="Next slide" onClick={() => go(index + 1)}>
            ›
          </button>
          <div className="slideshow__dots">
            {slides.map((src, i) => (
              <button
                key={src}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === index}
                className="slideshow__dot"
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
