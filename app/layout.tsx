import type React from "react"
import type { Metadata, Viewport } from "next"
import { headers } from "next/headers"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsAppButton from "@/components/WhatsAppButton"
import Header from "@/components/header"
import Footer from "@/components/footer"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-sans" })
const inter = Inter({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Mission Agape - Togo",
  description:
    "Mission Agape: Écoles de formation en Évangélisation, Communication, Étude Biblique, Relation d'aide et Intersession au Togo",
  generator: "mission-agape-togo",
  icons: {
    icon: [
      "/imageagape.jpeg",
    ],
    apple: "/imageagape.jpeg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = (await headers()).get("x-pathname") ?? ""
  const isAdmin = pathname.startsWith("/admin")

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen">
          {!isAdmin ? (
            <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border print:hidden">
              <Header />
            </header>
          ) : null}
          <main className="flex-grow print:min-h-0 print:flex-none">
            {children}
          </main>
          {!isAdmin ? (
            <footer className="w-full mt-auto print:hidden">
              <Footer />
            </footer>
          ) : null}
          {!isAdmin ? (
            <div className="print:hidden">
              <WhatsAppButton />
            </div>
          ) : null}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
