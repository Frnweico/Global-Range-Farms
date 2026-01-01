import type { Metadata } from "next";
import { Barlow, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/page";
import FooterSection from "@/components/footer/page";
import { Suspense } from "react";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollManager from "@/components/ui/ScrollManager";

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
        className={`${barlow.variable} ${outfit.variable} antialiased`}
      >
        <Suspense>
        <ScrollManager />
        </Suspense>
        <header className="absolute top-0 left-0 w-full z-50">
          <Nav />
        </header>
        <main className="relative">
        {children}
        </main>
        <FooterSection />
        <ScrollToTop />
      </body>
    </html>
  );
}
