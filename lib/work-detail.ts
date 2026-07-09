export interface ProjectMeta {
  year: string
  projectType: string
  client: string
}

export interface ProjectStat {
  label: string
  value: string
  icon: "arrow-up-right" | "user-plus"
}

export interface NewsItem {
  id: string
  title: string
  tags: string[]
}

export interface MoreProject {
  label: string
  description: string
}

export interface ProjectDetail {
  slug: string
  title: string
  meta: ProjectMeta
  stats: ProjectStat[]
  overviewParagraphs: string[]
  newsItems: NewsItem[]
  moreProjects: MoreProject[]
}

const ASHPOOL_PROJECT: ProjectDetail = {
  slug: "ashpool",
  title: "ashpool",
  meta: {
    year: "2026",
    projectType: "Lorem ispsum",
    client: "quideserunt",
  },
  stats: [
    { label: "in value", value: "$1B", icon: "arrow-up-right" },
    { label: "total a", value: "$150M", icon: "arrow-up-right" },
    { label: "investors", value: "20K", icon: "user-plus" },
  ],
  overviewParagraphs: [
    "It's easy to build a great idea on the wrong foundation.",
    "A pre/seed investor is more than a check. The good ones are your first users, your hardest critics, and your way into a network that compounds.",
    "Align makes that the default \u2014 a network where founders get momentum, investors get conviction from the inside, and everyone is working toward the same thing.",
  ],
  newsItems: [
    {
      id: "1",
      title:
        "Aliquip anim magna quis nulla irure exercitation cillum exercitation cillum.",
      tags: ["Tempor", "Laborum", "Nulla"],
    },
    {
      id: "2",
      title:
        "Aliquip anim magna quis nulla irure exercitation cillum exercitation cillum.",
      tags: ["Tempor", "Laborum"],
    },
    {
      id: "3",
      title:
        "Aliquip anim magna quis nulla irure exercitation cillum exercitation cillum.",
      tags: ["Tempor", "Laborum", "Nulla", "Voluptate"],
    },
    {
      id: "4",
      title:
        "Aliquip anim magna quis nulla irure exercitation cillum exercitation cillum.",
      tags: ["Nulla", "Voluptate"],
    },
  ],
  moreProjects: [
    {
      label: "Ashpool",
      description: "Aliquip anim magna quis nulla irure exercitation.",
    },
    {
      label: "Ashpool",
      description: "Aliquip anim magna quis nulla irure exercitation.",
    },
    {
      label: "Ashpool",
      description: "Aliquip anim magna quis nulla irure exercitation.",
    },
  ],
}

const PROJECTS: Record<string, ProjectDetail> = {
  ashpool: ASHPOOL_PROJECT,
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECTS[slug]
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(PROJECTS)
}
