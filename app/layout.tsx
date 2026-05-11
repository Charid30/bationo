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
  title: "BATIONO Ulrich Rachid Kevin — Ingénieur de Conception",
  description:
    "Portfolio de BATIONO Ulrich Rachid Kevin, Ingénieur de Conception spécialisé en cybersécurité (SOC/SIEM, Wazuh, Suricata) et développement logiciel (Flutter, Angular, Node.js). Basé au Burkina Faso.",
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
