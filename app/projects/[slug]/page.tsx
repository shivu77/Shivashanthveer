import { Navbar } from "@/components/navbar"
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { MDXComponents } from "@/components/mdx-components"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      <article className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <Card className="glass mb-8">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.frontmatter.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.frontmatter.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.frontmatter.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.frontmatter.highlights && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {project.frontmatter.highlights.map((highlight, index) => (
                      <li key={index} className="text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
                <MDXRemote
                  source={project.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeHighlight],
                    },
                  }}
                  components={MDXComponents}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </main>
  )
}

