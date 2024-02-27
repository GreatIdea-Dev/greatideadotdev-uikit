"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FooterLogoLine from "./components/FooterLogoLine";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html
      lang="en"
      data-theme={darkMode ? "dark" : "light"}
      data-color-scheme="cyan"
    >
      <body className={inter.className}>
        <Navigation />
        {children}
        <FooterLogoLine />
        <Footer />
      </body>
    </html>
  );
}
