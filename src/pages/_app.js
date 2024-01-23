import React from 'react';
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="text-left text-2xl ml-24 mt-24">
        <br />
        <div className="text-lg"><Link className="hover:underline" href="/"><span>&#8592;</span> back</Link></div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;