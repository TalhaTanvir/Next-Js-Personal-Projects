import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovoFont = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Talha-Tanvir Portfolio",
  description: "A personal portfolio website showcasing my projects, skills, and experience as a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
