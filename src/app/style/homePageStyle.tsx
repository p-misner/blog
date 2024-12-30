"use client";
import styled from "styled-components";
import {
  breakpoints,
  CoreColorInput,
  DarkOverlay_50,
  fontWeight,
  GridWrapper,
  LightOverlay_95,
  LightOverlay_97,
  spaceBlocks,
} from "./styleConstants";
import { ColorMixer } from "../components/utils";
import { Space_Mono } from "next/font/google";

const spacemono = Space_Mono({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const PageWrapper = styled.div<CoreColorInput>`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: props.color,
      returnFormat: "rgba",
    })};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='rgba(255, 255, 255,1)' fill-opacity='0.2'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const ContentWrapper = styled(GridWrapper)``;

export const BlogTitle = styled.h1<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 1,
    })};
  font-family: ${spacemono.style.fontFamily};
  font-size: 13vw;
  grid-column: 2 / span 5;
  margin-bottom: ${spaceBlocks.md};
`;
export const BlogSubtitle = styled.h3<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 0.7,
    })};
  font-family: ${spacemono.style.fontFamily};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  grid-column: 5 / span 4;
`;
export const BlogPostWrapper = styled.div<CoreColorInput>`
  border: 2px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: LightOverlay_95,
        returnFormat: "rgba",
      })};
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: props.color,
      returnFormat: "rgba",
    })};
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
    })};
  z-index: 20;
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 8;
  padding: ${spaceBlocks.lg};
  margin-bottom: ${spaceBlocks.md};
  row-gap: ${spaceBlocks.sm};
  @media screen and (max-width: ${breakpoints.md}) {
    grid-column: 2 / span 10;
  }
`;

export const TopSpacer = styled.div`
  height: 96px;
  grid-column: 1 / span 12;
`;
export const Spacer = styled.div<{ spaceAmount?: number }>`
  height: ${(props) => (props.spaceAmount ? `${props.spaceAmount}px` : "24px")};
  grid-column: 1 / span 12;
`;
export const Date = styled.h3`
  opacity: 0.6;
  font-weight: ${fontWeight.light};
`;

export const Title = styled.h2<CoreColorInput>`
  padding-top: 0px;
  grid-column: 2 / span 8;
  font-size: 24px;
  a {
    text-decoration: none;
    color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: LightOverlay_95,
        returnFormat: "rgba",
      })};
  }
  a:hover {
    text-decoration: underline;
  }
  span {
    visibility: hidden;
  }
  &:hover {
    span {
      visibility: visible;
      text-decoration: underline;
    }
  }
`;
export const Subtitle = styled.p`
  grid-column: 2 / span 8;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 350;
`;

export const ImageWrapper = styled.div`
  position: relative;
  grid-column: 2 / span 6;
  img {
    width: 100%;
    height: 100%;
    // max-height: 296px;
    position: relative !important;
    object-fit: cover; // Optional
  }
`;

export const PlaceholderImage = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightgray;
`;
