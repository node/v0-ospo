export type LicenseStatus = "allowed" | "review"

export type LicenseEntry = {
  name: string
  count: number
  percentage: number
  status: LicenseStatus
}

export type MetricDirection = "up" | "down"

export type MetricItem = {
  labelKey: string
  value: number | string
  change: string
  direction: MetricDirection
}

export const overviewMetrics: MetricItem[] = [
  { labelKey: "compliance.metrics.scanned", value: 1247, change: "+12%", direction: "up" },
  { labelKey: "compliance.metrics.compliant", value: 1198, change: "+8%", direction: "up" },
  { labelKey: "compliance.metrics.issues", value: 49, change: "-15%", direction: "down" },
  { labelKey: "compliance.metrics.rate", value: "96.1%", change: "+2.3%", direction: "up" },
]

export const licenseDistribution: LicenseEntry[] = [
  { name: "MIT", count: 456, percentage: 38, status: "allowed" },
  { name: "Apache-2.0", count: 324, percentage: 27, status: "allowed" },
  { name: "BSD-3-Clause", count: 198, percentage: 16, status: "allowed" },
  { name: "GPL-3.0", count: 89, percentage: 7, status: "review" },
  { name: "LGPL-2.1", count: 67, percentage: 6, status: "review" },
  { name: "__OTHER__", count: 64, percentage: 5, status: "review" },
]

export type ScaTool = {
  name: string
  descKey: string
  status: "active" | "evaluation"
  url: string
}

export const scaTools: ScaTool[] = [
  { name: "Black Duck", descKey: "compliance.tools.blackduck", status: "active", url: "https://www.blackduck.com/" },
  { name: "Snyk", descKey: "compliance.tools.snyk", status: "active", url: "https://snyk.io/" },
  { name: "FOSSA", descKey: "compliance.tools.fossa", status: "active", url: "https://fossa.com/" },
  { name: "WhiteSource", descKey: "compliance.tools.whitesource", status: "evaluation", url: "https://www.mend.io/" },
]

export type ContactInfo = {
  nameKey: string
  roleKey: string
  email: string
  phone: string
}

export const complianceContacts: ContactInfo[] = [
  {
    nameKey: "compliance.contacts.lead",
    roleKey: "compliance.contacts.leadRole",
    email: "compliance-lead@ospo.cc",
    phone: "+86 400-000-0001",
  },
  {
    nameKey: "compliance.contacts.legal",
    roleKey: "compliance.contacts.legalRole",
    email: "legal@ospo.cc",
    phone: "+86 400-000-0002",
  },
]

export type SupplyChainDimension = {
  nameKey: string
  descKey: string
  score: number
}

export const supplyChainHealth = {
  overall: 82,
  dimensions: [
    { nameKey: "compliance.supplyChain.security", descKey: "compliance.supplyChain.securityDesc", score: 85 },
    { nameKey: "compliance.supplyChain.maintenance", descKey: "compliance.supplyChain.maintenanceDesc", score: 78 },
    { nameKey: "compliance.supplyChain.community", descKey: "compliance.supplyChain.communityDesc", score: 88 },
    { nameKey: "compliance.supplyChain.license", descKey: "compliance.supplyChain.licenseDesc", score: 92 },
    { nameKey: "compliance.supplyChain.quality", descKey: "compliance.supplyChain.qualityDesc", score: 76 },
  ] as SupplyChainDimension[],
}

export type RiskBucket = {
  level: "high" | "medium" | "low"
  count: number
  titleKey: string
  descKey: string
}

export const riskDistribution: RiskBucket[] = [
  { level: "high", count: 3, titleKey: "compliance.supplyChain.highRisk", descKey: "compliance.supplyChain.highRiskDesc" },
  { level: "medium", count: 12, titleKey: "compliance.supplyChain.mediumRisk", descKey: "compliance.supplyChain.mediumRiskDesc" },
  { level: "low", count: 1232, titleKey: "compliance.supplyChain.lowRisk", descKey: "compliance.supplyChain.lowRiskDesc" },
]
