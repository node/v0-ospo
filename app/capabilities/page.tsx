"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CapabilitiesPage() {
  const { t } = useLanguage()

  const capabilities = [
    {
      id: "governance",
      title: "Open Source Governance",
      description: "Establishing policies, processes, and guidelines for open source usage and contribution",
      progress: 85,
      milestones: [
        { title: "Policy Framework", status: "completed", date: "2024-01" },
        { title: "Governance Committee", status: "completed", date: "2024-02" },
        { title: "Compliance Tooling", status: "in-progress", date: "2024-05" },
        { title: "Audit Process", status: "planned", date: "2024-08" },
      ],
    },
    {
      id: "education",
      title: "Developer Education",
      description: "Training and resources for developers on open source best practices",
      progress: 60,
      milestones: [
        { title: "Basic Training", status: "completed", date: "2024-02" },
        { title: "Advanced Workshops", status: "in-progress", date: "2024-04" },
        { title: "Certification Program", status: "planned", date: "2024-07" },
        { title: "Mentorship Program", status: "planned", date: "2024-10" },
      ],
    },
    {
      id: "contribution",
      title: "Contribution Strategy",
      description: "Strategic approach to contributing to external open source projects",
      progress: 40,
      milestones: [
        { title: "Contribution Guidelines", status: "completed", date: "2024-03" },
        { title: "Project Selection Framework", status: "in-progress", date: "2024-06" },
        { title: "Contribution Metrics", status: "planned", date: "2024-09" },
        { title: "Community Leadership", status: "planned", date: "2025-01" },
      ],
    },
    {
      id: "innersource",
      title: "InnerSource Program",
      description: "Applying open source principles to internal development",
      progress: 30,
      milestones: [
        { title: "InnerSource Guidelines", status: "completed", date: "2024-03" },
        { title: "Pilot Projects", status: "in-progress", date: "2024-05" },
        { title: "Tooling & Infrastructure", status: "planned", date: "2024-08" },
        { title: "Organization-wide Rollout", status: "planned", date: "2024-12" },
      ],
    },
    {
      id: "security",
      title: "Security & Compliance",
      description: "Ensuring security and legal compliance in open source usage",
      progress: 70,
      milestones: [
        { title: "Security Scanning", status: "completed", date: "2024-01" },
        { title: "License Compliance", status: "completed", date: "2024-02" },
        { title: "Vulnerability Management", status: "in-progress", date: "2024-04" },
        { title: "Automated Compliance", status: "planned", date: "2024-07" },
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
                  <CardTitle>{capability.title}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
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
                <h4 className="text-sm font-medium mb-3">Milestones</h4>
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
                          <h5 className="font-medium">{milestone.title}</h5>
                          <span className="text-sm text-muted-foreground">{milestone.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground capitalize">{milestone.status.replace("-", " ")}</p>
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
