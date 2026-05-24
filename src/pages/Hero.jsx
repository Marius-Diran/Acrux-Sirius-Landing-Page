const generateStars = (count) =>
  Array.from({ length: count }, () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 8 + Math.random() * 22; // varied drift
    const delay = Math.random() * 6;
    const r = Math.random();
    const sizeKind = r > 0.92 ? "large" : r > 0.72 ? "med" : "small";
    const bright = Math.random() > 0.78;

    return {
      x,
      y,
      duration: Math.round(duration),
      delay: Number(delay.toFixed(2)),
      sizeKind,
      bright,
    };
  });

const nebulaClouds = [
  {
    className: "left-[-12%] top-[8%] h-28 w-28 sm:h-56 sm:w-56 md:h-72 md:w-72",
    color: "var(--color-brand-secondary)",
    mix: 0.25,
    delay: "0s",
    duration: "18s",
  },
  {
    className:
      "right-[-8%] top-[20%] h-36 w-36 sm:h-72 sm:w-72 md:h-96 md:w-96",
    color: "var(--color-brand-nav)",
    mix: 0.18,
    delay: "-6s",
    duration: "24s",
  },
  {
    className:
      "left-[24%] bottom-[-10%] h-52 w-52 sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem]",
    color: "var(--color-text-secondary)",
    mix: 0.12,
    delay: "-10s",
    duration: "28s",
  },
];

import React, { useEffect, useMemo, useState } from "react";

const Hero = () => {
  const [starField, setStarField] = useState(() => generateStars(300));

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const area = Math.max(1, w * h);
      // density: many more stars — one star per ~8k px, clamped
      const count = Math.max(120, Math.min(3000, Math.round(area / 8000)));
      setStarField(generateStars(count));
    };

    calc();
    const onResize = () => {
      // debounce-ish: use rAF to avoid tight loops
      window.requestAnimationFrame(calc);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden z-10 bg-[#090816]">
      <div
        className="fixed inset-0"
        style={{
          zIndex: 0,
          backgroundImage:
            "radial-gradient(circle at top, color-mix(in srgb, var(--color-brand-secondary) 28%, transparent) 0%, radial-gradient(circle at 75% 20%, color-mix(in srgb, var(--color-brand-nav) 18%, transparent) 0%, radial-gradient(circle at 50% 80%, color-mix(in srgb, var(--color-text-secondary) 16%, transparent) 0%, linear-gradient(180deg, #090816 0%, #070712 55%, #04050b 100%))",
        }}
      />

      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {nebulaClouds.map((cloud, index) => (
          <div
            key={index}
            className={`absolute rounded-full blur-3xl mix-blend-screen animate-hero-nebula ${cloud.className}`}
            style={{
              animationDelay: cloud.delay,
              animationDuration: cloud.duration,
              background: `color-mix(in srgb, ${cloud.color} ${cloud.mix * 100}%, transparent)`,
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1.6px)",
            backgroundSize: "auto auto",
          }}
        />

        {starField.map((star, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animation: `slow-drift ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div
              className={`rounded-full animate-hero-star-pulse star-size-${star.sizeKind}`}
              style={{
                background: star.bright
                  ? "var(--color-brand-secondary)"
                  : "color-mix(in srgb, var(--color-brand-secondary) 60%, transparent)",
                boxShadow: star.bright
                  ? "0 0 14px color-mix(in srgb, var(--color-brand-secondary) 96%, transparent), 0 0 28px color-mix(in srgb, var(--color-brand-nav) 45%, transparent)"
                  : "0 0 10px color-mix(in srgb, var(--color-brand-secondary) 70%, transparent)",
                animationDelay: `${star.delay * 0.7}s`,
              }}
            />
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/3 h-24 w-24 sm:h-40 sm:w-full -translate-x-1/2 rounded-full blur-3xl animate-hero-core-pulse"
          style={{
            background:
              "color-mix(in srgb, var(--color-brand-nav) 20%, transparent)",
          }}
        />
        <div className="container mx-auto pt-40 px-6 text-white">
          <h1 className="text-center text-3xl leading-relaxed sm:text-5xl sm:leading-tight">
            The Leading Light{" "}
            <span className="block text-text-secondary">
              of Digital Transformation
            </span>
          </h1>
          <p className="text-center text-lg sm:text-xl mt-6 max-w-2xl mx-auto text-text-muted">
            At Acrux-Sirius Technologies, we don't just build technology — we
            craft the future. Empowering businesses to navigate the digital
            landscape with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
