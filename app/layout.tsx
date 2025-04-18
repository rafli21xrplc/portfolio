import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";
import { Weight } from "lucide-react";

const poppins = Poppins({subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

