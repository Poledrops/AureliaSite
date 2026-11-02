import Image from "next/image";

import { heroBanner, heroCharacter, heroCopy, storeLabel } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-emblem">
          <Image
            src={heroCharacter.image}
            alt={heroCharacter.alt}
            className="hero-logo"
            width={192}
            height={192}
            priority
          />
        </div>

        <p className="eyebrow">{heroCopy.eyebrow}</p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-main gold-text">Aurelia</span>
          <span className="hero-title-sub">Ashes of Memory</span>
        </h1>
        <p className="hero-description">{heroCopy.description}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#hikaye">
            Hikâyeyi keşfet
          </a>
          <span className="btn btn-ghost btn-soon" aria-disabled="true">
            <span className="pulse" aria-hidden="true" />
            {storeLabel}
          </span>
        </div>

        <figure className="banner">
          <Image
            src={heroBanner.image}
            alt={heroBanner.alt}
            sizes="(min-width: 1180px) 1120px, 94vw"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
