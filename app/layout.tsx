import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/reuseable/footer";

export const metadata: Metadata = {
  title: "Travel Blog Website",
  description: "Leave your mark onall over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" ">
        <main className=""> {children} </main>

        <Footer />
      </body>
    </html>
  );
}
