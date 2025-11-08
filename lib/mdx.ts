import fs from "fs"
import path from "path"
// @ts-ignore
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export interface ProjectFrontmatter {
  title: string
  slug: string
  summary: string
  tech: string[]
  highlights?: string[]
}

export interface Project {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    }
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
  return projects
}


