import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {SidebarProvider, SidebarTrigger} from "@/src/components/ui/sidebar";
import {AppSidebar} from "@/src/components/ui/app-sidebar";
import {ReactNode} from "react";
import {QueryProvider} from "@/src/providers/query-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntelliBlog",
  description: "An intelligent blog engine built with Next.js and React.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <QueryProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </QueryProvider>
    </body>
    </html>
  );
}

