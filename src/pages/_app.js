import React, { useEffect } from 'react';
import { initParticles } from '../../public/particles'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initParticles();
  }, [])

  return (
    <div>
      <div id="particle-container"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;