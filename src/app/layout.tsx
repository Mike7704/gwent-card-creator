import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gwent Card Creator",
  description: "An editor for making custom Gwent cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
