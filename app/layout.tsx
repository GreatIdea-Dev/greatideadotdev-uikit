import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FooterLogoLine from "./components/FooterLogoLine";
import { Providers } from "./providers";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Great Idea Development",
  description: "A webapp is as a webapp does.",
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <FooterLogoLine />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
