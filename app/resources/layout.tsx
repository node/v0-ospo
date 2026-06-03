import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources | OSPO Portal",
  description: "Process guidelines, best practices, templates and success stories",
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
