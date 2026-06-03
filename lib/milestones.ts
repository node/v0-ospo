export type MilestoneStatus = "completed" | "in-progress" | "planned"

export type Milestone = {
  title: string
  status: MilestoneStatus
  date: string
}

export function progressFromMilestones(milestones: Milestone[]): number {
  if (milestones.length === 0) return 0
  const weight = (s: MilestoneStatus) => (s === "completed" ? 1 : s === "in-progress" ? 0.5 : 0)
  const sum = milestones.reduce((acc, m) => acc + weight(m.status), 0)
  return Math.round((sum / milestones.length) * 100)
}
