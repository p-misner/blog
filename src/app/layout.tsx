import type { Metadata, Viewport } from "next";
import StyledComponentsRegistry from "./lib/registry";

import { League_Spartan, Space_Grotesk } from "next/font/google";
import "./style/globals.css";
import ThemeProvider from "./components/providers";

// import GoogleAnalytics from "./components/googleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Priya's Blog",
  description: "a blog created by priya misner",
};
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};
const leaguespartan = League_Spartan({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${leaguespartan.className} ${spaceGrotesk.variable}`}>
        <GoogleAnalytics gaId="G-T8BXEV93S0" />
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
