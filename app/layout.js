import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Ivy Atieng · Portfolio",
  description: "Data scientist, UI/UX designer and frontend contributor based in Nairobi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  );
}
