import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Competitions } from "@/components/competitions"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Hero />
      <About />
      <Education />
      <Competitions />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
