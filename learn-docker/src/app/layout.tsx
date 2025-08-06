import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MLVerse",
  description: "Machine Learning Guide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#fff1f2] text-neutral-900`}>
        <Header />
        <main className="flex-grow px-6 py-4">{children}</main>
        <footer className="w-full py-4 px-6 bg-[#ffeef0] text-center text-sm text-neutral-600 border-t border-rose-100">
          © {new Date().getFullYear()} MLVerse. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
