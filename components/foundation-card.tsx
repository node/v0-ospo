"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import type { FoundationMembership, MembershipStatus } from "@/lib/data/foundations"

const statusVariant: Record<MembershipStatus, "success" | "destructive" | "warning"> = {
  active: "success",
  expired: "destructive",
  pending: "warning",
}

const statusKey: Record<MembershipStatus, string> = {
  active: "foundations.status.active",
  expired: "foundations.status.expired",
  pending: "foundations.status.pending",
}

export function FoundationCard({ item }: { item: FoundationMembership }) {
  const { t } = useLanguage()
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="relative h-12 w-32 shrink-0 bg-muted/30 rounded-md p-1.5">
            <Image
              src={item.logo}
              alt={`${item.shortName} logo`}
              fill
              sizes="128px"
              className="object-contain"
              unoptimized
            />
          </div>
          <Badge variant={statusVariant[item.status]} className="shrink-0">
            {t(statusKey[item.status])}
          </Badge>
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold leading-tight">{item.shortName}</h3>
          <p className="text-xs text-muted-foreground leading-snug">{item.name}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">{t(item.descKey)}</p>

        <div className="flex items-center justify-between pt-2 border-t text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">{t("foundations.level")}:</span>
            <Badge variant="outline">{item.levelKey ? t(item.levelKey) : item.level}</Badge>
          </div>
          <span className="text-xs text-muted-foreground">
            <time dateTime={item.validUntil}>{item.validUntil}</time>
          </span>
        </div>

        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          {t("foundations.visit")}
          <ExternalLink className="h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
