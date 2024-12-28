import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";

import { League_Spartan } from "next/font/google";
import "./style/globals.css";
import PageHeader from "./components/header";
import ThemeProvider from "./components/providers";
import { ControlPanelWrapper } from "./style/controlStyle";
import ColorPickerComponent from "./components/colorcontrols";
// import GoogleAnalytics from "./components/googleAnalytics";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Priya's Blog",
  description: "a blog created by priya misner",
};
const leaguespartan = League_Spartan({ subsets: ["latin"] });

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
      <body className={leaguespartan.className}>
        <GoogleAnalytics gaId="G-T8BXEV93S0" />
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
