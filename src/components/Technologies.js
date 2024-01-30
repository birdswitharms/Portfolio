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
    <section id="technologies" className="flex p-24 flex-col">
      <div className="mb-24 -ml-4">
        <h1 className="animate-movement scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Technologies
        </h1>
      </div>
      <div className="grid grid-cols-2 md:mx-auto w-full md:w-3/4 text-lg animate-hidden">
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
    </section>
  );
}
