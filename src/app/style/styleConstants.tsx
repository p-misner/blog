"use client";

import styled from "styled-components";
import { League_Spartan, Nothing_You_Could_Do } from "next/font/google";
import { ArrayRGBA, ColorMixer } from "../components/utils";

export const leaguespartan = League_Spartan({ subsets: ["latin"] });
export const nothingyoucando = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

export const borderWidth = "1px";
export const borderRadius = "16px";
export const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "800px",
  lg: "1200px",
  xl: "1536px",
};

export const spaceBlocks = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

export type CoreColorInput = {
  color: ArrayRGBA;
  darktext?: boolean;
};
export const LightOverlay_97: ArrayRGBA = [255, 255, 255, 0.97];
export const LightOverlay_99: ArrayRGBA = [255, 255, 255, 0.99];
export const LightOverlay_95: ArrayRGBA = [255, 255, 255, 0.94];
export const LightOverlay_80: ArrayRGBA = [255, 255, 255, 0.8];
export const DarkOverlay_80: ArrayRGBA = [0, 0, 0, 0.7];
export const DarkOverlay_50: ArrayRGBA = [0, 0, 0, 0.6];
export const fontColor = {
  black: "black",
  white: "white",
  highlight: "rgba(3, 173, 168, 1)",
};

export const lineHeight = {
  normal: 1,
  spread: 1.2,
};
export const fontWeight = {
  regular: "400",
  light: "325",
  semibold: "500",
  bold: "600",
};
export const fontSize = {
  xs: "14px",
  sm: "20px",
  md: "24px",
  lg: "40px",
  xl: "64px",
};
export const GridWrapper = styled.div<CoreColorInput>`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg};
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;
  // row-gap: 64px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_50,
      returnFormat: "rgba",
    })};
`;
