"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type Language = "en" | "zh"

type TranslationDict = Record<string, string>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  ready: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Lazy-load locale dictionaries; both dicts share key shape so split keeps bundles small.
async function loadDict(lang: Language): Promise<TranslationDict> {
  if (lang === "zh") {
    return (await import("@/lib/i18n/locales/zh.json")).default as TranslationDict
  }
  return (await import("@/lib/i18n/locales/en.json")).default as TranslationDict
}

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "zh"
  const saved = window.localStorage.getItem("language")
  if (saved === "en" || saved === "zh") return saved
  const browser = window.navigator.language.split("-")[0]
  return browser === "zh" ? "zh" : "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh")
  const [dict, setDict] = useState<TranslationDict>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const initial = detectInitialLanguage()
    setLanguageState(initial)
    let cancelled = false
    loadDict(initial).then((d) => {
      if (!cancelled) {
        setDict(d)
        setReady(true)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") window.localStorage.setItem("language", lang)
    loadDict(lang).then((d) => setDict(d))
  }

  const t = (key: string): string => {
    const value = dict[key]
    if (value === undefined) {
      if (process.env.NODE_ENV !== "production" && ready) {
        // eslint-disable-next-line no-console
        console.warn(`[i18n] Missing translation for "${key}" in "${language}"`)
      }
      return key
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, ready }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
