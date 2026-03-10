import type { Metadata } from "next";
import { DM_Sans, Baloo_2, Pacifico } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Little Lunch — Meu Lanchinho Escolar",
  description:
    "Refeições e lanches saudáveis pensados para crianças. Ingredientes naturais, cardápios equilibrados e praticidade para a rotina da sua família.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmSans.variable} ${baloo.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
