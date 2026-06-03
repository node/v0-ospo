"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { scaTools } from "@/lib/data/compliance"

export function ToolsTab() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("compliance.tools.title")}</CardTitle>
          <CardDescription>{t("compliance.tools.desc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {scaTools.map((tool) => (
              <Card key={tool.name} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{tool.name}</h3>
                        <Badge variant={tool.status === "active" ? "success" : "secondary"}>
                          {t(tool.status === "active" ? "compliance.tools.active" : "compliance.tools.evaluation")}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{t(tool.descKey)}</p>
                    </div>
                    <Link
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${tool.name} website`}
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("compliance.tools.integration")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <IntegrationRow ok labelKey="compliance.tools.cicd" badgeKey="compliance.tools.configured" />
            <IntegrationRow ok labelKey="compliance.tools.repo" badgeKey="compliance.tools.configured" />
            <IntegrationRow ok={false} labelKey="compliance.tools.sbom" badgeKey="compliance.tools.inProgress" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IntegrationRow({ ok, labelKey, badgeKey }: { ok: boolean; labelKey: string; badgeKey: string }) {
  const { t } = useLanguage()
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border">
      <div className="flex items-center gap-3">
        {ok ? (
          <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
        ) : (
          <AlertTriangle className="h-5 w-5 text-yellow-500" aria-hidden="true" />
        )}
        <span>{t(labelKey)}</span>
      </div>
      <Badge variant={ok ? "default" : "secondary"}>{t(badgeKey)}</Badge>
    </div>
  )
}
