"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Building2, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const internalProjects = [
    {
      name: "OpenAPI Framework",
      description: "A framework for building and consuming RESTful APIs using OpenAPI specifications",
      status: "active",
      language: "TypeScript",
      repo: "https://github.internal.com/example/openapi-framework",
      maintainers: ["Alex Chen", "Michael Zhang"],
      stars: 245,
    },
    {
      name: "Data Pipeline Toolkit",
      description: "Tools for building scalable data processing pipelines",
      status: "active",
      language: "Python",
      repo: "https://github.internal.com/example/data-pipeline-toolkit",
      maintainers: ["Sarah Johnson", "David Wang"],
      stars: 187,
    },
    {
      name: "Config Manager",
      description: "A configuration management library for distributed systems",
      status: "incubating",
      language: "Go",
      repo: "https://github.internal.com/example/config-manager",
      maintainers: ["Michael Zhang"],
      stars: 56,
    },
  ]

  const externalContributions = [
    {
      name: "Kubernetes",
      description: "Container orchestration system",
      contribution: "Bug fixes and documentation improvements",
      repo: "https://github.com/kubernetes/kubernetes",
      contributors: ["Alex Chen", "David Wang"],
      prs: 23,
    },
    {
      name: "TensorFlow",
      description: "Machine learning framework",
      contribution: "Added new model optimization features",
      repo: "https://github.com/tensorflow/tensorflow",
      contributors: ["Sarah Johnson"],
      prs: 8,
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      contribution: "Performance improvements and bug fixes",
      repo: "https://github.com/facebook/react",
      contributors: ["Emma Liu"],
      prs: 15,
    },
    {
      name: "Apache Kafka",
      description: "Distributed streaming platform",
      contribution: "New connector implementations",
      repo: "https://github.com/apache/kafka",
      contributors: ["Michael Zhang"],
      prs: 12,
    },
  ]

  const publicProjects = [
    {
      name: "UI Component Library",
      description: "Reusable UI components built with React for modern web applications",
      status: "active",
      language: "TypeScript",
      repo: "https://github.com/company/ui-components",
      maintainers: ["Emma Liu", "Alex Chen"],
      stars: 1245,
      forks: 328,
      license: "MIT",
    },
    {
      name: "Cloud SDK",
      description: "Official SDK for integrating with our cloud services",
      status: "active",
      language: "TypeScript",
      repo: "https://github.com/company/cloud-sdk",
      maintainers: ["David Wang", "Sarah Johnson"],
      stars: 892,
      forks: 156,
      license: "Apache-2.0",
    },
    {
      name: "ML Toolkit",
      description: "Machine learning utilities and pre-trained models",
      status: "active",
      language: "Python",
      repo: "https://github.com/company/ml-toolkit",
      maintainers: ["Sarah Johnson"],
      stars: 2156,
      forks: 489,
      license: "Apache-2.0",
    },
    {
      name: "DevOps CLI",
      description: "Command-line tools for DevOps automation and deployment",
      status: "maintenance",
      language: "Go",
      repo: "https://github.com/company/devops-cli",
      maintainers: ["Michael Zhang"],
      stars: 567,
      forks: 98,
      license: "MIT",
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

        {/* 内部开源项目 */}
        <TabsContent value="internal" className="mt-6">
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{t("projects.internal.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {internalProjects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{t(`projects.${project.status}`)}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{project.language}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <span className="text-yellow-500">★</span> {project.stars}
                        </span>
                      </div>
                      <Link
                        href={project.repo}
                        className="flex items-center text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        {t("projects.repo")}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">{t("projects.maintainers")}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.maintainers.map((maintainer) => (
                          <Badge key={maintainer} variant="secondary">
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

        {/* 参与外部贡献 */}
        <TabsContent value="external" className="mt-6">
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{t("projects.external.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {externalContributions.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">{t("projects.contribution")}:</h4>
                      <p className="text-sm text-muted-foreground">{project.contribution}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-primary">
                        {project.prs} PRs {t("projects.merged")}
                      </Badge>
                      <Link
                        href={project.repo}
                        className="flex items-center text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        {t("projects.repo")}
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">{t("projects.contributors")}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.contributors.map((contributor) => (
                          <Badge key={contributor} variant="secondary">
                            {contributor}
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

        {/* 对外开源项目 */}
        <TabsContent value="public" className="mt-6">
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">{t("projects.public.desc")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {publicProjects.map((project) => (
              <Card key={project.name} className="border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        {project.name}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{t(`projects.${project.status}`)}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{project.language}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.license}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span> {project.stars.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        {project.forks.toLocaleString()} {t("projects.forks")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium mb-2">{t("projects.maintainers")}:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.maintainers.map((maintainer) => (
                            <Badge key={maintainer} variant="secondary">
                              {maintainer}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={project.repo}
                        className="flex items-center text-primary hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        {t("projects.repo")}
                      </Link>
                    </div>
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
