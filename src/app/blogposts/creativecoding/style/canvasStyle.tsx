import { ArrayRGBA, ColorMixer, ColorType } from "@/app/components/utils";
import {
  DarkOverlay_80,
  fontSize,
  LightOverlay_80,
  LightOverlay_95,
  LightOverlay_99,
  spaceBlocks,
} from "@/app/style/styleConstants";
import styled from "styled-components";

type DCTypes = { $isVisible: boolean; color: ArrayRGBA };

export const DrawingCanvas = styled.canvas<DCTypes>`
  border: 1px dashed
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  height: 100%;
  /* max-height: 440px; */
  width: 100%;
`;

type CanvasOutlineType = {
  $active?: boolean;
  $height?: number;
};
export const CanvasOutlinep5 = styled.div<CanvasOutlineType>`
  border: ${(props) => (props.$active ? "2px" : "1px")}
    ${(props) => (props.$active ? "solid" : "dashed")}
    ${(props) => (props.$active ? "#65c69c" : "#9c9c9c")};
  /* height: 100%; */
  /* height: 100%; */
  width: 100%;
  /* max-height: 400px; */
  height: ${(props) => (props.$height ? props.$height + "px" : "320px")};
`;

export const CanvasWrapper = styled.div<ColorType>`
  border: 1px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  border-radius: ${spaceBlocks.md};
  padding: ${spaceBlocks.md};
  position: relative;
  grid-column: 3 / span 8;
  margin: ${spaceBlocks.md} 0px;
  /* max-height: 440px; */
`;

export const PauseOverlay = styled.div<ColorType>`
  height: calc(100% - 30px);
  width: calc(100% - 30px);
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
      opacity: 0.6,
    })};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const PauseOverlayText = styled.p<ColorType>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_99,
      returnFormat: "rgba",
    })};
  text-shadow: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })}
    0px 0px 4px;
  font-size: ${fontSize.sm};
  font-family: monospace;
`;
export const CanvasTitle = styled.p`
  font-family: monospace;
  position: absolute;
  top: -${spaceBlocks.md};
  background-color: white;
  padding: ${spaceBlocks.xxs};
  border-radius: ${spaceBlocks.xxs};
  border: 1px solid black;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: ${spaceBlocks.xs};
  flex-direction: row;
  justify-content: flex-end;
  // width: 100%;
`;
