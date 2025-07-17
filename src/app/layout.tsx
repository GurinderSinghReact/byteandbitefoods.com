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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sansation.className}>
      <link rel="icon" href={imagePath.favIcon} />
      <body className={`${sansation.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
