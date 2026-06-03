import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compliance | OSPO Portal",
  description: "License compliance, SCA tools, supply chain health and risk metrics",
}

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return children
}
