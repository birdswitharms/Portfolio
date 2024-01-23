import React from 'react';
import '../globals.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <div>
          <Link className="hover:underline" href="https://pete-and-andrew.github.io/wordleSolver/">Wordle Solver <span>&#8594;</span></Link>
          <div className="text-sm">Suggests the next best word to guess in the NYT wordle game</div>
        </div>
        <br />
        <div>
          <Link className="hover:underline" href="https://github.com/birdswitharms/portfolio">andrew.dev <span>&#8594;</span></Link>
          <div className="text-sm">My personal website and portfolio</div>
        </div>
        <br />
        <div>
          <Link className="hover:underline" href="https://github.com/birdswitharms/MyKitchenApp">My Kitchen <span>&#8594;</span></Link>
          <div className="text-sm">An app which recommends recipes based on what you have in your kitchen.</div>
        </div>
      </div>
    </section>
  )
}
