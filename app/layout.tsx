import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yudstwn | Portfolio",
  description: "Modern portfolio of Muhammad Yudi Setiawan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // KITA PAKSA CLASS "dark" DISINI
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* ThemeProvider DIHAPUS agar lebih stabil */}
        <Navbar />
        <main className="px-6 mx-auto max-w-7xl md:px-12 lg:px-20">{children}</main>
        <Footer />
        <ScrollObserver />
      </body>
    </html>
  );
}
