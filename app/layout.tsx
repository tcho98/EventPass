// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css"; // Assurez-vous que ce fichier existe et contient les directives Tailwind

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <head>
        <title>Mon Application</title>
        <meta name="description" content="Description de mon application" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
