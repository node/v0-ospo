import { siteConfig } from "@/lib/data/site"

const policyDocsBase = `${siteConfig.community}/governance`

export type PolicyEntry = {
  iconKey: "FileText" | "Shield" | "Target" | "Building2"
  titleKey: string
  descKey: string
  link: string
  updated: string
}

export const policies: PolicyEntry[] = [
  {
    iconKey: "FileText",
    titleKey: "governance.policy.overall.title",
    descKey: "governance.policy.overall.desc",
    link: `${policyDocsBase}/overall-policy`,
    updated: "2024-03-15",
  },
  {
    iconKey: "Shield",
    titleKey: "governance.policy.contribution.title",
    descKey: "governance.policy.contribution.desc",
    link: `${policyDocsBase}/contribution-policy`,
    updated: "2024-02-20",
  },
  {
    iconKey: "Target",
    titleKey: "governance.policy.usage.title",
    descKey: "governance.policy.usage.desc",
    link: `${policyDocsBase}/usage-policy`,
    updated: "2024-01-10",
  },
  {
    iconKey: "Building2",
    titleKey: "governance.policy.ip.title",
    descKey: "governance.policy.ip.desc",
    link: `${policyDocsBase}/ip-policy`,
    updated: "2024-03-05",
  },
]

export type OrgUnit = {
  roleKey: string
  roleDescKey: string
  memberKeys: string[]
}

export const orgStructure: OrgUnit[] = [
  {
    roleKey: "governance.org.committee",
    roleDescKey: "governance.org.committee.desc",
    memberKeys: [
      "governance.org.member.cto",
      "governance.org.member.legalDirector",
      "governance.org.member.engineeringVp",
      "governance.org.member.securityDirector",
    ],
  },
  {
    roleKey: "governance.org.ospo",
    roleDescKey: "governance.org.ospo.desc",
    memberKeys: [
      "governance.org.member.ospoDirector",
      "governance.org.member.programManager",
      "governance.org.member.complianceLead",
      "governance.org.member.developerAdvocate",
    ],
  },
  {
    roleKey: "governance.org.ambassadors",
    roleDescKey: "governance.org.ambassadors.desc",
    memberKeys: [
      "governance.org.member.engineeringLeads",
      "governance.org.member.techLeads",
      "governance.org.member.seniorDevelopers",
    ],
  },
]

export type OperationEntry = {
  titleKey: string
  descKey: string
  frequencyKey: string
  link: string
}

export const operations: OperationEntry[] = [
  {
    titleKey: "governance.ops.review.title",
    descKey: "governance.ops.review.desc",
    frequencyKey: "governance.ops.review.freq",
    link: `${policyDocsBase}/ops/review`,
  },
  {
    titleKey: "governance.ops.approval.title",
    descKey: "governance.ops.approval.desc",
    frequencyKey: "governance.ops.approval.freq",
    link: `${policyDocsBase}/ops/approval`,
  },
  {
    titleKey: "governance.ops.audit.title",
    descKey: "governance.ops.audit.desc",
    frequencyKey: "governance.ops.audit.freq",
    link: `${policyDocsBase}/ops/audit`,
  },
  {
    titleKey: "governance.ops.report.title",
    descKey: "governance.ops.report.desc",
    frequencyKey: "governance.ops.report.freq",
    link: `${policyDocsBase}/ops/report`,
  },
]
