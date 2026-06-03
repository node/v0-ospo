import { describe, it, expect } from "vitest"
import { progressFromMilestones, type Milestone } from "@/lib/milestones"

const m = (status: Milestone["status"]): Milestone => ({ title: "x", date: "2024-01", status })

describe("progressFromMilestones", () => {
  it("returns 0 for empty list", () => {
    expect(progressFromMilestones([])).toBe(0)
  })
  it("returns 100 when all completed", () => {
    expect(progressFromMilestones([m("completed"), m("completed")])).toBe(100)
  })
  it("returns 0 when all planned", () => {
    expect(progressFromMilestones([m("planned"), m("planned")])).toBe(0)
  })
  it("counts in-progress as half", () => {
    // 1 completed + 1 in-progress + 2 planned = (1 + 0.5) / 4 = 37.5 -> 38
    expect(progressFromMilestones([m("completed"), m("in-progress"), m("planned"), m("planned")])).toBe(38)
  })
})
