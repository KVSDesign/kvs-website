import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css"

export const metadata: Metadata = {
  title: "KVS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
