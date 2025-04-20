import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Athletech Pods | Smart Reaction Training System",
  description:
    "Transform your training with Athletech Pods - the smart reaction training system designed for athletes of all levels.",
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
