import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navigation/desktop/navigation";
import logo from "@/public/icon.svg";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <header className="flex justify-around items-center bg-header">
          <Image src={logo} alt="logo" height={50} width={50} />
          <NavigationMenuDemo />
          <div className="flex">
            <Heart className="" aria-hidden="true" />
            <ShoppingCart className="" aria-hidden="true" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
