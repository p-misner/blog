import { spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";
const blueColor = "#049B73";
const whiteColor = "#F8FAF9";

export type STARType = {
  zoomAmount: number;
  //   selectMode: "click" | "hover";
};
export const STARWrapper = styled.div<STARType>`
  margin: 64px auto;
  border: 2px solid grey;
  border-radius: ${spaceBlocks.xs};
  width: 1100px;
  height: 800px;
  position: absolute;
  background-color: ${whiteColor};
  z-index: 50;
  top: 10px;
  transform: scale(${(props) => props.zoomAmount});
  transform-origin: 30% 0% 0px;
  rotate: -3deg;
`;
