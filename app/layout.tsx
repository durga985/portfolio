import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.summary,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
