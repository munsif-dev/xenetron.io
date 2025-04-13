import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import MouseFollower from "@/app/components/animations/MouseFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xenetron - Empowering Digital Transformation Through AI",
  description: "Xenetron is a forward-thinking software technology service provider specializing in AI-powered SaaS applications that drive digital transformation.",
  keywords: "AI, Digital Transformation, SaaS, Software Development, AI Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MouseFollower />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}