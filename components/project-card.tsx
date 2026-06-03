"use client"

import Link from "next/link"
import { Github, GitFork, Globe, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import {
  type InternalProject,
  type ExternalContribution,
  type PublicProject,
  statusBadgeVariant,
} from "@/lib/data/projects"

function PeopleBadges({ titleKey, people }: { titleKey: string; people: string[] }) {
  const { t } = useLanguage()
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">{t(titleKey)}:</h4>
      <div className="flex flex-wrap gap-2">
        {people.map((p) => (
          <Badge key={p} variant="secondary">
            {p}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function RepoLink({ href }: { href: string }) {
  const { t } = useLanguage()
  return (
    <Link
      href={href}
      className="flex items-center text-primary hover:underline text-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="mr-1 h-4 w-4" />
      {t("projects.repo")}
    </Link>
  )
}

export function InternalProjectCard({ project }: { project: InternalProject }) {
  const { t } = useLanguage()
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </div>
          <Badge variant={statusBadgeVariant(project.status)}>{t(`projects.${project.status}`)}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="outline">{project.language}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <span className="text-yellow-500" aria-hidden="true">★</span>
                <span aria-label="stars">{project.stars}</span>
              </span>
            </div>
            <RepoLink href={project.repo} />
          </div>
          <PeopleBadges titleKey="projects.maintainers" people={project.maintainers} />
        </div>
      </CardContent>
    </Card>
  )
}

export function ExternalContributionCard({ project }: { project: ExternalContribution }) {
  const { t } = useLanguage()
  return (
    <Card>
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
            <RepoLink href={project.repo} />
          </div>
          <PeopleBadges titleKey="projects.contributors" people={project.contributors} />
        </div>
      </CardContent>
    </Card>
  )
}

export function PublicProjectCard({ project }: { project: PublicProject }) {
  const { t } = useLanguage()
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
              {project.name}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </div>
          <Badge variant={statusBadgeVariant(project.status)}>{t(`projects.${project.status}`)}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline">{project.language}</Badge>
            <Badge variant="outline" className="text-xs">
              {project.license}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="text-yellow-500" aria-hidden="true">★</span>
              <span aria-label="stars">{project.stars.toLocaleString()}</span>
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="h-4 w-4" aria-hidden="true" />
              <span>
                {project.forks.toLocaleString()} {t("projects.forks")}
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <PeopleBadges titleKey="projects.maintainers" people={project.maintainers} />
            <RepoLink href={project.repo} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
