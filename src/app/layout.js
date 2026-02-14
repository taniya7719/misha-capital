import "./globals.css";
import { Libre_Bodoni } from "next/font/google";
import { Inter } from "next/font/google";

export const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",   
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

