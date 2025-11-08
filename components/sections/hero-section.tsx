"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Download, ArrowRight, Code, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

interface HeroSectionProps {
  standalone?: boolean
}

export function HeroSection({ standalone = false }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const scrollToProjects = () => {
    if (!standalone) {
      const element = document.getElementById("projects")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const icons = [
    { icon: Code, delay: 0 },
    { icon: Brain, delay: 0.2 },
    { icon: Zap, delay: 0.4 },
  ]

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        standalone ? "pt-16" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Shivashanthveer N
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI/ML Engineer | Developer | Learner
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I build practical AI that ships — from legal chatbots to intrusion
              detection and voice automation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" onClick={scrollToProjects} className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/Resume- ShivashanthveerAT.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Gradient Blob */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {icons.map(({ icon: Icon, delay }) => (
            <motion.div
              key={delay}
              className="absolute"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                y: [0, -20, 0],
                x: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
              style={{
                left: `${20 + delay * 30}%`,
                top: `${30 + delay * 20}%`,
              }}
            >
              <Icon className="w-8 h-8 text-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
