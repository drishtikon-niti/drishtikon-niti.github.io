import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel, Montserrat, Cormorant_Garamond, Bodoni_Moda } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Drishtikon",
    default: "Drishtikon | Premium Satire, Perspective & Intellectual Commentary",
  },
  description:
    "Drishtikon is a modern satire-news digital media platform presenting perspective, commentary, and reflection on modern society through intelligent, high-end editorial storytelling.",
  metadataBase: new URL("https://drishtikon.news"),
  openGraph: {
    title: "Drishtikon | Premium Satire & Editorial Newsroom",
    description: "Intelligent commentary and societal reflection through high-end satirical journalism.",
    url: "https://drishtikon.news",
    siteName: "Drishtikon",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drishtikon | Premium Satire & Editorial Newsroom",
    description: "Intelligent commentary and societal reflection through high-end satirical journalism.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cinzel.variable} ${montserrat.variable} ${cormorantGaramond.variable} ${bodoniModa.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans bg-cream-50 text-charcoal-900 dark:bg-charcoal-900 dark:text-cream-50 flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
