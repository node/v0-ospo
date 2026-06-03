"use client"

import { useLanguage } from "@/components/language-provider"
import { Github } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/data/site"
import { obfuscateEmail } from "@/lib/data/team"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>{t("footer.sourceCode")}</span>
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("footer.contact")}: {obfuscateEmail(siteConfig.contactEmail)}
          </a>
        </div>
      </div>
    </footer>
  )
}
