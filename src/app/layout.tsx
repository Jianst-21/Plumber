import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexFlow Plumbing & Rooter",
  description: "24/7 Emergency Plumbing & Drain Cleaning in Greater Austin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
