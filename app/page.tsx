import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiMysql,
  SiGithub,
  SiLinux,
  SiC,
} from "react-icons/si"

import { SiFigma } from "react-icons/si"
import { FaFileCode } from "react-icons/fa"


export default function Home() {
  const projects = [
    {
      title: "Développement Web (2024 - Présent)",
      description: "Développement d’un site de newsletters personnalisées avec OpenAI",
      github: "",
      demo: "",
    },
    {
      title: "Projet Gestion système de fichier (2024)",
      description: "Développement d'un système en C pour gestion de fichiers à distance à EURECOM",
      github: "https://github.com/Mflavien01/file-system-handle",
      demo: "",
    },
    {
      title: "Projet Cannes Blanche Virtuelle (2024)",
      description: "Alternative à la canne blanche pour les aveugles, réalisé à EURECOM",
      github: "https://github.com/Mflavien01/SeeForMe",
      demo: "https://seeforme.flavienmathieu.fr/",
    },
    {
      title: "Projet Thermomètre Connecté (2024)",
      description: "Thermomètre connecté avec ESP32 et Flask",
      github: "",
      demo: "",
    },
    {
      title: "Développement Web (2023)",
      description: "Développement d’un site web permettant la génération de lettres de motivation avec OpenAI",
      github: "",
      demo: "https://coverturbo.flavienmathieu.fr/",
    },
    {
      title: "Développement Web (2021)",
      description: "Finaliste du concours “Code ton lycée”",
      github: "https://github.com/Key4School/Key4School",
      demo: "https://key4school.netlify.app/",
    },
  ]

  const tools = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "PHP", icon: SiPhp },
    { name: "SQL", icon: SiMysql },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Linux", icon: SiLinux },
    { name: "C", icon: SiC },
    { name: "Matlab", icon: FaFileCode },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="md:block hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex items-center space-x-4 lg:space-x-6 px-10">
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
                  <span className="gradient-text">Flavien MATHIEU</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Développeur & Ingénieur en formation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="#projects">
                    <Button size="lg" className="rounded-full">
                      Mes Projets
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline" className="rounded-full">
                      Me Contacter
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-75 blur-2xl"></div>
                  <Image
                    src="/profile.png?height=400&width=400"
                    alt="Flavien MATHIEU"
                    width={400}
                    height={400}
                    className="rounded-full object-cover z-10 relative"
                  />
                </div>
                <div
                  className="md:block hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-effect p-4 rotate-6 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-lg font-semibold">Étudiant en Ingénierie Informatique</p>
                </div>
                <div
                  className="md:block hidden absolute bottom-0 right-0 glass-effect p-4 -rotate-6 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <p className="text-lg font-semibold">10+ Projets Réalisés</p>
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
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
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
                <CardTitle>EURECOM (2024 - 2027)</CardTitle>
                <CardDescription>École d’ingénieur à Sophia-Antipolis, cours en anglais</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="https://www.eurecom.fr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visiter le site
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>CPGE - Paris-Saclay (2022 - 2024)</CardTitle>
                <CardDescription>Classes préparatoires PCSI, PSI</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="https://lyceedelessouriau.fr/index.php/enseignement-superieur/la-cpge-pcsi-psi/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visiter le site
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="tools" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="tool-icon">
                <tool.icon />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="flex justify-center space-x-4">
            <Link href="mailto:flavien.mathieu01@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://github.com/Mflavien01" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/flavien-mathieu" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Flavien Mathieu. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="mailto:flavien.mathieu01@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://github.com/Mflavien01" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/flavien-mathieu" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>

    </div>
  )
}

