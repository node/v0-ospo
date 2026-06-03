"use client"

import { Suspense, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCode, Award, CheckCircle2, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ResourceCard } from "@/components/resource-card"
import { processes, guides, cases } from "@/lib/data/resources"

const RESOURCE_TABS = ["processes", "cases"] as const
type ResourceTab = (typeof RESOURCE_TABS)[number]
const isResourceTab = (v: string | null): v is ResourceTab =>
  v !== null && (RESOURCE_TABS as readonly string[]).includes(v)

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="container py-8" />}>
      <ResourcesContent />
    </Suspense>
  )
}

function ResourcesContent() {
  const { t } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")
  const activeTab: ResourceTab = isResourceTab(tab) ? tab : "processes"
  const [query, setQuery] = useState("")

  const handleTabChange = (value: string) => {
    if (!isResourceTab(value)) return
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", value)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const matches = (titleKey: string, descKey: string) => {
    if (!query.trim()) return true
    const q = query.trim().toLowerCase()
    return [t(titleKey), t(descKey)].some((s) => s.toLowerCase().includes(q))
  }

  const filteredProcesses = useMemo(
    () => processes.filter((p) => matches(p.titleKey, p.descKey)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query],
  )
  const filteredGuides = useMemo(
    () => guides.filter((g) => matches(g.titleKey, g.descKey)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query],
  )
  const filteredCases = useMemo(
    () => cases.filter((c) => matches(c.titleKey, c.descKey)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query],
  )

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("resources.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("resources.subtitle")}</p>
      </div>

      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <Input
          type="search"
          aria-label={t("resources.searchPlaceholder")}
          placeholder={t("resources.searchPlaceholder")}
          className="pl-9"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("resources.processes.section")}</h2>
              <p className="text-muted-foreground">{t("resources.processes.desc")}</p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProcesses.map((p) => (
                  <ResourceCard
                    key={p.titleKey}
                    titleKey={p.titleKey}
                    descKey={p.descKey}
                    link={p.link}
                    metaText={`${p.steps} ${t("resources.steps")}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("resources.guides.section")}</h2>
              <p className="text-muted-foreground">{t("resources.guides.desc")}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {filteredGuides.map((g) => (
                  <ResourceCard
                    key={g.titleKey}
                    titleKey={g.titleKey}
                    descKey={g.descKey}
                    link={g.link}
                    badgeKey={`resources.type.${g.type}`}
                    ctaKey="resources.download"
                    ctaVariant="outline"
                    withArrow={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cases" className="mt-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">{t("resources.cases.desc")}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredCases.map((c) => (
                <Card key={c.titleKey} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-lg">{t(c.titleKey)}</CardTitle>
                      <Badge variant={c.impact === "High" ? "success" : "info"} className="shrink-0">
                        {t(c.impactKey)}
                      </Badge>
                    </div>
                    <CardDescription>{t(c.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{t("resources.case.department")}:</span>
                        <span>{t(c.departmentKey)}</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                        <div>
                          <span className="text-2xl font-bold text-primary">{c.metrics}</span>
                          <span className="text-sm text-muted-foreground ml-2">{t(c.metricsLabel)}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={c.link}>{t("resources.case.readmore")}</Link>
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
