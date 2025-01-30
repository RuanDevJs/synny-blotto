import type { Metadata } from "next";
import { Fira_Sans_Condensed, Overpass } from "next/font/google";
import "./globals.css";

const fontFiraSansCondensed = Fira_Sans_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: "--font-fira-sans-condensed",
  subsets: ["latin"],
});

const fontOverPass = Overpass({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: "--font-overpass",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synny Blotto",
  description: "Greek Yougurt is a unique traditional product which contains no additives and preservatives. It is a healthy aperitif, source of energy and the best way to start the day.",
  applicationName: "Synny Blotto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontFiraSansCondensed.variable} ${fontOverPass.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
