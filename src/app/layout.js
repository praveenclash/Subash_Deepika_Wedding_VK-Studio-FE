import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SimpleMusicButton from "./Components/SimpleMusicButton/SimpleMusicButton";

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
  title: "Subash ♥ Deepika - Wedding",
  description:
    "With love in our hearts and joy in our souls, we invite you to celebrate the beautiful union of Subash and Deepika.",

  // Open Graph Tags for WhatsApp/Facebook Preview
  openGraph: {
    title: "Subash ♥ Deepika - Wedding",
    description:
      "Join us to celebrate our special day and bless us with your presence.",
    url: "https://vk-studio-subash-deepis.vercel.app", // உங்க domain
    siteName: "Subash ♥ Deepika Wedding",
    images: [
      {
        url: "https://drive.google.com/file/d/1tx4Lz5J8rypNpVjb6Qq1gNT2x0HCgjmp/view", // Full URL
        width: 1200,
        height: 630,
        alt: "Subash and Deepika Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Subash ♥ Deepika - Wedding",
    description:
      "Join us to celebrate our special day and bless us with your presence.",
    images: ["https://drive.google.com/file/d/1tx4Lz5J8rypNpVjb6Qq1gNT2x0HCgjmp/view"],
  },

  // Additional Meta Tags
  other: {
    "Content-Security-Policy":
      "default-src 'self'; connect-src 'self' https://vkfotos.site;",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <head>
        {/* WhatsApp Preview Meta Tags - Direct Add */}
        <meta property="og:title" content="Subash ♥ Deepika - Wedding" />
        <meta
          property="og:description"
          content="Join us to celebrate our special day and bless us with your presence."
        />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1tx4Lz5J8rypNpVjb6Qq1gNT2x0HCgjmp/view"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://vk-studio-subash-deepis.vercel.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Subash ♥ Deepika - Wedding" />
        <meta
          name="twitter:description"
          content="Join us to celebrate our special day and bless us with your presence."
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/file/d/1tx4Lz5J8rypNpVjb6Qq1gNT2x0HCgjmp/view"
        />
      </head>
      <body className="antialiased">
        {children}
        <SimpleMusicButton />
      </body>
    </html>
  );
}
