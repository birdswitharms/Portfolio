import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Intro />
      <Projects />
      <Experience />
      <Technologies />
    </main>
  );
}
