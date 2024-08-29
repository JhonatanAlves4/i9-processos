import { Blinker } from "next/font/google";
import "./globals.css";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata = {
  title: "I9 TI Solutions",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.80"
        />
      </head>
      <body className={blinker.className}>
        <div className="flex flex-col h-screen w-screen overflow-y-auto scrollable-container overflow-x-hidden bg-gradient-to-b from-customNewBlue to-customNewPurple">
          {children}
        </div>
      </body>
    </html>
  );
}
