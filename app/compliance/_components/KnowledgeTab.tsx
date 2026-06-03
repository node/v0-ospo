"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const KNOWLEDGE_BASE = [
  {
    categoryKey: "compliance.kb.guides",
    items: [
      { titleKey: "compliance.kb.guide1", type: "PDF" },
      { titleKey: "compliance.kb.guide2", type: "Wiki" },
      { titleKey: "compliance.kb.guide3", type: "PDF" },
    ],
  },
  {
    categoryKey: "compliance.kb.faqs",
    items: [
      { titleKey: "compliance.kb.faq1", type: "Wiki" },
      { titleKey: "compliance.kb.faq2", type: "Wiki" },
      { titleKey: "compliance.kb.faq3", type: "Wiki" },
    ],
  },
  {
    categoryKey: "compliance.kb.training",
    items: [
      { titleKey: "compliance.kb.training1", type: "Video" },
      { titleKey: "compliance.kb.training2", type: "Video" },
      { titleKey: "compliance.kb.training3", type: "Course" },
    ],
  },
]

export function KnowledgeTab() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      {KNOWLEDGE_BASE.map((category) => (
        <Card key={category.categoryKey}>
          <CardHeader>
            <CardTitle>{t(category.categoryKey)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.items.map((item) => (
                <div
                  key={item.titleKey}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <span>{t(item.titleKey)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{item.type}</Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
