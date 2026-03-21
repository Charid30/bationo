import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BATIONO Ulrich Rachid Kevin — Cybersécurité & Développement",
  description:
    "Portfolio de BATIONO Ulrich Rachid Kevin, expert en cybersécurité (SOC/SIEM, Wazuh, Suricata) et développement (Flutter, Next.js). Basé au Burkina Faso.",
  keywords: [
    "cybersécurité",
    "SOC",
    "SIEM",
    "Wazuh",
    "Suricata",
    "Flutter",
    "développeur",
    "Burkina Faso",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
