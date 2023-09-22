import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Startrupers Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "body-class")}>
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
