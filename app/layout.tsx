import { Roboto } from "next/font/google"
import "./globals.css"

import type { Metadata } from "next"
const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Website Clone",
  description: "Cloned website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${robotoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
