import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "UNBURNED is QUEMMEKH's live show, an artistic project where music meets theatre and performative arts.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "UNBURNED", template: "%s – UNBURNED" },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "UNBURNED",
    title: "UNBURNED",
    description,
    url: "./",
    images: [{ url: "/images/home/hero.jpg", width: 2560, height: 1707, alt: "UNBURNED live show" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main id="MainContent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
