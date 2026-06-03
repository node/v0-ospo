"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Hash } from "lucide-react"
import { MilestoneTimeline, progressFromMilestones, type Milestone } from "@/components/milestone-timeline"

type Capability = {
  id: string
  titleKey: string
  descKey: string
  milestones: Milestone[]
}

export default function CapabilitiesPage() {
  const { t } = useLanguage()

  const capabilities: Capability[] = [
    {
      id: "governance",
      titleKey: "capabilities.governance.title",
      descKey: "capabilities.governance.desc",
      milestones: [
        { title: t("capabilities.milestone.policyFramework"), status: "completed", date: "2024-01" },
        { title: t("capabilities.milestone.governanceCommittee"), status: "completed", date: "2024-02" },
        { title: t("capabilities.milestone.complianceTooling"), status: "in-progress", date: "2024-05" },
        { title: t("capabilities.milestone.auditProcess"), status: "planned", date: "2024-08" },
      ],
    },
    {
      id: "education",
      titleKey: "capabilities.education.title",
      descKey: "capabilities.education.desc",
      milestones: [
        { title: t("capabilities.milestone.basicTraining"), status: "completed", date: "2024-02" },
        { title: t("capabilities.milestone.advancedWorkshops"), status: "in-progress", date: "2024-04" },
        { title: t("capabilities.milestone.certificationProgram"), status: "planned", date: "2024-07" },
        { title: t("capabilities.milestone.mentorshipProgram"), status: "planned", date: "2024-10" },
      ],
    },
    {
      id: "contribution",
      titleKey: "capabilities.contribution.title",
      descKey: "capabilities.contribution.desc",
      milestones: [
        { title: t("capabilities.milestone.contributionGuidelines"), status: "completed", date: "2024-03" },
        { title: t("capabilities.milestone.projectSelectionFramework"), status: "in-progress", date: "2024-06" },
        { title: t("capabilities.milestone.contributionMetrics"), status: "planned", date: "2024-09" },
        { title: t("capabilities.milestone.communityLeadership"), status: "planned", date: "2025-01" },
      ],
    },
    {
      id: "innersource",
      titleKey: "capabilities.innersource.title",
      descKey: "capabilities.innersource.desc",
      milestones: [
        { title: t("capabilities.milestone.innersourceGuidelines"), status: "completed", date: "2024-03" },
        { title: t("capabilities.milestone.pilotProjects"), status: "in-progress", date: "2024-05" },
        { title: t("capabilities.milestone.toolingInfrastructure"), status: "planned", date: "2024-08" },
        { title: t("capabilities.milestone.organizationRollout"), status: "planned", date: "2024-12" },
      ],
    },
    {
      id: "security",
      titleKey: "capabilities.security.title",
      descKey: "capabilities.security.desc",
      milestones: [
        { title: t("capabilities.milestone.securityScanning"), status: "completed", date: "2024-01" },
        { title: t("capabilities.milestone.licenseCompliance"), status: "completed", date: "2024-02" },
        { title: t("capabilities.milestone.vulnerabilityManagement"), status: "in-progress", date: "2024-04" },
        { title: t("capabilities.milestone.automatedCompliance"), status: "planned", date: "2024-07" },
      ],
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("capabilities.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("capabilities.subtitle")}</p>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Hash className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold">{t("capabilities.nav.title")}</span>
          </div>
          <nav className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5" aria-label={t("capabilities.nav.title")}>
            {capabilities.map((capability) => (
              <a
                key={capability.id}
                href={`#${capability.id}`}
                className="text-sm text-primary hover:underline p-2 rounded hover:bg-background transition-colors"
              >
                {t(capability.titleKey)}
              </a>
            ))}
          </nav>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {capabilities.map((capability) => {
          const progress = progressFromMilestones(capability.milestones)
          return (
            <Card key={capability.id} id={capability.id} className="scroll-mt-20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{t(capability.titleKey)}</CardTitle>
                    <CardDescription>{t(capability.descKey)}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{t("capabilities.progress")}</div>
                    <div className="text-2xl font-bold" aria-label={`${progress}%`}>{progress}%</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={progress} className="h-2" />
                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-3">{t("capabilities.milestones")}</h4>
                  <MilestoneTimeline milestones={capability.milestones} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
