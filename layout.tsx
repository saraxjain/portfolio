import type React from "react"
import type { Metadata } from "next"
import "@fontsource/familjen-grotesk/400.css"
import "@fontsource/familjen-grotesk/600.css"
import "@fontsource/familjen-grotesk/700.css"
import "@fontsource/martian-mono/400.css"
import "@fontsource/martian-mono/600.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sara Jain",
  description:
    "Sara Jain is a product and program management student at UC Santa Cruz who interviews users, writes requirements, and builds AI tools that take the manual work out of workflows.",
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
