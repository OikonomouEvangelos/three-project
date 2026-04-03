// app/layout.tsx
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body className="bg-background text-cream antialiased">
        <Header />
        
        {/* Το κυρίως περιεχόμενο της σελίδας */}
        {children}
        
        <Footer /> {/* 2. Τοποθέτηση στο τέλος */}
      </body>
    </html>
  );
}