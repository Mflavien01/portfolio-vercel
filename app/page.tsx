import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-platform-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description: "A productivity app with real-time updates using Socket.io",
      github: "https://github.com/yourusername/task-management-app",
      demo: "https://task-management-app-demo.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description: "A weather app integrating multiple APIs for accurate forecasts",
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
    },
    {
      title: "Social Media Analytics Tool",
      description: "Data visualization tool for social media metrics",
      github: "https://github.com/yourusername/social-media-analytics",
      demo: "https://social-media-analytics-demo.vercel.app",
    },
    {
      title: "Blockchain Explorer",
      description: "An explorer for viewing blockchain transactions and data",
      github: "https://github.com/yourusername/blockchain-explorer",
      demo: "https://blockchain-explorer-demo.vercel.app",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="home" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-4">
                  Hi, I'm <span className="gradient-text">John Doe</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="rounded-full">
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-75 blur-2xl"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="John Doe"
                    width={400}
                    height={400}
                    className="rounded-full object-cover z-10 relative"
                  />
                </div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-effect p-4 rotate-6 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-lg font-semibold">5+ Years Experience</p>
                </div>
                <div
                  className="absolute bottom-0 right-0 glass-effect p-4 -rotate-6 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <p className="text-lg font-semibold">10+ Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Master of Computer Science</CardTitle>
                <CardDescription>Stanford University, 2018-2020</CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
                <CardDescription>MIT, 2014-2018</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

