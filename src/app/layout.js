"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Andrew Segal - Software Developer</title>
        <meta name="title" content="Andrew Segal's Website" />
        <link
          rel="preload"
          href="/fonts/Switzer.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
