import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//own components
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Stairs from "@/components/Stairs";
import { AnimatePresence, motion } from "framer-motion";

const inter = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetrainsMono",
});

export const metadata: Metadata = {
  title: "David Portfolio",
  description: "My personal portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StairTransition />
        {/*<Stairs />componente with error */}

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
