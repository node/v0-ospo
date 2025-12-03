"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCode, Award, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  const { t } = useLanguage()

  const processes = [
    {
      titleKey: "resources.process.contribution.title",
      descKey: "resources.process.contribution.desc",
      link: "#",
      steps: 5,
    },
    {
      titleKey: "resources.process.license.title",
      descKey: "resources.process.license.desc",
      link: "#",
      steps: 4,
    },
    {
      titleKey: "resources.process.release.title",
      descKey: "resources.process.release.desc",
      link: "#",
      steps: 7,
    },
    {
      titleKey: "resources.process.security.title",
      descKey: "resources.process.security.desc",
      link: "#",
      steps: 6,
    },
    {
      titleKey: "resources.process.request.title",
      descKey: "resources.process.request.desc",
      link: "#",
      steps: 4,
    },
    {
      titleKey: "resources.process.incident.title",
      descKey: "resources.process.incident.desc",
      link: "#",
      steps: 5,
    },
  ]

  const guides = [
    {
      titleKey: "resources.guide.quickstart.title",
      descKey: "resources.guide.quickstart.desc",
      link: "#",
      type: "guide",
    },
    {
      titleKey: "resources.guide.bestpractice.title",
      descKey: "resources.guide.bestpractice.desc",
      link: "#",
      type: "guide",
    },
    {
      titleKey: "resources.guide.community.title",
      descKey: "resources.guide.community.desc",
      link: "#",
      type: "guide",
    },
    {
      titleKey: "resources.guide.cla.title",
      descKey: "resources.guide.cla.desc",
      link: "#",
      type: "template",
    },
  ]

  const cases = [
    {
      titleKey: "resources.case.cloud.title",
      descKey: "resources.case.cloud.desc",
      department: "Cloud Infrastructure",
      departmentKey: "resources.case.dept.cloud",
      impact: "High",
      impactKey: "resources.case.impact.high",
      metrics: "35%",
      metricsLabel: "resources.case.cloud.metric",
      link: "#",
    },
    {
      titleKey: "resources.case.ml.title",
      descKey: "resources.case.ml.desc",
      department: "Data Science",
      departmentKey: "resources.case.dept.data",
      impact: "High",
      impactKey: "resources.case.impact.high",
      metrics: "60%",
      metricsLabel: "resources.case.ml.metric",
      link: "#",
    },
    {
      titleKey: "resources.case.devtools.title",
      descKey: "resources.case.devtools.desc",
      department: "Engineering",
      departmentKey: "resources.case.dept.eng",
      impact: "Medium",
      impactKey: "resources.case.impact.medium",
      metrics: "25%",
      metricsLabel: "resources.case.devtools.metric",
      link: "#",
    },
    {
      titleKey: "resources.case.support.title",
      descKey: "resources.case.support.desc",
      department: "Customer Support",
      departmentKey: "resources.case.dept.support",
      impact: "Medium",
      impactKey: "resources.case.impact.medium",
      metrics: "40%",
      metricsLabel: "resources.case.support.metric",
      link: "#",
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("resources.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("resources.subtitle")}</p>
      </div>

      <Tabs defaultValue="processes" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="processes">
            <FileCode className="mr-2 h-4 w-4" />
            {t("resources.processes.title")}
          </TabsTrigger>
          <TabsTrigger value="cases">
            <Award className="mr-2 h-4 w-4" />
            {t("resources.cases.title")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="processes" className="mt-6">
          <div className="space-y-8">
            {/* Processes Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("resources.processes.section")}</h2>
              <p className="text-muted-foreground">{t("resources.processes.desc")}</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {processes.map((process) => (
                  <Card key={process.titleKey} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{t(process.titleKey)}</CardTitle>
                      <CardDescription>{t(process.descKey)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {process.steps} {t("resources.steps")}
                        </span>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={process.link} className="flex items-center gap-1">
                            {t("resources.view")}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Guides Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("resources.guides.section")}</h2>
              <p className="text-muted-foreground">{t("resources.guides.desc")}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {guides.map((guide) => (
                  <Card key={guide.titleKey} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{t(guide.titleKey)}</CardTitle>
                          <CardDescription className="mt-1">{t(guide.descKey)}</CardDescription>
                        </div>
                        <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                          {t(`resources.type.${guide.type}`)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={guide.link}>{t("resources.download")}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cases" className="mt-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">{t("resources.cases.desc")}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {cases.map((caseStudy) => (
                <Card key={caseStudy.titleKey} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{t(caseStudy.titleKey)}</CardTitle>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          caseStudy.impact === "High"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {t(caseStudy.impactKey)}
                      </span>
                    </div>
                    <CardDescription>{t(caseStudy.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{t("resources.case.department")}:</span>
                        <span>{t(caseStudy.departmentKey)}</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <div>
                          <span className="text-2xl font-bold text-primary">{caseStudy.metrics}</span>
                          <span className="text-sm text-muted-foreground ml-2">{t(caseStudy.metricsLabel)}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={caseStudy.link}>{t("resources.case.readmore")}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
