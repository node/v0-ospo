import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | OSPO Portal",
  description: "Internal open source projects, external contributions and public OSS projects",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
