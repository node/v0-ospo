"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const internalProjects = [
    {
      id: "openapi-framework",
      status: "active",
      language: "TypeScript",
      repo: "https://github.com/example/openapi-framework",
      maintainers: ["Alex Chen", "Michael Zhang"],
      stars: 245,
    },
    {
      id: "data-pipeline-toolkit",
      status: "active",
      language: "Python",
      repo: "https://github.com/example/data-pipeline-toolkit",
      maintainers: ["Sarah Johnson", "David Wang"],
      stars: 187,
    },
    {
      id: "ui-component-library",
      status: "maintenance",
      language: "TypeScript",
      repo: "https://github.com/example/ui-components",
      maintainers: ["Emma Liu"],
      stars: 312,
    },
    {
      id: "config-manager",
      status: "incubating",
      language: "Go",
      repo: "https://github.com/example/config-manager",
      maintainers: ["Michael Zhang"],
      stars: 56,
    },
  ]

  const externalProjects = [
    {
      id: "kubernetes",
      repo: "https://github.com/kubernetes/kubernetes",
      contributors: ["Alex Chen", "David Wang"],
    },
    {
      id: "tensorflow",
      repo: "https://github.com/tensorflow/tensorflow",
      contributors: ["Sarah Johnson"],
    },
    {
      id: "react",
      repo: "https://github.com/facebook/react",
      contributors: ["Emma Liu"],
    },
    {
      id: "kafka",
      repo: "https://github.com/apache/kafka",
      contributors: ["Michael Zhang"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500 hover:bg-green-600"
      case "maintenance":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "incubating":
        return "bg-blue-500 hover:bg-blue-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("projects.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("projects.subtitle")}</p>
      </div>

      <Tabs defaultValue="internal" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="internal">{t("projects.internal")}</TabsTrigger>
          <TabsTrigger value="external">{t("projects.external")}</TabsTrigger>
        </TabsList>

        <TabsContent value="internal" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {internalProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{t(`projects.internal.${project.id}.name`)}</CardTitle>
                      <CardDescription>{t(`projects.internal.${project.id}.description`)}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{t(`projects.${project.status}`)}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">{project.language}</span>
                        <span className="text-sm text-muted-foreground">⭐ {project.stars}</span>
                      </div>
                      <Link
                        href={project.repo}
                        className="flex items-center text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        {t("projects.repository")}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">{t("projects.maintainers")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.maintainers.map((maintainer) => (
                          <Badge key={maintainer} variant="outline">
                            {maintainer}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="external" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {externalProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{t(`projects.external.${project.id}.name`)}</CardTitle>
                  <CardDescription>{t(`projects.external.${project.id}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">{t("projects.contribution")}</h4>
                      <p className="text-sm">{t(`projects.external.${project.id}.contribution`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">{t("projects.contributors")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.contributors.map((contributor) => (
                          <Badge key={contributor} variant="outline">
                            {contributor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={project.repo}
                      className="flex items-center text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      {t("projects.repository")}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

