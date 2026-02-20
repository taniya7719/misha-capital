import "./globals.css";

import { Inter } from "next/font/google";
export const metadata = {
  title: "Investment Banking Advisory | Misha Capital",
  description:
    "Misha Capital, a trusted investment banking advisory firm, specializes in debt advisory, capital raising, M&A, and private equity fundraising.",
  keywords: [
    "international markets",
    "seed funding",
    "capital raising",
    "project financing",
    "mergers & acquisitions advisory",
    "corporate debt",
    "domestic markets",
    "investment banking partner",
    "investment banking advisory",
    "debt advisory",
    "private equity solutions",
    "structured debt solutions",
    "working capital financing",
    "mezzanine funding",
    "supply chain finance",
    "debt restructuring services",
    "working capital loan",
    "asset based loan",
    "unsecured working capital loan",
    "working capital lenders"
  ],
};




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

