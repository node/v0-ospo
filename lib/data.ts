// This file contains the data for the application.

export const teamMembers = [
  {
    name: "Alex Chen",
    roleKey: "home.team.director",
    email: "alex.chen@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sarah Johnson",
    roleKey: "home.team.manager",
    email: "sarah.johnson@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Zhang",
    roleKey: "home.team.engineer",
    email: "michael.zhang@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emma Liu",
    roleKey: "home.team.legal",
    email: "emma.liu@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Wang",
    roleKey: "home.team.developer",
    email: "david.wang@example.com",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export const internalLinks = [
  { id: "developer-portal", url: "/projects" },
  { id: "legal-guidelines", url: "/resources" },
  { id: "contribution-workflow", url: "/resources?tab=processes" },
  { id: "training-resources", url: "/capabilities" },
];

export const externalLinks = [
  { id: "github-organization", url: "https://github.com" },
  { id: "open-source-initiative", url: "https://opensource.org" },
  { id: "foss-compliance", url: "https://www.linuxfoundation.org" },
  { id: "innersource-commons", url: "https://innersourcecommons.org" },
];

export const internalProjects = [
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

  export const externalProjects = [
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