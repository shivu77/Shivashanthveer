import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { getAllProjects } from "@/lib/mdx"

export default function Home() {
  const projects = getAllProjects()
    .slice(0, 4)
    .map((project) => ({
      title: project.frontmatter.title,
      slug: project.slug,
      summary: project.frontmatter.summary,
      tech: project.frontmatter.tech,
    }))

  return (
    <main>
      <Navbar isHomePage={true} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  )
}

