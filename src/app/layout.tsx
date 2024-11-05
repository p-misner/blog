import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";

import { League_Spartan } from "next/font/google";
import "./style/globals.css";
import PageHeader from "./components/header";
import ThemeProvider from "./components/providers";
import { ControlPanelWrapper } from "./style/controlStyle";
import ColorPickerComponent from "./components/colorcontrols";
import GoogleAnalytics from "./components/googleAnalytics";

export const metadata: Metadata = {
  title: "Blog || Priya Misner ",
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
      <body className={leaguespartan.className}>
        <GoogleAnalytics />
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
