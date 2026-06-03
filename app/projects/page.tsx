"use client"

import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Users, Globe } from "lucide-react"
import {
  internalProjects,
  externalContributions,
  publicProjects,
} from "@/lib/data/projects"
import {
  InternalProjectCard,
  ExternalContributionCard,
  PublicProjectCard,
} from "@/components/project-card"

const PROJECT_TABS = ["internal", "external", "public"] as const
type ProjectTab = (typeof PROJECT_TABS)[number]

function isProjectTab(value: string | null): value is ProjectTab {
  return value !== null && (PROJECT_TABS as readonly string[]).includes(value)
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="container py-8" />}>
      <ProjectsContent />
    </Suspense>
  )
}

function ProjectsContent() {
  const { t } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")
  const activeTab: ProjectTab = isProjectTab(tab) ? tab : "internal"

  const handleTabChange = (value: string) => {
    if (!isProjectTab(value)) return
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", value)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("projects.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("projects.subtitle")}</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="internal" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("projects.internal")}</span>
          </TabsTrigger>
          <TabsTrigger value="external" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">{t("projects.external")}</span>
          </TabsTrigger>
          <TabsTrigger value="public" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{t("projects.public")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="internal" className="mt-6">
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{t("projects.internal.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {internalProjects.map((project) => (
              <InternalProjectCard key={project.name} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="external" className="mt-6">
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{t("projects.external.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {externalContributions.map((project) => (
              <ExternalContributionCard key={project.name} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="public" className="mt-6">
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{t("projects.public.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {publicProjects.map((project) => (
              <PublicProjectCard key={project.name} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
