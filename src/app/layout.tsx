
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Documentação Maylon",
  description:
    "Portal de documentação da Maylon com informações, orientações, procedimentos e conteúdos de suporte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Sidebar />

        <main className="min-h-screen lg:ml-[290px]">
          {children}
        </main>

        <GoogleAnalytics gaId="G-4R88G65G1X" />
      </body>
    </html>
  );
}
