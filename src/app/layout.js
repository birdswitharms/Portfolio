"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html>
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
