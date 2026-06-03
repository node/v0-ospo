import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Capabilities | OSPO Portal",
  description: "Open source capability building, milestones and progress tracking",
}

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
