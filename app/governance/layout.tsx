import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance | OSPO Portal",
  description: "Open source policies, organization structure and operating procedures",
}

export default function GovernanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
