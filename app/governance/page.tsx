"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users, GitBranch, Building2, Target, Shield, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { policies, orgStructure, operations } from "@/lib/data/governance"

const POLICY_ICON: Record<string, LucideIcon> = {
  FileText,
  Shield,
  Target,
  Building2,
}

export default function GovernancePage() {
  const { t } = useLanguage()

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
              {policies.map((policy) => {
                const Icon = POLICY_ICON[policy.iconKey] ?? FileText
                return (
                  <Card key={policy.titleKey}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
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
                          {t("governance.updated")}: <time dateTime={policy.updated}>{policy.updated}</time>
                        </span>
                        <Button asChild variant="outline" size="sm">
                          <Link href={policy.link}>{t("governance.view")}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="organization" className="mt-6">
          <div className="space-y-6">
            <p className="text-muted-foreground">{t("governance.org.desc")}</p>

            <div className="grid gap-6">
              {orgStructure.map((org, index) => (
                <Card key={org.roleKey}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle>{t(org.roleKey)}</CardTitle>
                        <CardDescription>{t(org.roleDescKey)}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {org.memberKeys.map((memberKey) => (
                        <span
                          key={memberKey}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {t(memberKey)}
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
                <div className="flex flex-col items-stretch gap-3 max-w-2xl mx-auto">
                  <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center">
                    {t("governance.org.committee")}
                  </div>
                  <div className="mx-auto w-px h-6 bg-border" aria-hidden="true" />
                  <div className="px-6 py-3 bg-primary/80 text-primary-foreground rounded-lg font-semibold text-center">
                    {t("governance.org.ospo")}
                  </div>
                  <div className="mx-auto w-px h-6 bg-border" aria-hidden="true" />
                  <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
                    <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm text-center">
                      {t("governance.org.compliance")}
                    </div>
                    <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm text-center">
                      {t("governance.org.community")}
                    </div>
                    <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm text-center">
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
                        {t(op.frequencyKey)}
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
                      {index < 4 && <div className="hidden md:block w-8 h-px bg-border mx-2" aria-hidden="true" />}
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
