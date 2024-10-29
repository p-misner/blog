"use client";
import styled from "styled-components";
import { ColorMixer } from "../components/utils";
import { CoreColorInput, DarkOverlay_80 } from "./styleConstants";

export const ControlPanelWrapper = styled.div`
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  top: 40%;
  right: 20px;
  transform: translate(0, -112px);
`;

export const HueWrapper = styled.div`
  height: 192px;
  width: 24px;
  margin: 10px 0;
`;

export const Hue = styled.div<CoreColorInput>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
  border: 1px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  background: linear-gradient(
    to bottom,
    hsl(60, 80%, 50%),
    hsl(120, 80%, 50%),
    hsl(180, 80%, 50%),
    hsl(240, 80%, 50%),
    hsl(300, 80%, 50%)
  );
  display: flex;
  align-items: center;

  & span {
    position: absolute;
    left: 4px;
    top: 108px;
    width: 12px;
    height: 12px;
    border-radius: 16px;
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
    border: 2px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
  }
`;
