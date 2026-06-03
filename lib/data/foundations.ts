export type MembershipStatus = "active" | "expired" | "pending"

export type FoundationMembership = {
  id: string
  name: string
  shortName: string
  /** Logo URL — public CDN sources (Wikimedia / official sites). */
  logo: string
  url: string
  level: string
  /** Used as i18n key for level (override `level` if present). */
  levelKey?: string
  status: MembershipStatus
  /** Membership renewal/expiry date in ISO YYYY-MM. */
  validUntil: string
  descKey: string
}

// Logos are vendored under /public/foundations to avoid third-party rate-limits,
// hotlink protection, or 404s on the original CDNs. Sources are noted per-entry.
export const foundationMemberships: FoundationMembership[] = [
  {
    id: "linux-foundation",
    name: "The Linux Foundation",
    shortName: "Linux Foundation",
    // Source: linuxfoundation.org/hubfs/lf-stacked-color.svg
    logo: "/foundations/linux-foundation.svg",
    url: "https://www.linuxfoundation.org/",
    level: "Silver",
    levelKey: "foundations.level.silver",
    status: "active",
    validUntil: "2027-03",
    descKey: "foundations.lf.desc",
  },
  {
    id: "cncf",
    name: "Cloud Native Computing Foundation",
    shortName: "CNCF",
    // Source: cncf.io/wp-content/uploads/2022/07/cncf-color-bg.svg
    logo: "/foundations/cncf.svg",
    url: "https://www.cncf.io/",
    level: "Gold",
    levelKey: "foundations.level.gold",
    status: "active",
    validUntil: "2026-12",
    descKey: "foundations.cncf.desc",
  },
  {
    id: "aaif",
    name: "Agentic AI Innovation Foundation",
    shortName: "AAIF",
    // Source: aaif.io/wp-content/uploads/2025/12/AAIF_Primary_Logo_Black.svg
    logo: "/foundations/aaif.svg",
    url: "https://aaif.io/",
    level: "General",
    levelKey: "foundations.level.general",
    status: "active",
    validUntil: "2026-09",
    descKey: "foundations.aaif.desc",
  },
  {
    id: "todo-group",
    name: "TODO Group",
    shortName: "TODO Group",
    // Source: todogroup.org/img/todo-logo-on-white.svg
    logo: "/foundations/todo-group.svg",
    url: "https://todogroup.org/",
    level: "Member",
    levelKey: "foundations.level.member",
    status: "active",
    validUntil: "2026-08",
    descKey: "foundations.todo.desc",
  },
  {
    id: "openssf",
    name: "Open Source Security Foundation",
    shortName: "OpenSSF",
    // Source: openssf.org/wp-content/uploads/2022/10/openssf-icon-color.svg
    logo: "/foundations/openssf.svg",
    url: "https://openssf.org/",
    level: "Premier",
    levelKey: "foundations.level.premier",
    status: "pending",
    validUntil: "2026-07",
    descKey: "foundations.openssf.desc",
  },
  {
    id: "apache",
    name: "Apache Software Foundation",
    shortName: "ASF",
    // Source: apache.org/foundation/press/kit/asf_logo_wide.svg
    logo: "/foundations/asf.svg",
    url: "https://www.apache.org/",
    level: "Sponsor",
    levelKey: "foundations.level.sponsor",
    status: "expired",
    validUntil: "2025-04",
    descKey: "foundations.asf.desc",
  },
]
