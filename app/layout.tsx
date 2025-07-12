import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Import delicate, romantic fonts
import { Playfair_Display, Poppins } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
})

export const metadata = {
  title: "Elysian Vows | Luxury Indian Couture",
  description: "Bespoke Indian wedding ensembles crafted with unparalleled artistry and tradition",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
