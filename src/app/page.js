import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col justify-between p-24">
      <div className="text-left">
        <div>Andrew Segal.</div>
        <div>Software Developer.</div>
      </div>
      <div className="text-left">
        <Link href="/projects">
          <div className="hover:underline">Projects <span>&#8594;</span></div>
        </Link>
        <Link href="/info">
          <div className="hover:underline">Info <span>&#8594;</span></div>
        </Link>
        <Link href="/contact">
          <div className="hover:underline">Contact <span>&#8594;</span></div>
        </Link>
      </div>
    </section>
  )
}