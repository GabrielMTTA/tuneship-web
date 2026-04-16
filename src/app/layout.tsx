import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuneship — Suas playlists, sem fronteiras.",
  description:
    "Migre suas playlists favoritas entre Spotify e YouTube Music em segundos. Simples, rápido e seguro.",
  keywords: ["playlist", "migração", "spotify", "youtube music", "música"],
  openGraph: {
    title: "Tuneship",
    description: "Suas playlists, sem fronteiras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
