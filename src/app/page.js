"use client";

import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Technologies from "../components/Technologies";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Make sure we're in the browser
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".animate-hidden");
      const animateMovementEls = document.querySelectorAll(".animate-movement");
      const allElements = [...hiddenElements, ...animateMovementEls];
      allElements.forEach((element) => {
        observer.observe(element);
      });

      console.log("fired!");
    }
  }, []); // The empty array makes this effect run only once

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
