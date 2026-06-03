"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { complianceContacts } from "@/lib/data/compliance"
import { obfuscateEmail } from "@/lib/data/team"

const POLICY_KEYS = [
  { titleKey: "compliance.policy.license.title", descKey: "compliance.policy.license.desc" },
  { titleKey: "compliance.policy.review.title", descKey: "compliance.policy.review.desc" },
  { titleKey: "compliance.policy.contacts.title", descKey: "compliance.policy.contacts.desc" },
] as const

export function PolicyTab() {
  const { t } = useLanguage()
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("compliance.policy.overview")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {POLICY_KEYS.map((p) => (
            <div key={p.titleKey} className="space-y-2">
              <h3 className="font-semibold text-lg">{t(p.titleKey)}</h3>
              <p className="text-muted-foreground">{t(p.descKey)}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("compliance.contacts.title")}</CardTitle>
          <CardDescription>{t("compliance.contacts.desc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {complianceContacts.map((c) => (
              <Card key={c.email}>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t(c.nameKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(c.roleKey)}</p>
                    <a className="flex items-center gap-2 text-sm hover:underline" href={`mailto:${c.email}`}>
                      <Mail className="h-4 w-4" />
                      <span>{obfuscateEmail(c.email)}</span>
                    </a>
                    <a className="flex items-center gap-2 text-sm hover:underline" href={`tel:${c.phone.replace(/\s/g, "")}`}>
                      <Phone className="h-4 w-4" />
                      <span>{c.phone}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
