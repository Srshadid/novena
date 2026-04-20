import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CornerIcons from "@/components/CornerIcons";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Estudio Novena",
  description: "Music recording studio in Mexico City. Book a session.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Apply saved theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var t = localStorage.getItem('theme');
            if (t && t !== 'default') document.documentElement.dataset.theme = t;
          })();
        `}} />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-dusk" style={{ fontFamily: "var(--font-serif)" }}>
        <ThemeProvider>
          <Header />
          <CornerIcons />
          <main className="flex-1">{children}</main>
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
