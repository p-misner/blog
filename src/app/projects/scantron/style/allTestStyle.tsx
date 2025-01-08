import styled from "styled-components";

type BlackSquareType = {
  width?: number;
  height?: number;
  $gapBelow?: number;
  $gapRight?: number;
};
export const BlackSquare = styled.div<BlackSquareType>`
  background-color: black;
  width: ${(props) => (props.width ? `${props.width}px` : "16px")};
  height: ${(props) => (props.height ? `${props.height}px` : "2px")};
  margin-bottom: ${(props) =>
    props.$gapBelow ? `${props.$gapBelow}px` : "12px"};
  margin-right: ${(props) =>
    props.$gapRight ? `${props.$gapRight}px` : "0px"};
`;
