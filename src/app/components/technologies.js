import React from "react";
import "../globals.css";
import PageFooter from "./PageFooter";

const front = [
  "Javascript",
  "React",
  "Redux",
  "Tailwind",
  "Next.js",
  "CSS",
  "Bootstrap",
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
    <section
      id="technologies"
      className="h-[100vh] bg-muted flex p-24 flex-col"
    >
      <div className="ml-24 mb-24 ">
        <h1 className="scroll-m-20 border-b text-4xl font-extrabold tracking-tight lg:text-5xl">
          Technologies
        </h1>
      </div>
      <div className="grid grid-cols-2 mx-auto gap-8 w-3/4 text-lg">
        <div>
          <div className="underline">
            <strong>Front-end</strong>
          </div>
          <div>
            {front.map((skill) => {
              return <div key={skill}> • {skill}</div>;
            })}
          </div>
        </div>
        <div>
          <div className="underline">
            <strong>Back-end</strong>
          </div>
          <div>
            {back.map((skill) => {
              return <div key={skill}> • {skill}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
