import { siteConfig } from "@/lib/data/site"

const resourceUrl = (slug: string) => `${siteConfig.community}/resources/${slug}`

export type ProcessEntry = {
  titleKey: string
  descKey: string
  link: string
  steps: number
}

export type GuideEntry = {
  titleKey: string
  descKey: string
  link: string
  type: "guide" | "template"
}

export type CaseImpact = "High" | "Medium"

export type CaseStudy = {
  titleKey: string
  descKey: string
  departmentKey: string
  impact: CaseImpact
  impactKey: string
  metrics: string
  metricsLabel: string
  link: string
}

export const processes: ProcessEntry[] = [
  { titleKey: "resources.process.contribution.title", descKey: "resources.process.contribution.desc", link: resourceUrl("processes/contribution"), steps: 5 },
  { titleKey: "resources.process.license.title", descKey: "resources.process.license.desc", link: resourceUrl("processes/license-review"), steps: 4 },
  { titleKey: "resources.process.release.title", descKey: "resources.process.release.desc", link: resourceUrl("processes/release"), steps: 7 },
  { titleKey: "resources.process.security.title", descKey: "resources.process.security.desc", link: resourceUrl("processes/security"), steps: 6 },
  { titleKey: "resources.process.request.title", descKey: "resources.process.request.desc", link: resourceUrl("processes/request"), steps: 4 },
  { titleKey: "resources.process.incident.title", descKey: "resources.process.incident.desc", link: resourceUrl("processes/incident"), steps: 5 },
]

export const guides: GuideEntry[] = [
  { titleKey: "resources.guide.quickstart.title", descKey: "resources.guide.quickstart.desc", link: resourceUrl("guides/quickstart"), type: "guide" },
  { titleKey: "resources.guide.bestpractice.title", descKey: "resources.guide.bestpractice.desc", link: resourceUrl("guides/best-practice"), type: "guide" },
  { titleKey: "resources.guide.community.title", descKey: "resources.guide.community.desc", link: resourceUrl("guides/community"), type: "guide" },
  { titleKey: "resources.guide.cla.title", descKey: "resources.guide.cla.desc", link: resourceUrl("templates/cla"), type: "template" },
]

export const cases: CaseStudy[] = [
  { titleKey: "resources.case.cloud.title", descKey: "resources.case.cloud.desc", departmentKey: "resources.case.dept.cloud", impact: "High", impactKey: "resources.case.impact.high", metrics: "35%", metricsLabel: "resources.case.cloud.metric", link: resourceUrl("cases/cloud-infrastructure") },
  { titleKey: "resources.case.ml.title", descKey: "resources.case.ml.desc", departmentKey: "resources.case.dept.data", impact: "High", impactKey: "resources.case.impact.high", metrics: "60%", metricsLabel: "resources.case.ml.metric", link: resourceUrl("cases/ml") },
  { titleKey: "resources.case.devtools.title", descKey: "resources.case.devtools.desc", departmentKey: "resources.case.dept.eng", impact: "Medium", impactKey: "resources.case.impact.medium", metrics: "25%", metricsLabel: "resources.case.devtools.metric", link: resourceUrl("cases/devtools") },
  { titleKey: "resources.case.support.title", descKey: "resources.case.support.desc", departmentKey: "resources.case.dept.support", impact: "Medium", impactKey: "resources.case.impact.medium", metrics: "40%", metricsLabel: "resources.case.support.metric", link: resourceUrl("cases/support") },
]
