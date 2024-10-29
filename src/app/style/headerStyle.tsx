"use client";

import styled from "styled-components";
import {
  breakpoints,
  CoreColorInput,
  DarkOverlay_50,
  DarkOverlay_80,
  fontColor,
  fontSize,
  leaguespartan,
  LightOverlay_97,
  LightOverlay_99,
  nothingyoucando,
} from "./styleConstants";
import { ColorMixer } from "../components/utils";

export const HeaderWrapper = styled.div<CoreColorInput>`
  position: fixed;
  width: 100%;
  background-color: ${(props) =>
    props.darktext
      ? ColorMixer({
          bottomLayer: props.color,
          topLayer: props.color,
          returnFormat: "rgba",
          opacity: 0.1,
        })
      : ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_97,
          returnFormat: "rgba",
          opacity: 0.1,
        })};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  z-index: 20;
`;
export const Header = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg};
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;
  row-gap: 64px;
  padding: 24px 0px;
  z-index: 100;
`;
export const NameHeader = styled.h3<CoreColorInput>`
  font-weight: 600;
  grid-column: 2 / span 5;
  font-size: ${fontSize.sm};
  font-weight: 400;
  a {
    text-decoration: none;
    color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.darktext ? DarkOverlay_50 : LightOverlay_97,
        returnFormat: "rgba",
      })};
  }
`;

export const HandwritingSpan = styled.span`
  font-family: ${nothingyoucando.style.fontFamily}, cursive;
  opacity: 0.5;
  font-size: 24px;
`;

export const MenuHeader = styled.div<CoreColorInput>`
  color: "red";
  display: flex;
  grid-column-start: span 3;
  grid-column-end: 12;
  flex-direction: row;
  justify-content: flex-end;
  font-size: ${fontSize.sm};
  font-weight: 400;
  a {
    margin-left: 32px;
    color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.darktext ? DarkOverlay_50 : LightOverlay_97,
        returnFormat: "rgba",
      })};
    text-decoration: none;
  }
    a:hover{
     text-decoration: underline;
  }
    }
`;
