import type { Metadata } from "next";
import AppProviders from "@/providers/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webisfree",
  description: "Portfolio, projects, learning and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
