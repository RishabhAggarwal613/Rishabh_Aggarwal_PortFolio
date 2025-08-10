import type { Metadata } from "next"
import "./globals.css"
import AutoTheme from "@/components/AutoTheme"

export const metadata: Metadata = {
  title: "Rishabh Aggarwal — Portfolio",
  description: "Cosmic portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <AutoTheme />
        {children}
      </body>
    </html>
  )
}
