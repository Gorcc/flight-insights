import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "../components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight Insight",
  description: "Real-time flight insights, delay risk, weather, and airport tips for your journey.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Flight Dashboard | FlightInsight</title>
        <meta name="description" content="Real-time flight insights, delay risk, weather, and airport tips for your journey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          {/* Mobile Header */}
          <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow flex items-center h-14 px-3">
            <SidebarTrigger className="text-blue-600" />
            <span className="ml-4 font-bold text-lg text-blue-900">FlightInsight</span>
          </div>
          <AppSidebar />
          <SidebarInset>
            <main className="pt-16 md:pt-0" style={{ flex: 1 }}>{children}</main>
          </SidebarInset>
        </SidebarProvider>
        {/* Footer with personal site link */}
        <footer className="w-full py-4 text-center text-xs text-gray-500 bg-transparent">
          <a href="https://gorkemdev.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">© 2025 Deniz Görkem • gorkem.dev</a>
        </footer>
      </body>
    </html>
  );
}
