import React from "react";
import "../app/globals.css";
import Link from "next/link";
import PageFooter from "./PageFooter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    name: "Wordle Solver",
    content: "Suggests the next best word to guess in the NYT wordle game",
    href: "https://pete-and-andrew.github.io/wordleSolver/",
  },
  {
    name: "andrew.dev",
    content: "My personal website and portfolio",
    href: "https://github.com/birdswitharms/portfolio",
  },
  {
    name: "My Kitchen",
    content:
      "An app which recommends recipes based on what you have in your kitchen.",
    href: "https://github.com/birdswitharms/MyKitchenApp",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-24 text-primary bg-muted flex min-h-screen flex-col"
    >
      <div className="ml-24 mb-24">
        <h1 className="scroll-m-20 border-b text-4xl font-extrabold tracking-tight lg:text-5xl">
          Projects
        </h1>
      </div>
      <div className="mx-24 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <Card key={project.name}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.content}</p>
              </CardContent>
              <CardFooter>
                <Link className="hover:underline" href={project.href}>
                  link <span>&#8594;</span>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="mt-auto p-4">
        <PageFooter target="experience" />
      </div>
    </section>
  );
}
