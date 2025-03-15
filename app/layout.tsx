import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter= Inter({subsets: ["latin"]});
import "./globals.css";
import Providers from "../providers"


export const metadata: Metadata = {
  title: "Ocso",
  description: "Página web de administración de Ocsos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}