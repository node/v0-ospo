export type NewsCategory = "release" | "community" | "policy" | "security"

export type NewsItem = {
  id: string
  date: string
  category: NewsCategory
  titleKey: string
  summaryKey: string
  source: string
  url: string
}

export const latestNews: NewsItem[] = [
  {
    id: "k8s-release",
    date: "2026-05-28",
    category: "release",
    titleKey: "news.item1.title",
    summaryKey: "news.item1.summary",
    source: "Kubernetes Blog",
    url: "https://kubernetes.io/blog/",
  },
  {
    id: "ospo-survey",
    date: "2026-05-21",
    category: "community",
    titleKey: "news.item2.title",
    summaryKey: "news.item2.summary",
    source: "TODO Group",
    url: "https://todogroup.org/resources/",
  },
  {
    id: "openssf-baseline",
    date: "2026-05-15",
    category: "security",
    titleKey: "news.item3.title",
    summaryKey: "news.item3.summary",
    source: "OpenSSF",
    url: "https://openssf.org/blog/",
  },
  {
    id: "eu-cra",
    date: "2026-05-08",
    category: "policy",
    titleKey: "news.item4.title",
    summaryKey: "news.item4.summary",
    source: "European Commission",
    url: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
  },
]

export const newsCategoryKey: Record<NewsCategory, string> = {
  release: "news.category.release",
  community: "news.category.community",
  policy: "news.category.policy",
  security: "news.category.security",
}
