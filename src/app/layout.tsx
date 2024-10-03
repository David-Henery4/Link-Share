import type { Metadata } from "next";
// import {Instrument_Sans} from "next/font/google"
import { instrumentSans } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link Share",
  description: "The app for all your link sharing needs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable}`}>
      <body className={`font-instrumentSans`}>{children}</body>
    </html>
  );
}
