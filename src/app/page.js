import Intro from "./components/intro"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Technologies from "./components/technologies"

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24">
      <Intro />
      <Projects />
      <Experience />
      <Technologies />
    </main>
  )
}