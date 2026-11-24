import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Andres Felipe Melo Chaguala — Systems & Computer Engineer";
const description =
  "Full-Stack, Backend & ML Integration. Aplicaciones web, APIs RESTful y soluciones de aprendizaje automático desde Bogotá, Colombia.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Andres Felipe Melo Chaguala" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} ${mono.variable} font-sans`}>{children}</body>
    </html>
  );
}
