"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users, GitBranch, Building2, Target, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GovernancePage() {
  const { t } = useLanguage()

  const policies = [
    {
      icon: FileText,
      titleKey: "governance.policy.overall.title",
      descKey: "governance.policy.overall.desc",
      link: "#",
      updated: "2024-03-15",
    },
    {
      icon: Shield,
      titleKey: "governance.policy.contribution.title",
      descKey: "governance.policy.contribution.desc",
      link: "#",
      updated: "2024-02-20",
    },
    {
      icon: Target,
      titleKey: "governance.policy.usage.title",
      descKey: "governance.policy.usage.desc",
      link: "#",
      updated: "2024-01-10",
    },
    {
      icon: Building2,
      titleKey: "governance.policy.ip.title",
      descKey: "governance.policy.ip.desc",
      link: "#",
      updated: "2024-03-05",
    },
  ]

  const orgStructure = [
    {
      role: "governance.org.committee",
      roleDesc: "governance.org.committee.desc",
      members: ["CTO", "Legal Director", "Engineering VP", "Security Director"],
    },
    {
      role: "governance.org.ospo",
      roleDesc: "governance.org.ospo.desc",
      members: ["OSPO Director", "Program Manager", "Compliance Lead", "Developer Advocate"],
    },
    {
      role: "governance.org.ambassadors",
      roleDesc: "governance.org.ambassadors.desc",
      members: ["Engineering Leads", "Tech Leads", "Senior Developers"],
    },
  ]

  const operations = [
    {
      titleKey: "governance.ops.review.title",
      descKey: "governance.ops.review.desc",
      frequency: "governance.ops.review.freq",
      link: "#",
    },
    {
      titleKey: "governance.ops.approval.title",
      descKey: "governance.ops.approval.desc",
      frequency: "governance.ops.approval.freq",
      link: "#",
    },
    {
      titleKey: "governance.ops.audit.title",
      descKey: "governance.ops.audit.desc",
      frequency: "governance.ops.audit.freq",
      link: "#",
    },
    {
      titleKey: "governance.ops.report.title",
      descKey: "governance.ops.report.desc",
      frequency: "governance.ops.report.freq",
      link: "#",
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("governance.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("governance.subtitle")}</p>
      </div>

      <Tabs defaultValue="policies" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="policies">
            <FileText className="mr-2 h-4 w-4" />
            {t("governance.tab.policies")}
          </TabsTrigger>
          <TabsTrigger value="organization">
            <Users className="mr-2 h-4 w-4" />
            {t("governance.tab.organization")}
          </TabsTrigger>
          <TabsTrigger value="operations">
            <GitBranch className="mr-2 h-4 w-4" />
            {t("governance.tab.operations")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="policies" className="mt-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">{t("governance.policies.desc")}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {policies.map((policy) => (
                <Card key={policy.titleKey}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <policy.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{t(policy.titleKey)}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-2">{t(policy.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {t("governance.updated")}: {policy.updated}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link href={policy.link}>{t("governance.view")}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="organization" className="mt-6">
          <div className="space-y-6">
            <p className="text-muted-foreground">{t("governance.org.desc")}</p>

            <div className="grid gap-6">
              {orgStructure.map((org, index) => (
                <Card key={org.role}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle>{t(org.role)}</CardTitle>
                        <CardDescription>{t(org.roleDesc)}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {org.members.map((member) => (
                        <span
                          key={member}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t("governance.org.chart.title")}</CardTitle>
                <CardDescription>{t("governance.org.chart.desc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
                    {t("governance.org.committee")}
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="px-6 py-3 bg-primary/80 text-primary-foreground rounded-lg font-semibold">
                    {t("governance.org.ospo")}
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="flex gap-4 flex-wrap justify-center">
                    <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm">
                      {t("governance.org.compliance")}
                    </div>
                    <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm">
                      {t("governance.org.community")}
                    </div>
                    <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm">
                      {t("governance.org.engineering")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="mt-6">
          <div className="space-y-6">
            <p className="text-muted-foreground">{t("governance.ops.desc")}</p>

            <div className="grid gap-6 md:grid-cols-2">
              {operations.map((op) => (
                <Card key={op.titleKey}>
                  <CardHeader>
                    <CardTitle>{t(op.titleKey)}</CardTitle>
                    <CardDescription>{t(op.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {t(op.frequency)}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link href={op.link}>{t("governance.details")}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t("governance.ops.workflow.title")}</CardTitle>
                <CardDescription>{t("governance.ops.workflow.desc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[1, 2, 3, 4, 5].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {step}
                        </div>
                        <span className="mt-2 text-sm text-center">{t(`governance.ops.step${step}`)}</span>
                      </div>
                      {index < 4 && <div className="hidden md:block w-8 h-px bg-border mx-2" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
