import type { Metadata } from "next";
import { Montserrat, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import MouseFollower from "@/app/components/animations/MouseFollower";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const audiowide = Audiowide({
  variable: "--font-xenetron",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xenetron Technologies",
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
      <body className={`${montserrat.variable} ${audiowide.variable} antialiased`}>
        <MouseFollower />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}