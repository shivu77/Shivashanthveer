import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/sections/contact-section"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactSection standalone={true} />
    </main>
  )
}


