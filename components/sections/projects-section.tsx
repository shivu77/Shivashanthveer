"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"

interface Project {
  title: string
  slug: string
  summary: string
  tech: string[]
}

interface ProjectsSectionProps {
  standalone?: boolean
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    title: "Legal Chatbot (Lawyer Opinions RAG)",
    slug: "legal-chatbot-rag",
    summary: "LLM assistant grounded in scraped Indian lawyer opinions.",
    tech: ["Python", "LangChain", "FAISS", "FastAPI"],
  },
  {
    title: "Network-Based Intrusion Detection (CNN–LSTM)",
    slug: "ids-cnn-lstm",
    summary: "Hybrid deep model for detecting network attack patterns.",
    tech: ["Python", "PyTorch", "Pandas"],
  },
  {
    title: "Personal Voice Assistant",
    slug: "voice-assistant",
    summary: "Wake-word + custom intent routing + TTS.",
    tech: ["Python", "SpeechRecognition", "TTS"],
  },
  {
    title: "NVIDIA API Chatbot",
    slug: "nvidia-api-chatbot",
    summary: "Conversational assistant powered by NVIDIA NIM inference.",
    tech: ["NVIDIA API", "Node.js", "Python"],
  },
]

export function ProjectsSection({
  standalone = false,
  projects = defaultProjects,
}: ProjectsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className={`py-20 ${standalone ? "min-h-screen flex items-center pt-32" : ""}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Card
                className="glass h-full hover:shadow-xl transition-all duration-300"
                style={{
                  transform:
                    hoveredIndex === index
                      ? "perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px)"
                      : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
                  transformStyle: "preserve-3d",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    asChild
                    className="group/button w-full"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}


