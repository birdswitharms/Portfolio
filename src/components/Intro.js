import React from "react";
import PageFooter from "./PageFooter";

export default function Intro() {
  return (
    <section id="intro" className="text-left text-lg h-[100vh] m-24">
      <div className="text-foreground h-[67vh]">
        Hi, welcome to my site!
        <br />
        My name is Andrew, and I am a developer with a background in Industrial
        Design.
        <br />
        I love to build great user experiences, and websites people enjoy using,
        across all devices.
        <br />
        <br />I also enjoy weightlifting, rock climbing, painting and video
        games (factory games anyone?).
      </div>
      <PageFooter target="projects" />
    </section>
  );
}
