import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "AuraPods Pro - تجربة صوتية نقية وعصرية",
  description: "سماعات لاسلكية ذكية مع خاصية إلغاء الضوضاء الفائقة وبطارية تدوم طوال اليوم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}