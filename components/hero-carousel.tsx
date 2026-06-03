"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { heroSlides } from "@/lib/data/hero"
import { useLanguage } from "@/components/language-provider"

const AUTOPLAY_MS = 6000

export function HeroCarousel() {
  const { t } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || isPaused) return
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [emblaApi, isPaused])

  return (
    <section
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[400px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label={t("home.hero.carouselLabel")}
    >
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className="relative shrink-0 grow-0 basis-full h-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} / ${heroSlides.length}`}
            >
              <Image
                src={slide.src}
                alt={t(slide.altKey)}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40" aria-hidden="true" />
              <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-4 px-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow">
                  {t(slide.titleKey)}
                </h1>
                <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow">
                  {t(slide.subtitleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label={t("home.hero.prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={t("home.hero.next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`${t("home.hero.goto")} ${i + 1}`}
            aria-current={i === selectedIndex ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${
              i === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
