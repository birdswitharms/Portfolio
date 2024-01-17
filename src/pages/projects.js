import React from 'react';
import '../app/globals.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col justify-between p-24">
      <div className="text-left">
        <div>Andrew Segal.</div>
        <div>Software Developer.</div>
        <br />
        <Link className="hover:underline" href="/"><span>&#8592;</span> back</Link>
      </div>

      <div>
        <Link className="hover:underline" href="https://pete-and-andrew.github.io/wordleSolver/">Wordle Solver <span>&#8594;</span></Link>
        <div className="text-sm">Suggests the next best word to guess in the NYT wordle game</div>
      </div>
      <div>
        <Link className="hover:underline" href="https://github.com/birdswitharms/MyKitchenApp">My Kitchen <span>&#8594;</span></Link>
        <div className="text-sm">An app which recommends recipes based on what you have in your kitchen.</div>
      </div>
    </section>
  )
}
