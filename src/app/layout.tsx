import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-slate-800">{children}</body>
    </html>
  );
}
