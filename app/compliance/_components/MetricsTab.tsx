"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { licenseDistribution } from "@/lib/data/compliance"

export function MetricsTab() {
  const { t } = useLanguage()
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("compliance.metrics.distribution")}</CardTitle>
        <CardDescription>{t("compliance.metrics.distributionDesc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {licenseDistribution.map((license) => (
          <div key={license.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {license.name === "__OTHER__" ? t("compliance.metrics.other") : license.name}
                </span>
                {license.status === "allowed" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" aria-label="allowed" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" aria-label="review required" />
                )}
              </div>
              <span className="text-sm text-muted-foreground">
                {license.count} ({license.percentage}%)
              </span>
            </div>
            <Progress value={license.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
