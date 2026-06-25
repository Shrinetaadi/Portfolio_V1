import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { profile, aboutBio } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080c",
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.shortName}`,
  },
  description: aboutBio,
  keywords: [
    "Aditya Singh Shrinet",
    "Android Developer",
    "Kotlin",
    "IPTV",
    "Software Engineer",
    "Noida",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} | ${profile.title}`,
    description: aboutBio.slice(0, 160),
    images: [{ url: profile.heroImage, width: 1200, height: 800, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: aboutBio.slice(0, 160),
    images: [profile.heroImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#12121a",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#f4f4f5",
            },
          }}
        />
      </body>
    </html>
  );
}
