import type { Metadata } from "next";
import { Sansation } from "next/font/google";
import "./globals.css";
import imagePath from "@/constants/imagePath";

const sansation = Sansation({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sansation",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byte and Bite Foods | House of Next-Gen Food Brands",
  description:
    "Byte and Bite Foods is a multi-format food company crafting bold culinary brands across dine-in, delivery, and takeaway experiences.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sansation.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${sansation.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
