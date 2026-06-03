import { describe, it, expect } from "vitest"
import { obfuscateEmail, teamMembers } from "@/lib/data/team"

describe("obfuscateEmail", () => {
  it("masks @ and last dot", () => {
    expect(obfuscateEmail("alex@ospo.cc")).toBe("alex [at] ospo [dot] cc")
  })
  it("preserves leading sub-domain dots", () => {
    expect(obfuscateEmail("a.b@sub.ospo.cc")).toBe("a.b [at] sub.ospo [dot] cc")
  })
})

describe("teamMembers", () => {
  it("has unique emails", () => {
    const emails = teamMembers.map((m) => m.email)
    expect(new Set(emails).size).toBe(emails.length)
  })
  it("each member has stable avatar URL", () => {
    for (const m of teamMembers) {
      expect(m.avatar.startsWith("https://")).toBe(true)
    }
  })
})
