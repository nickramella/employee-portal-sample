import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "../lib/store/Provider"
import "./globals.css";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Employee Portal",
  description: "Sample employee portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <HeaderBar />
          <div className="flex">
            <SideBar />
            <div className="w-full h-full flex justify-center p-6">
              {children}
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
