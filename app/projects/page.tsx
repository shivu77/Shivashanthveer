import { Navbar } from "@/components/navbar"
import { ProjectsSection } from "@/components/sections/projects-section"
import { getAllProjects } from "@/lib/mdx"

export default function ProjectsPage() {
  const projects = getAllProjects().map((project) => ({
    title: project.frontmatter.title,
    slug: project.slug,
    summary: project.frontmatter.summary,
    tech: project.frontmatter.tech,
  }))

  return (
    <main>
      <Navbar />
      <ProjectsSection standalone={true} projects={projects} />
    </main>
  )
}

