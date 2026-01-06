import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doing The Dream — Navigate Career Anxiety with Clarity and Confidence",
  description: "Pre-order the new book 'Doing The Dream' and join the newsletter for exclusive insights.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

