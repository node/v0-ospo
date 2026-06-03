"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export type LinkListItem = {
  labelKey: string
  url: string
}

interface LinkListProps {
  titleKey: string
  items: LinkListItem[]
  external?: boolean
}

export function LinkList({ titleKey, items, external = false }: LinkListProps) {
  const { t } = useLanguage()
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.labelKey}>
              <Link
                href={item.url}
                className="flex items-center text-primary hover:underline"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {t(item.labelKey)}
                {external && <ExternalLink className="ml-1 h-3 w-3" />}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
