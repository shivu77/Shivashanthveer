import { Navbar } from "@/components/navbar"
import { SkillsSection } from "@/components/sections/skills-section"

export default function SkillsPage() {
  return (
    <main>
      <Navbar />
      <SkillsSection standalone={true} />
    </main>
  )
}


