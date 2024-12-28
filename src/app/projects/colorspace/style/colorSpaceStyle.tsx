import styled from "styled-components";

type PageWrapperType = {
  $colors: { r: number; g: number; b: number }[];
};
export const PageWrapper = styled.div<PageWrapperType>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.$colors[0]}; /* fallback for old browsers */
  position: relative;
  /* Chrome 10-25, Safari 5.1-6 */
  background: radial-gradient(
      ellipse at left,
      ${(props) =>
        `rgb(${props.$colors[0].r},${props.$colors[0].g},${props.$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${(props) =>
        `rgb(${props.$colors[1].r},${props.$colors[1].g},${props.$colors[1].b})`},
      transparent
    );
`;

export const ColorControls = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  /* max-he: 32px; */
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  padding: 8px;
  box-shadow: inset -2px 2px 8px rgba(0, 0, 0, 0.6);
`;
type ColorType = {
  color: { r: number; g: number; b: number };
};
export const ColorSquare = styled.div<ColorType>`
  border-radius: 8px;
  background-color: ${(props) =>
    `rgba(${props.color.r},${props.color.g},${props.color.b})`};
  height: 32px;
  width: 32px;
  box-shadow: inset -2px 2px 4px rgba(0, 0, 0, 0.24);
`;

export type ParentPositionType = {
  $parentPosition: DOMRect;
  width: number;
};

export const ColorSquareWrapper = styled.div`
  position: relative;
`;
export const ColorPickerWrapper = styled.div<ParentPositionType>`
  position: absolute;
  top: ${(props) => `${props.$parentPosition.bottom - 4}px`};
  right: ${(props) => `${0}px`};
  width: ${(props) => props.width};
  min-height: 300px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: inset -2px 2px 12px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;

export const CanvasWrapper = styled.canvas`
  width: 200px;
  height: 200px;
`;
