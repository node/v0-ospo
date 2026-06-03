export type TeamMember = {
  name: string
  roleKey: string
  email: string
  avatar: string
}

// Deterministic open avatar service — keyed by email so portrait is stable per person.
const avatarFor = (seed: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&radius=50`

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Chen",
    roleKey: "home.team.director",
    email: "alex.chen@ospo.cc",
    avatar: avatarFor("Alex Chen"),
  },
  {
    name: "Sarah Johnson",
    roleKey: "home.team.manager",
    email: "sarah.johnson@ospo.cc",
    avatar: avatarFor("Sarah Johnson"),
  },
  {
    name: "Michael Zhang",
    roleKey: "home.team.engineer",
    email: "michael.zhang@ospo.cc",
    avatar: avatarFor("Michael Zhang"),
  },
  {
    name: "Emma Liu",
    roleKey: "home.team.legal",
    email: "emma.liu@ospo.cc",
    avatar: avatarFor("Emma Liu"),
  },
  {
    name: "David Wang",
    roleKey: "home.team.developer",
    email: "david.wang@ospo.cc",
    avatar: avatarFor("David Wang"),
  },
]

export function obfuscateEmail(email: string): string {
  return email.replace("@", " [at] ").replace(/\.([^.]+)$/, " [dot] $1")
}
