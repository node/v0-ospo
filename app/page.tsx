"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { teamMembers, internalLinks, externalLinks } from "@/lib/data"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="container py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("home.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.subtitle")}</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("home.vision.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t("home.vision.content")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("home.mission.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t("home.mission.content")}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("home.responsibilities.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t("home.responsibilities.item1")}</li>
            <li>{t("home.responsibilities.item2")}</li>
            <li>{t("home.responsibilities.item3")}</li>
            <li>{t("home.responsibilities.item4")}</li>
            <li>{t("home.responsibilities.item5")}</li>
          </ul>
        </CardContent>
      </Card>

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
                <p className="text-xs">{member.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{t("home.links.title")}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("home.links.internal")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {internalLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="flex items-center text-primary hover:underline">
                      {t(`home.links.internal.${link.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("home.links.external")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {externalLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="flex items-center text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(`home.links.external.${link.id}`)}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

