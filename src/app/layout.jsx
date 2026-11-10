import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manojaas | Har Subah Ki Kadak Shuruat",
  description:
    "Discover Manojaas Assam CTC chaipatti: a bold, aromatic cup made for the everyday Indian chai ritual.",
  keywords: ["tea", "chaipatti", "Assam CTC", "Manojaas", "Indian chai"],
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
