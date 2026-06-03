import { describe, it, expect } from "vitest"
import en from "@/lib/i18n/locales/en.json"
import zh from "@/lib/i18n/locales/zh.json"

describe("i18n parity", () => {
  it("en and zh expose the same key set", () => {
    const enKeys = new Set(Object.keys(en))
    const zhKeys = new Set(Object.keys(zh))
    const missingInZh = [...enKeys].filter((k) => !zhKeys.has(k))
    const missingInEn = [...zhKeys].filter((k) => !enKeys.has(k))
    expect(missingInZh).toEqual([])
    expect(missingInEn).toEqual([])
  })

  it("no locale value is empty", () => {
    for (const [k, v] of Object.entries(en)) {
      expect(v, `en/${k}`).not.toBe("")
    }
    for (const [k, v] of Object.entries(zh)) {
      expect(v, `zh/${k}`).not.toBe("")
    }
  })
})
