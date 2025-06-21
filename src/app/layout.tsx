import type { Metadata } from "next";
import { Geist, Geist_Mono,Cairo,IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
})

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cairo', 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achraf Dardour | Full-Stack Developer",
  description: "Official portfolio of Achraf Dardour — Full-Stack Developer specializing in JavaScript, React, Next.js, and Django. Discover projects, skills, and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`dark:bg-[#1A1A1A] ${ibmPlexMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
