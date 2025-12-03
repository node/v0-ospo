"use client"

import { useLanguage } from "@/components/language-provider"
import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/ospocc/v0-ospo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>{t("footer.sourceCode")}</span>
          </Link>
          <p className="text-sm text-muted-foreground">{t("footer.contact")}: ospo@example.com</p>
        </div>
      </div>
    </footer>
  )
}
