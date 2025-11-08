"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Database,
  Cloud,
  Cpu,
} from "lucide-react"

interface SkillsSectionProps {
  standalone?: boolean
}

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      "Deep Learning (PyTorch, TensorFlow)",
      "LLMs & RAG Pipelines",
      "Computer Vision",
      "NLP",
      "Model Optimization",
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      "Data Pipelines",
      "ETL Processes",
      "Vector Databases (FAISS)",
      "Data Cleaning",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "CI/CD", "AWS", "Vercel", "Git"],
  },
  {
    title: "AI/ML Tools",
    icon: Cpu,
    skills: [
      "LangChain",
      "Hugging Face",
      "NVIDIA APIs",
      "OpenAI API",
      "Transformers",
    ],
  },
]

export function SkillsSection({ standalone = false }: SkillsSectionProps) {
  return (
    <section
      id="skills"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


