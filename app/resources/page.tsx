"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileCode, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ResourcesContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")

  const policies = [
    {
      id: "contribution-policy",
      link: "#",
      updated: "2024-03-15",
    },
    {
      id: "license-compliance",
      link: "#",
      updated: "2024-02-20",
    },
    {
      id: "code-of-conduct",
      link: "#",
      updated: "2024-01-10",
    },
    {
      id: "ip-rights-management",
      link: "#",
      updated: "2024-03-05",
    },
  ]

  const processes = [
    {
      id: "contribution-workflow",
      link: "#",
      steps: 5,
    },
    {
      id: "license-review-process",
      link: "#",
      steps: 4,
    },
    {
      id: "project-release-process",
      link: "#",
      steps: 7,
    },
    {
      id: "security-review-process",
      link: "#",
      steps: 6,
    },
  ]

  const cases = [
    {
      id: "cloud-infrastructure-optimization",
      department: "Cloud Infrastructure",
      impact: "High",
      link: "#",
    },
    {
      id: "machine-learning-pipeline",
      department: "Data Science",
      impact: "High",
      link: "#",
    },
    {
      id: "developer-productivity-tools",
      department: "Engineering",
      impact: "Medium",
      link: "#",
    },
    {
      id: "customer-support-dashboard",
      department: "Customer Support",
      impact: "Medium",
      link: "#",
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("resources.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("resources.subtitle")}</p>
      </div>

      <Tabs defaultValue={tab || "policies"} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="policies">
            <FileText className="mr-2 h-4 w-4" />
            {t("resources.policies.title")}
          </TabsTrigger>
          <TabsTrigger value="processes">
            <FileCode className="mr-2 h-4 w-4" />
            {t("resources.processes.title")}
          </TabsTrigger>
          <TabsTrigger value="cases">
            <Award className="mr-2 h-4 w-4" />
            {t("resources.cases.title")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="policies" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {policies.map((policy) => (
              <Card key={policy.id}>
                <CardHeader>
                  <CardTitle>{t(`resources.policies.${policy.id}.title`)}</CardTitle>
                  <CardDescription>{t(`resources.policies.${policy.id}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t("resources.updated")} {policy.updated}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={policy.link}>{t("resources.view-policy")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="processes" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {processes.map((process) => (
              <Card key={process.id}>
                <CardHeader>
                  <CardTitle>{t(`resources.processes.${process.id}.title`)}</CardTitle>
                  <CardDescription>{t(`resources.processes.${process.id}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {process.steps} {t("resources.steps")}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={process.link}>{t("resources.view-process")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cases" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((case_study) => (
              <Card key={case_study.id}>
                <CardHeader>
                  <CardTitle>{t(`resources.cases.${case_study.id}.title`)}</CardTitle>
                  <CardDescription>{t(`resources.cases.${case_study.id}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">
                        <strong>{t("resources.department")}</strong> {case_study.department}
                      </span>
                      <span className="text-sm">
                        <strong>{t("resources.impact")}</strong> {case_study.impact}
                      </span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={case_study.link}>{t("resources.read-case-study")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourcesContent />
    </Suspense>
  )
}