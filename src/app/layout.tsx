import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Make sure this exists in the right location
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Topbar />
        <Header />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}