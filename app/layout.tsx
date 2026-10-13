import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const description = `${site.name}: ${site.hero.lead}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: Data, Development, Design`, template: `%s · ${site.name}` },
  description,
  openGraph: {
    title: `${site.name}: Data, Development, Design`,
    description,
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#121214" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Geist:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-mint focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="mx-auto max-w-[1240px] px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
