import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const roboto = Roboto({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Job Portal",
  description: "Job portal landing page using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
