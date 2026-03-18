import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BATIVILLE Tradind Co | Fueling the Future of African Enterprise",
  description:
    "BATIVILLE Tradind Co is a premier African investment firm providing growth financing, export partnerships, and technology advisory to high-potential enterprises across Nigeria and the continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
