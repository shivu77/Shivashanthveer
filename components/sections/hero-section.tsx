"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Download, ArrowRight, Code, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import Image from "next/image"

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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl animate-pulse" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glass">
                <Image
                  src="/profile-photo.jpg"
                  alt="Shivashanthveer"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-16 h-1 bg-primary/30 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="relative z-10 text-center lg:text-left flex-1"
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
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I build practical AI that ships — from legal chatbots to intrusion
              detection and voice automation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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
