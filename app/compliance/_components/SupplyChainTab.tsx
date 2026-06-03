"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ScoreRing } from "@/components/score-ring"
import { riskDistribution, supplyChainHealth } from "@/lib/data/compliance"

export function SupplyChainTab() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("compliance.supplyChain.title")}</CardTitle>
          <CardDescription>{t("compliance.supplyChain.desc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <ScoreRing value={supplyChainHealth.overall} label={t("compliance.supplyChain.overallHealth")} />
          </div>
          <div className="space-y-4 pt-4">
            {supplyChainHealth.dimensions.map((d) => (
              <div key={d.nameKey} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{t(d.nameKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(d.descKey)}</p>
                  </div>
                  <div className="text-2xl font-bold">{d.score}</div>
                </div>
                <Progress value={d.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("compliance.supplyChain.riskTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {riskDistribution.map((r) => {
              const isLow = r.level === "low"
              const containerClass =
                r.level === "high"
                  ? "border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900"
                  : r.level === "medium"
                    ? "border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900"
                    : ""
              const Icon = isLow ? CheckCircle2 : AlertTriangle
              const iconColor = r.level === "high" ? "text-red-500" : r.level === "medium" ? "text-yellow-500" : "text-green-500"
              const badgeVariant =
                r.level === "high" ? "destructive" : r.level === "medium" ? "warning" : "success"
              return (
                <div key={r.level} className={`flex items-center justify-between p-4 rounded-lg border ${containerClass}`}>
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
                    <div>
                      <div className="font-medium">{t(r.titleKey)}</div>
                      <div className="text-sm text-muted-foreground">{t(r.descKey)}</div>
                    </div>
                  </div>
                  <Badge variant={badgeVariant as "destructive" | "warning" | "success"}>{r.count}</Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
