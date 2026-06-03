export type HeroSlide = {
  id: string
  src: string
  altKey: string
  titleKey: string
  subtitleKey: string
}

// Unsplash direct image URLs (utm-clean, all CC0). Pinned to specific photo IDs for stability.
const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1920&q=80`

export const heroSlides: HeroSlide[] = [
  {
    id: "collaboration",
    src: unsplash("1531482615713-2afd69097998"), // collaborative team meeting
    altKey: "home.hero.slide1.alt",
    titleKey: "home.hero.slide1.title",
    subtitleKey: "home.hero.slide1.subtitle",
  },
  {
    id: "code",
    src: unsplash("1555066931-4365d14bab8c"), // code on screen
    altKey: "home.hero.slide2.alt",
    titleKey: "home.hero.slide2.title",
    subtitleKey: "home.hero.slide2.subtitle",
  },
  {
    id: "community",
    src: unsplash("1521737604893-d14cc237f11d"), // open community gathering
    altKey: "home.hero.slide3.alt",
    titleKey: "home.hero.slide3.title",
    subtitleKey: "home.hero.slide3.subtitle",
  },
  {
    id: "innovation",
    src: unsplash("1518770660439-4636190af475"), // tech / circuit innovation
    altKey: "home.hero.slide4.alt",
    titleKey: "home.hero.slide4.title",
    subtitleKey: "home.hero.slide4.subtitle",
  },
]
