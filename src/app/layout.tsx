import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarberPro - Premium Barbershop Management System",
  description: "Run your barbershop 100% offline with powerful tools for appointments, payments, clients, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
