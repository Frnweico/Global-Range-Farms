import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/page";
import FooterSection from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Global Range Farms",
  description: "Premium Lifestock for every special celebration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} ${outfit.variable} antialiased`}
      >
        <header className="absolute top-0 left-0 w-full z-50">
          <Nav />
        </header>
        <main className="relative">
        {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
