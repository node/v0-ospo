"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, GlobeIcon, Menu, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const { setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const navigation: Array<{ name: string; href: string; external?: boolean }> = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.capabilities"), href: "/capabilities" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.governance"), href: "/governance" },
    { name: t("nav.compliance"), href: "/compliance" },
    { name: t("nav.resources"), href: "/resources" },
    { name: t("nav.community"), href: "https://mali.vivo.xyz/group/opensource", external: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2" aria-label="OSPO Home">
            <span className="font-bold text-xl">OSPO</span>
          </Link>
          <nav className="hidden md:flex gap-6" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-current={!item.external && pathname === item.href ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-primary inline-flex items-center gap-1 ${
                  !item.external && pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {item.external && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label={t("header.openMenu")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("header.openMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>{t("header.menu")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-current={!item.external && pathname === item.href ? "page" : undefined}
                    className={`text-sm font-medium transition-colors hover:text-primary inline-flex items-center gap-1 ${
                      !item.external && pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                    {item.external && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("header.toggleLanguage")}>
                <GlobeIcon className="h-5 w-5" />
                <span className="sr-only">{t("header.toggleLanguage")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English {language === "en" && "✓"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("zh")}>中文 {language === "zh" && "✓"}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("header.toggleTheme")}>
                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t("header.toggleTheme")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>{t("header.themeLight")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>{t("header.themeDark")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>{t("header.themeSystem")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
