"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface AboutSectionProps {
  standalone?: boolean
}

export function AboutSection({ standalone = false }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`py-20 ${
        standalone ? "min-h-screen flex items-center pt-32" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>

          <Card className="glass">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none text-center md:text-left">
                <p className="text-lg leading-relaxed">
                  I&apos;m <strong>Shivashanthveer N</strong>, an AI/ML engineer
                  passionate about building real-world intelligent systems. I
                  work on LLM-based assistants, RAG pipelines, security
                  detection models, and voice automation. I care about clarity,
                  reproducibility, and solutions that scale. I am currently
                  pursuing a <strong>Minor in Artificial Intelligence</strong> from
                  <strong> IIT Ropar</strong>.
                </p>

                <p className="text-lg leading-relaxed mt-4">
                  Outside engineering, I enjoy football,
                  learning multiple languages, and exploring generative AI
                  research.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
