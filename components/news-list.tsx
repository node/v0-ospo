"use client"

import Link from "next/link"
import { ExternalLink, Newspaper } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { latestNews, newsCategoryKey, type NewsCategory } from "@/lib/data/news"

const categoryVariant: Record<NewsCategory, "default" | "success" | "warning" | "info" | "destructive"> = {
  release: "info",
  community: "success",
  policy: "default",
  security: "destructive",
}

interface NewsListProps {
  limit?: number
}

export function NewsList({ limit = 3 }: NewsListProps) {
  const { t } = useLanguage()
  const items = latestNews.slice(0, limit)

  return (
    <section aria-labelledby="latest-news-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 id="latest-news-heading" className="text-2xl font-bold flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-primary" aria-hidden="true" />
          {t("news.title")}
        </h2>
        <span className="text-sm text-muted-foreground">{t("news.subtitle")}</span>
      </div>
      <ul className="divide-y rounded-lg border bg-card">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 hover:bg-muted/40 transition-colors group"
            >
              <div className="flex items-center gap-3 sm:w-44 shrink-0">
                <Badge variant={categoryVariant[item.category]} className="shrink-0">
                  {t(newsCategoryKey[item.category])}
                </Badge>
                <time dateTime={item.date} className="text-xs text-muted-foreground">
                  {item.date}
                </time>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium leading-snug group-hover:text-primary transition-colors">
                  {t(item.titleKey)}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">{t(item.summaryKey)}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
                <span className="hidden sm:inline">{item.source}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
