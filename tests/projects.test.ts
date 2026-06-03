import { describe, it, expect } from "vitest"
import { statusBadgeVariant, internalProjects, publicProjects } from "@/lib/data/projects"

describe("projects data", () => {
  it("statusBadgeVariant maps each status", () => {
    expect(statusBadgeVariant("active")).toBe("success")
    expect(statusBadgeVariant("maintenance")).toBe("warning")
    expect(statusBadgeVariant("incubating")).toBe("info")
  })

  it("internal projects use the internal git base", () => {
    for (const p of internalProjects) {
      expect(p.repo).toMatch(/^https?:\/\//)
    }
  })

  it("public projects have license and forks > 0", () => {
    for (const p of publicProjects) {
      expect(p.license.length).toBeGreaterThan(0)
      expect(p.forks).toBeGreaterThan(0)
    }
  })
})
