"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CapabilitiesPage() {
  const { t } = useLanguage()

  const capabilities = [
    {
      id: "governance",
      progress: 85,
      milestones: [
        { id: "policy-framework", status: "completed", date: "2024-01" },
        { id: "governance-committee", status: "completed", date: "2024-02" },
        { id: "compliance-tooling", status: "in-progress", date: "2024-05" },
        { id: "audit-process", status: "planned", date: "2024-08" },
      ],
    },
    {
      id: "education",
      progress: 60,
      milestones: [
        { id: "basic-training", status: "completed", date: "2024-02" },
        { id: "advanced-workshops", status: "in-progress", date: "2024-04" },
        { id: "certification-program", status: "planned", date: "2024-07" },
        { id: "mentorship-program", status: "planned", date: "2024-10" },
      ],
    },
    {
      id: "contribution",
      progress: 40,
      milestones: [
        { id: "contribution-guidelines", status: "completed", date: "2024-03" },
        { id: "project-selection-framework", status: "in-progress", date: "2024-06" },
        { id: "contribution-metrics", status: "planned", date: "2024-09" },
        { id: "community-leadership", status: "planned", date: "2025-01" },
      ],
    },
    {
      id: "innersource",
      progress: 30,
      milestones: [
        { id: "innersource-guidelines", status: "completed", date: "2024-03" },
        { id: "pilot-projects", status: "in-progress", date: "2024-05" },
        { id: "tooling-infrastructure", status: "planned", date: "2024-08" },
        { id: "organization-wide-rollout", status: "planned", date: "2024-12" },
      ],
    },
    {
      id: "security",
      progress: 70,
      milestones: [
        { id: "security-scanning", status: "completed", date: "2024-01" },
        { id: "license-compliance", status: "completed", date: "2024-02" },
        { id: "vulnerability-management", status: "in-progress", date: "2024-04" },
        { id: "automated-compliance", status: "planned", date: "2024-07" },
      ],
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("capabilities.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("capabilities.subtitle")}</p>
      </div>

      <div className="grid gap-6">
        {capabilities.map((capability) => (
          <Card key={capability.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{t(`capabilities.${capability.id}.title`)}</CardTitle>
                  <CardDescription>{t(`capabilities.${capability.id}.description`)}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{t("capabilities.progress")}</div>
                  <div className="text-2xl font-bold">{capability.progress}%</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={capability.progress} className="h-2" />

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-3">{t("capabilities.milestones")}</h4>
                <div className="relative">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-muted"></div>
                  <div className="space-y-6 relative">
                    {capability.milestones.map((milestone, index) => (
                      <div key={index} className="pl-6 relative">
                        <div
                          className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
                            milestone.status === "completed"
                              ? "bg-green-500 border-green-500"
                              : milestone.status === "in-progress"
                                ? "bg-yellow-500 border-yellow-500"
                                : "bg-background border-muted"
                          }`}
                        ></div>
                        <div className="flex justify-between">
                          <h5 className="font-medium">
                            {t(`capabilities.${capability.id}.milestones.${milestone.id}`)}
                          </h5>
                          <span className="text-sm text-muted-foreground">{milestone.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground capitalize">
                          {t(`capabilities.status.${milestone.status}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

