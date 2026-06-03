"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

interface ResourceCardProps {
  titleKey: string
  descKey: string
  link: string
  metaText?: string
  badgeKey?: string
  ctaKey?: string
  ctaVariant?: "ghost" | "outline"
  withArrow?: boolean
}

export function ResourceCard({
  titleKey,
  descKey,
  link,
  metaText,
  badgeKey,
  ctaKey = "resources.view",
  ctaVariant = "ghost",
  withArrow = true,
}: ResourceCardProps) {
  const { t } = useLanguage()
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">{t(titleKey)}</CardTitle>
            <CardDescription className="mt-1">{t(descKey)}</CardDescription>
          </div>
          {badgeKey && (
            <Badge variant="secondary" className="shrink-0">
              {t(badgeKey)}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          {metaText ? <span className="text-sm text-muted-foreground">{metaText}</span> : <span />}
          <Button asChild variant={ctaVariant} size="sm">
            <Link href={link} className="flex items-center gap-1">
              {t(ctaKey)}
              {withArrow && <ArrowRight className="h-4 w-4" />}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
