import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghana TVETS Oti Region – Ghana TVETS Oti Region",
  description: "Building the future of Oti Region through practical and inclusive TVET education. Technical and Vocational Education and Training in Ghana.",
  keywords: ["Ghana TVET", "TVETS Oti Region", "Technical Education", "Vocational Training", "Oti Region", "Engr. Robert K. Amontcho"],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${rubik.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#1579e6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
