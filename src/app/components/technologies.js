import React from 'react';
import '../globals.css'

const front = ["Javascript", "React", "Redux", "Tailwind", "Next.js", "CSS", "Bootstrap", "Material UI", "Jest", "React Testing Library", "Webpack", "ESLint"]
const back = ["Ruby", "Elixir", "Ruby on Rails", "Stimulus", "Turbo frames", "Pheonix", "PostgreSQL", "Relational Databases", "Sidekiq", "Rspec", "GraphQL", "Heroku", "AWS"]

export default function Technologies() {
  return (
    <section id="technologies" className="flex min-h-screen p-24">
      <div className="flex-col mr-24">
        <div className="underline">Front-end</div>
        <div className="text-sm">{front.map((skill) => {
          return (
            <p> • {skill}</p>
          )
        })}</div>
      </div>
      <div>
        <div className="underline">Back-end</div>
        <div className="text-sm">{back.map((skill) => {
          return (
            <p> • {skill}</p>
          )
        })}</div>
      </div>
    </section>
  )
}
