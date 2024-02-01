import React from "react";
import "../app/globals.css";

const front = [
  "Javascript",
  "React",
  "Redux",
  "Tailwind",
  "Next.js",
  "CSS",
  "Bootstrap",
  "ShadCN",
  "Radix UI",
  "Material UI",
  "Jest",
  "React Testing Library",
  "Webpack",
  "ESLint",
];
const back = [
  "Ruby",
  "Elixir",
  "Ruby on Rails",
  "Stimulus",
  "Turbo frames",
  "Pheonix",
  "PostgreSQL",
  "Relational Databases",
  "Sidekiq",
  "Rspec",
  "GraphQL",
  "Heroku",
  "AWS",
];

export default function Technologies() {
  return (
    <section id="technologies" className="p-24">
      <div className="ml-12 mb-12 sm:ml-24 sm:mb-24">
        <h1 className="animate-movement scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Technologies
        </h1>
      </div>
      <div className="grid grid-cols-1">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:mx-auto w-full md:w-3/4 text-lg animate-hidden">
          <div className="min-w-28">
            <div className="underline">
              <strong>Front-end</strong>
            </div>
            <ul>
              {front.map((skill) => {
                return <li key={skill}> • {skill}</li>;
              })}
            </ul>
          </div>
          <div className="min-w-28">
            <div className="underline">
              <strong>Back-end</strong>
            </div>
            <ul>
              {back.map((skill) => {
                return <li key={skill}> • {skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
