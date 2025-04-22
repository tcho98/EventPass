import type { Metadata } from "next";
import "./globals.css"; // Assure-toi que le fichier CSS est importé

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-geist">{children}</body>
      {/* Utilisation de la classe de police */}
    </html>
  );
}
