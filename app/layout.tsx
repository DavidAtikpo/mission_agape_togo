import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import WhatsAppButton from "@/components/WhatsAppButton"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AdsterraSlot from "@/components/AdsterraSlot"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const adsterraMidContainerId = process.env.NEXT_PUBLIC_ADSTERRA_MID_CONTAINER_ID
  const adsterraMidScriptSrc = process.env.NEXT_PUBLIC_ADSTERRA_MID_SCRIPT_SRC

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border print:hidden">
            <Header />
          </header>
          <main className="flex-grow print:min-h-0 print:flex-none">
            {children}
            {adsterraMidContainerId && adsterraMidScriptSrc ? (
              <div className="print:hidden mt-6">
                <AdsterraSlot containerId={adsterraMidContainerId} scriptSrc={adsterraMidScriptSrc} />
              </div>
            ) : null}
          </main>
          <footer className="w-full mt-auto print:hidden">
            <Footer />
          </footer>
          <div className="print:hidden">
            <WhatsAppButton />
          </div>
          <div className="print:hidden">
            <AdsterraSlot
              containerId="container-079b172066bdbf0435820f6f662228f0"
              scriptSrc="https://pl29334649.profitablecpmratenetwork.com/079b172066bdbf0435820f6f662228f0/invoke.js"
            />
          </div>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
