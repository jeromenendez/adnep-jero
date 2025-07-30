import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADNEP - Soluciones Creativas de Video Digital",
  description:
    "Agencia Digital de Nuevas Experiencias Publicitarias. Transformamos ideas en experiencias audiovisuales que conectan marcas con audiencias.",
  keywords: "video digital, publicidad, marketing, creatividad, producción audiovisual, Argentina",
  authors: [{ name: "ADNEP" }],
  creator: "ADNEP",
  publisher: "ADNEP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adnep.digital"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ADNEP - Soluciones Creativas de Video Digital",
    description:
      "Transformamos ideas en experiencias audiovisuales que conectan marcas con audiencias de manera innovadora y efectiva.",
    url: "https://adnep.digital",
    siteName: "ADNEP",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADNEP - Soluciones Creativas de Video Digital",
    description:
      "Transformamos ideas en experiencias audiovisuales que conectan marcas con audiencias de manera innovadora y efectiva.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
