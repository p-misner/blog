import styled from "styled-components";
/* `rgba(${props.colors[0].r},${props.colors[0].g},${props.colors[0].b})`}, 
     ${(props) => props.colors[1]},
    ${(props) => props.colors[2]}  */
type PageWrapperType = {
  colors: { r: number; g: number; b: number }[];
};
export const PageWrapper = styled.div<PageWrapperType>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.colors[0]}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    ${(props) =>
      `rgb(${props.colors[0].r},${props.colors[0].g},${props.colors[0].b})`},
    ${(props) =>
      `rgb(${props.colors[1].r},${props.colors[1].g},${props.colors[1].b})`}
  );

  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    ${(props) =>
      `rgb(${props.colors[0].r},${props.colors[0].g},${props.colors[0].b})`},
    ${(props) =>
      `rgb(${props.colors[1].r},${props.colors[1].g},${props.colors[1].b})`}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const ColorControls = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  max-width: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
};
export const ColorPickerWrapper = styled.div<ParentPositionType>`
  position: absolute;
  top: ${(props) =>
    `${props.$parentPosition.top - props.$parentPosition.height / 2}px`};
  left: ${(props) =>
    `${props.$parentPosition.x + props.$parentPosition.width}px`};
  min-width: 300px;
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
