"use client"

import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3, BookOpen, Wrench, Shield } from "lucide-react"
import { MetricsTab } from "./_components/MetricsTab"
import { PolicyTab } from "./_components/PolicyTab"
import { KnowledgeTab } from "./_components/KnowledgeTab"
import { ToolsTab } from "./_components/ToolsTab"
import { SupplyChainTab } from "./_components/SupplyChainTab"
import { overviewMetrics } from "@/lib/data/compliance"

const COMPLIANCE_TABS = ["metrics", "policy", "knowledge", "tools", "supplychain"] as const
type ComplianceTab = (typeof COMPLIANCE_TABS)[number]

const isComplianceTab = (v: string | null): v is ComplianceTab =>
  v !== null && (COMPLIANCE_TABS as readonly string[]).includes(v)

export default function CompliancePage() {
  return (
    <Suspense fallback={<div className="container py-10" />}>
      <ComplianceContent />
    </Suspense>
  )
}

function ComplianceContent() {
  const { t } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabFromUrl = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState<ComplianceTab>(
    isComplianceTab(tabFromUrl) ? tabFromUrl : "metrics",
  )

  useEffect(() => {
    if (isComplianceTab(tabFromUrl) && tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl)
    }
  }, [tabFromUrl, activeTab])

  const handleTabChange = (value: string) => {
    if (!isComplianceTab(value)) return
    setActiveTab(value)
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", value)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("compliance.title")}</h1>
        <p className="text-muted-foreground mt-2">{t("compliance.subtitle")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {overviewMetrics.map((metric) => {
          const isUp = metric.change.startsWith("+")
          const isPositive = (isUp && metric.direction === "up") || (!isUp && metric.direction === "down")
          return (
            <Card key={metric.labelKey}>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-sm text-muted-foreground">{t(metric.labelKey)}</p>
                <Badge variant={isPositive ? "success" : "destructive"} className="mt-2">
                  {metric.change}
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="metrics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.metrics")}</span>
          </TabsTrigger>
          <TabsTrigger value="policy" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.policy")}</span>
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.knowledge")}</span>
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.tools")}</span>
          </TabsTrigger>
          <TabsTrigger value="supplychain" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">{t("compliance.tab.supplyChain")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-6">
          <MetricsTab />
        </TabsContent>
        <TabsContent value="policy" className="space-y-6">
          <PolicyTab />
        </TabsContent>
        <TabsContent value="knowledge" className="space-y-6">
          <KnowledgeTab />
        </TabsContent>
        <TabsContent value="tools" className="space-y-6">
          <ToolsTab />
        </TabsContent>
        <TabsContent value="supplychain" className="space-y-6">
          <SupplyChainTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
