export const siteConfig = {
  organization: "OSPO",
  contactEmail: "ospo@ospo.cc",
  githubOrg: "https://github.com/ospocc",
  repoUrl: "https://github.com/ospocc/v0-ospo",
  internalGitBase:
    process.env.NEXT_PUBLIC_INTERNAL_GIT_BASE ?? "https://github.com/ospocc",
  community: "https://ospo.cc",
}

export const externalUrls = {
  github: "https://github.com",
  osi: "https://opensource.org",
  fossCompliance: "https://www.linuxfoundation.org",
  innersource: "https://innersourcecommons.org",
} as const

export const internalUrls = {
  developerPortal: `${siteConfig.community}/developer`,
  legalGuidelines: `${siteConfig.community}/legal`,
  contributionWorkflow: `${siteConfig.community}/contribute`,
  trainingResources: `${siteConfig.community}/training`,
} as const
