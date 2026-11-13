import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["700", "800"], display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Créneau Plein — Un rendez-vous annulé est reproposé dans la minute",
  description: "Une annulation laisse un trou dans ton agenda. Créneau Plein le propose aussitôt à ta liste d'attente. Le premier qui confirme l'obtient.",
  openGraph: {
    title: "Créneau Plein — Un rendez-vous annulé est reproposé dans la minute",
    description: "Ton agenda se remplit tout seul quand un client annule.",
    locale: "fr_FR",
    type: "website",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#12382b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
