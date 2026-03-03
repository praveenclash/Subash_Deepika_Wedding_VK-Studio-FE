import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata = {
  // title: "Subash ♥ Deepika - Wedding",
  title: "Focult AD ",
  description:
    "With love in our hearts and joy in our souls, we invite you to celebrate the beautiful union of Subash and Deepika.",
  openGraph: {
    title: "Subash ♥ Deepika - Wedding",
    description:
      "Join us to celebrate our special day and bless us with your presence.",
    images: [
      {
        url: "/studioLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Subash and Deepika Wedding",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
