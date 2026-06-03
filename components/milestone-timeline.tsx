"use client"

import { useLanguage } from "@/components/language-provider"
import { type Milestone, type MilestoneStatus, progressFromMilestones } from "@/lib/milestones"

export type { Milestone, MilestoneStatus }
export { progressFromMilestones }

const dotClass: Record<MilestoneStatus, string> = {
  completed: "bg-green-500 border-green-500",
  "in-progress": "bg-yellow-500 border-yellow-500",
  planned: "bg-background border-muted",
}

const statusKey: Record<MilestoneStatus, string> = {
  completed: "capabilities.status.completed",
  "in-progress": "capabilities.status.inProgress",
  planned: "capabilities.status.planned",
}

export function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  const { t } = useLanguage()
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-muted" aria-hidden="true" />
      <ol className="space-y-6 relative">
        {milestones.map((m, index) => (
          <li key={index} className="pl-6 relative">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${dotClass[m.status]}`}
            />
            <div className="flex justify-between">
              <h5 className="font-medium">{m.title}</h5>
              <span className="text-sm text-muted-foreground">{m.date}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t(statusKey[m.status])}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

