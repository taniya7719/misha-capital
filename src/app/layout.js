import "./globals.css";
import { Libre_Bodoni } from "next/font/google";

export const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

