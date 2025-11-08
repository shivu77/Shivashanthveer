import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/sections/about-section"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutSection standalone={true} />
    </main>
  )
}


