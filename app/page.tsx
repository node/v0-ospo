"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, Eye, CheckCircle, Mail, Building2 } from "lucide-react"
import { teamMembers, obfuscateEmail } from "@/lib/data/team"
import { externalUrls, internalUrls } from "@/lib/data/site"
import { LinkList } from "@/components/link-list"
import { HeroCarousel } from "@/components/hero-carousel"
import { NewsList } from "@/components/news-list"
import { FoundationCard } from "@/components/foundation-card"
import { foundationMemberships } from "@/lib/data/foundations"

export default function Home() {
  const { t } = useLanguage()

  const internalLinks = [
    { labelKey: "home.links.internal.developerPortal", url: internalUrls.developerPortal },
    { labelKey: "home.links.internal.legalGuidelines", url: internalUrls.legalGuidelines },
    { labelKey: "home.links.internal.contributionWorkflow", url: internalUrls.contributionWorkflow },
    { labelKey: "home.links.internal.trainingResources", url: internalUrls.trainingResources },
  ]

  const externalLinks = [
    { labelKey: "home.links.external.github", url: externalUrls.github },
    { labelKey: "home.links.external.osi", url: externalUrls.osi },
    { labelKey: "home.links.external.fossCompliance", url: externalUrls.fossCompliance },
    { labelKey: "home.links.external.innersource", url: externalUrls.innersource },
  ]

  const responsibilities = [
    "home.responsibilities.item1",
    "home.responsibilities.item2",
    "home.responsibilities.item3",
    "home.responsibilities.item4",
    "home.responsibilities.item5",
  ]

  return (
    <div className="space-y-0">
      <HeroCarousel />

      <div className="container py-12 space-y-12">
        {/* Latest open source news — sits right under the hero */}
        <NewsList limit={3} />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card className="h-auto">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t("home.vision.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t("home.vision.content")}</p>
              </CardContent>
            </Card>
            <Card className="h-auto">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t("home.mission.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t("home.mission.content")}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="h-full">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{t("home.responsibilities.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {responsibilities.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">{t("home.team.title")}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {teamMembers.map((member) => (
              <Card key={member.email} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t(member.roleKey)}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <Mail className="h-3 w-3" />
                    <span>{obfuscateEmail(member.email)}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="foundations-heading" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="foundations-heading" className="text-2xl font-bold flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
              {t("foundations.title")}
            </h2>
            <span className="text-sm text-muted-foreground">{t("foundations.subtitle")}</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foundationMemberships.map((item) => (
              <FoundationCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">{t("home.links.title")}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <LinkList titleKey="home.links.internal" items={internalLinks} />
            <LinkList titleKey="home.links.external" items={externalLinks} external />
          </div>
        </section>
      </div>
    </div>
  )
}
