import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ketan Tejani - Senior Technology Officer",
  description: "Builder and leader of innovative strategies and solutions-driven teams, delivering leading-edge technology systems that drive business performance and efficiency for trading and operations systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
