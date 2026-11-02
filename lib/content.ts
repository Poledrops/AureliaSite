import type { StaticImageData } from "next/image";

import featureGraphic from "@/assets/img/feature-graphic.png";
import heroLogo from "@/assets/img/hero-logo.png";
import boss01 from "@/assets/img/scenes/boss-01.jpg";
import boss02 from "@/assets/img/scenes/boss-02.jpg";
import boss03 from "@/assets/img/scenes/boss-03.jpg";
import boss04 from "@/assets/img/scenes/boss-04.jpg";
import boss05 from "@/assets/img/scenes/boss-05.jpg";
import boss06 from "@/assets/img/scenes/boss-06.jpg";
import boss07 from "@/assets/img/scenes/boss-07.jpg";
import boss08 from "@/assets/img/scenes/boss-08.jpg";
import boss09 from "@/assets/img/scenes/boss-09.jpg";
import boss10 from "@/assets/img/scenes/boss-10.jpg";
import perde01 from "@/assets/img/scenes/perde-01.jpg";
import perde02 from "@/assets/img/scenes/perde-02.jpg";
import perde03 from "@/assets/img/scenes/perde-03.jpg";
import perde04 from "@/assets/img/scenes/perde-04.jpg";
import perde05 from "@/assets/img/scenes/perde-05.jpg";
import perde06 from "@/assets/img/scenes/perde-06.jpg";
import perde07 from "@/assets/img/scenes/perde-07.jpg";
import perde08 from "@/assets/img/scenes/perde-08.jpg";
import perde09 from "@/assets/img/scenes/perde-09.jpg";
import perde10 from "@/assets/img/scenes/perde-10.jpg";
import screenshotBiomes from "@/assets/img/screenshot-biomes.png";
import screenshotBossBattles from "@/assets/img/screenshot-boss-battles.png";
import screenshotForge from "@/assets/img/screenshot-forge.png";
import screenshotMagic from "@/assets/img/screenshot-magic.png";
import screenshotSecretChambers from "@/assets/img/screenshot-secret-chambers.png";
import screenshotStory from "@/assets/img/screenshot-story.png";

export type Feature = {
  title: string;
  body: string;
};

export type GalleryImage = {
  image: StaticImageData;
  alt: string;
  caption: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SectionLink = {
  id: string;
  label: string;
};

export const siteName = "Aurelia: Ashes of Memory";
export const developerName = "Murat Akpınar";
export const contactEmail = "makpinar857@gmail.com";
export const packageName = "com.aurelia.ashesofmemory";
export const storeLabel = "Google Play'de yakında";
export const privacyPath = "/gizlilik-politikasi";

// Order matches the reading order of the home page; the nav and scroll-spy both use it.
export const sectionLinks: readonly SectionLink[] = [
  { id: "hikaye", label: "Hikâye" },
  { id: "ozellikler", label: "Özellikler" },
  { id: "ekran-goruntuleri", label: "Galeri" },
  { id: "perdeler", label: "Perdeler" },
  { id: "bosslar", label: "Bosslar" },
];

export const heroCharacter = {
  image: heroLogo,
  alt: "Aurelia ana karakteri Alden, önden görünüş",
};

export const heroBanner = {
  image: featureGraphic,
  alt: "Aurelia: Ashes of Memory tanıtım görseli: dağ manzarası önünde kahraman ve gölgeli bir figür",
};

export const heroCopy = {
  eyebrow: "2D roguelite aksiyon platformu",
  description:
    "Alden olarak 100 bölümlük kül kaplı bir dünyada ilerle. Her perdenin sonunda bir epik boss seni bekliyor.",
};

export const storeCopy = {
  title: "Yolculuk başlamak üzere",
  body: "Aurelia, Google Play'de yayınlandığında buradan indirilebilecek. Yayına kadar sorularınız için e-posta ile ulaşabilirsiniz.",
};

export const stats: readonly Stat[] = [
  { value: "100", label: "Bölüm" },
  { value: "10", label: "Perde" },
  { value: "10", label: "Epik boss" },
  { value: "4", label: "Dil" },
];

export const features: readonly Feature[] = [
  {
    title: "100 bölüm, 10 perde",
    body: "Her perdenin kendi zemini, dekoru ve atmosferi var. 100. bölümden sonra sonsuz mod açılır.",
  },
  {
    title: "10 epik boss",
    body: "Her perdenin sonunda, savaş öncesi sinematik bir konuşmayla başlayan bir boss savaşı seni bekliyor.",
  },
  {
    title: "Büyüler",
    body: "Ateş Topu, Buz Oku, Yıldırım ve daha fazlası. İki büyü yuvasıyla savaşa hazırlan.",
  },
  {
    title: "Silah Ocağı",
    body: "Silahlarını seviyelendir, dövdür ve güçlendir. Kılıç hattında beş kademe seni bekliyor.",
  },
  {
    title: "Sandıklar ve gizli odalar",
    body: "Demir ve Kadim anahtarlarla açılan ödüller ve keşfedilecek gizli geçitler.",
  },
  {
    title: "Dokunmatik kontroller",
    body: "Mobil için tasarlanmış arayüz. Hasar aldığında telefon kısa süre titrer; istersen bunu kapatabilirsin.",
  },
];

export const storyText =
  "Kahraman Alden, her perdesi bir boss ile biten 100 bölümlük prosedürel bir dünyada savaşır. Silah, büyü ve zırh toplar, seviye atlar ve Kül Kralı Morvane'yi yenerek Elara'yı kurtarmaya çalışır. 100. bölümden sonra sonsuz mod açılır.";

export const storyTags: readonly string[] = ["Alden", "Elara", "Kül Kralı Morvane"];

export const screenshots: readonly GalleryImage[] = [
  {
    image: screenshotBossBattles,
    alt: "Aurelia boss savaşı ekranı",
    caption: "10 epik boss savaşı",
  },
  {
    image: screenshotBiomes,
    alt: "Aurelia bölüm seçim ekranı ve farklı biyomlar",
    caption: "100 zorlu bölüm ve 10 farklı biyom",
  },
  {
    image: screenshotMagic,
    alt: "Aurelia büyü sistemi ekranı",
    caption: "Gelişmiş elemental büyü sistemi",
  },
  {
    image: screenshotForge,
    alt: "Aurelia Silah Ocağı ekranı",
    caption: "Silah Ocağı ve demirhane",
  },
  {
    image: screenshotSecretChambers,
    alt: "Aurelia gizli oda ekranı",
    caption: "Gizli odalar ve sandıklar",
  },
  {
    image: screenshotStory,
    alt: "Aurelia hikâye ekranı",
    caption: "Küllerin arasında bir yemin",
  },
];

// In-game captures of the first level of each act, in act order.
export const biomeScenes: readonly GalleryImage[] = [
  { image: perde01, alt: "Kül Krallığı'nın Kapısı perdesi, oyun içi görüntü", caption: "01 · Kül Krallığı'nın Kapısı" },
  { image: perde02, alt: "Külle Kaplı Ovalar perdesi, oyun içi görüntü", caption: "02 · Külle Kaplı Ovalar" },
  { image: perde03, alt: "Mezarlık Geçidi perdesi, oyun içi görüntü", caption: "03 · Mezarlık Geçidi" },
  { image: perde04, alt: "Kırık Köprüler perdesi, oyun içi görüntü", caption: "04 · Kırık Köprüler" },
  { image: perde05, alt: "Yanan Ormanlar perdesi, oyun içi görüntü", caption: "05 · Yanan Ormanlar" },
  { image: perde06, alt: "Lanetli Kiliseler perdesi, oyun içi görüntü", caption: "06 · Lanetli Kiliseler" },
  { image: perde07, alt: "Kayıp Kütüphane perdesi, oyun içi görüntü", caption: "07 · Kayıp Kütüphane" },
  { image: perde08, alt: "Kül Nehri perdesi, oyun içi görüntü", caption: "08 · Kül Nehri" },
  { image: perde09, alt: "Gökyüzü Kalesi perdesi, oyun içi görüntü", caption: "09 · Gökyüzü Kalesi" },
  { image: perde10, alt: "Kül Sarayı perdesi, oyun içi görüntü", caption: "10 · Kül Sarayı" },
];

// In-game captures of each act boss when it steps out to meet the hero.
export const bossScenes: readonly GalleryImage[] = [
  { image: boss01, alt: "Unutulmuş Şövalye ile karşılaşma, oyun içi görüntü", caption: "Unutulmuş Şövalye" },
  { image: boss02, alt: "Kül Şövalyesi ile karşılaşma, oyun içi görüntü", caption: "Kül Şövalyesi" },
  { image: boss03, alt: "Mezar Şövalyesi ile karşılaşma, oyun içi görüntü", caption: "Mezar Şövalyesi" },
  { image: boss04, alt: "Uçurum Şövalyesi ile karşılaşma, oyun içi görüntü", caption: "Uçurum Şövalyesi" },
  { image: boss05, alt: "Alevli Şövalye ile karşılaşma, oyun içi görüntü", caption: "Alevli Şövalye" },
  { image: boss06, alt: "Lanetli Şövalye ile karşılaşma, oyun içi görüntü", caption: "Lanetli Şövalye" },
  { image: boss07, alt: "Kitap Bekçisi Şövalye ile karşılaşma, oyun içi görüntü", caption: "Kitap Bekçisi Şövalye" },
  { image: boss08, alt: "Nehir Şövalyesi ile karşılaşma, oyun içi görüntü", caption: "Nehir Şövalyesi" },
  { image: boss09, alt: "Göksel Şövalye ile karşılaşma, oyun içi görüntü", caption: "Göksel Şövalye" },
  { image: boss10, alt: "Kül Kralı Morvane ile karşılaşma, oyun içi görüntü", caption: "Kül Kralı Morvane" },
];
