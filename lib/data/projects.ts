import { siteConfig } from "@/lib/data/site"

const internalRepo = (slug: string) => `${siteConfig.internalGitBase}/${slug}`

export type ProjectStatus = "active" | "incubating" | "maintenance"

export type InternalProject = {
  name: string
  description: string
  status: ProjectStatus
  language: string
  repo: string
  maintainers: string[]
  stars: number
}

export type ExternalContribution = {
  name: string
  description: string
  contribution: string
  repo: string
  contributors: string[]
  prs: number
}

export type PublicProject = {
  name: string
  description: string
  status: ProjectStatus
  language: string
  repo: string
  maintainers: string[]
  stars: number
  forks: number
  license: string
}

export const internalProjects: InternalProject[] = [
  {
    name: "OpenAPI Framework",
    description: "A framework for building and consuming RESTful APIs using OpenAPI specifications",
    status: "active",
    language: "TypeScript",
    repo: internalRepo("openapi-framework"),
    maintainers: ["Alex Chen", "Michael Zhang"],
    stars: 245,
  },
  {
    name: "Data Pipeline Toolkit",
    description: "Tools for building scalable data processing pipelines",
    status: "active",
    language: "Python",
    repo: internalRepo("data-pipeline-toolkit"),
    maintainers: ["Sarah Johnson", "David Wang"],
    stars: 187,
  },
  {
    name: "Config Manager",
    description: "A configuration management library for distributed systems",
    status: "incubating",
    language: "Go",
    repo: internalRepo("config-manager"),
    maintainers: ["Michael Zhang"],
    stars: 56,
  },
]

export const externalContributions: ExternalContribution[] = [
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

export const publicProjects: PublicProject[] = [
  {
    name: "UI Component Library",
    description: "Reusable UI components built with React for modern web applications",
    status: "active",
    language: "TypeScript",
    repo: "https://github.com/ospocc/ui-components",
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
    repo: "https://github.com/ospocc/cloud-sdk",
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
    repo: "https://github.com/ospocc/ml-toolkit",
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
    repo: "https://github.com/ospocc/devops-cli",
    maintainers: ["Michael Zhang"],
    stars: 567,
    forks: 98,
    license: "MIT",
  },
]

export function statusBadgeVariant(status: ProjectStatus): "success" | "warning" | "info" {
  switch (status) {
    case "active":
      return "success"
    case "maintenance":
      return "warning"
    case "incubating":
      return "info"
  }
}
