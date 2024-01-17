import React from 'react';
import '../app/globals.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="flex min-h-screen flex-col justify-between p-24">
      <div className="text-left">
        <div>Andrew Segal.</div>
        <div>Software Developer.</div>
        <br />
        <Link className="hover:underline" href="/"><span>&#8592;</span> back</Link>
      </div>
      <div>
        Contact content here
      </div>
    </section>
  )
}

export default Contact;