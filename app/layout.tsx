import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hacker House Goa 2026 — Builder ID",
  description:
    "Create your Hacker House Goa 2026 Builder ID.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}