import React, { useEffect } from 'react';
import { initParticles } from '../../public/particles'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initParticles();
  }, [])

  return (
    <div>
      <div id="particle-container"></div>
      <div className="text-left ml-24 mt-24">
        <div>Andrew Segal.</div>
        <div>Software Developer.</div>
        <br />
        <Link className="hover:underline" href="/"><span>&#8592;</span> back</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;