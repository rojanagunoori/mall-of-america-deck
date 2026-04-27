import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mall of America Deck",
  description: "Interactive sales experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
