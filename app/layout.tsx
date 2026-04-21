import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Ayush Kumar — Backend Developer & AI/ML Explorer",
  description:
    "Personal portfolio of Ayush Kumar — Backend Developer, Full Stack Builder, and AI/ML Explorer. Building scalable applications and intelligent systems.",
  openGraph: {
    title: "Ayush Kumar — Backend Developer & AI/ML Explorer",
    description:
      "Building scalable applications, intelligent systems, and software that solves practical problems.",
    url: "https://ayushkumar.dev",
    siteName: "Ayush Kumar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar — Backend Developer & AI/ML Explorer",
    description: "Building scalable applications and intelligent systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
