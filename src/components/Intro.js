import React from "react";
import PageFooter from "./PageFooter";

export default function Intro() {
  return (
    <section id="intro" className="text-left text-lg h-[100dvh] m-12 md:m-24">
      <div className="text-foreground h-[67vh] animate-hidden">
        Hello and thank you for visiting my portfolio. <br />
        I&apos;m Andrew, a passionate Software Engineer with a unique background
        in Industrial Design. <br />
        My journey has led me to specialize in creating exceptional user
        experiences and crafting responsive, engaging websites. <br />
        My expertise lies in delivering solutions that are not only
        aesthetically pleasing but also function seamlessly across various
        devices.
      </div>
      <div className="mx-auto py-4 mb-4">
        <PageFooter target="projects" />
      </div>
    </section>
  );
}
