import { FeatureGrid } from "@/components/feature-grid";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { StatsBand } from "@/components/stats-band";
import { Story } from "@/components/story";
import { StoreCta } from "@/components/store-cta";
import { bossScenes, biomeScenes, features, screenshots } from "@/lib/content";

// Reading order: what the game is, what it offers, how it looks, then the acts and their bosses, then where to get it.
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />

      <section id="hikaye" className="section" aria-labelledby="hikaye-title">
        <div className="container">
          <SectionHeading id="hikaye-title" number="01" eyebrow="Dünya" title="Hikâye" />
          <Story />
        </div>
      </section>

      <section id="ozellikler" className="section section-tint" aria-labelledby="ozellikler-title">
        <div className="container">
          <SectionHeading id="ozellikler-title" number="02" eyebrow="Oyun" title="Öne çıkanlar" />
          <FeatureGrid features={features} />
        </div>
      </section>

      <section id="ekran-goruntuleri" className="section" aria-labelledby="galeri-title">
        <div className="container">
          <SectionHeading id="galeri-title" number="03" eyebrow="Galeri" title="Ekran görüntüleri" />
          <Gallery images={screenshots} />
        </div>
      </section>

      <section id="perdeler" className="section section-tint" aria-labelledby="perdeler-title">
        <div className="container">
          <SectionHeading id="perdeler-title" number="04" eyebrow="10 biyom" title="Perdeler" />
          <Gallery images={biomeScenes} />
        </div>
      </section>

      <section id="bosslar" className="section" aria-labelledby="bosslar-title">
        <div className="container">
          <SectionHeading id="bosslar-title" number="05" eyebrow="Karşılaşmalar" title="Bosslar" />
          <Gallery images={bossScenes} />
        </div>
      </section>

      <StoreCta />
    </>
  );
}
