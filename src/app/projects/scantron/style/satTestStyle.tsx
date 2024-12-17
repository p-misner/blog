import { spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";
const blueColor = "#049B73";
const whiteColor = "#faf8fa";

export type STARType = {
  zoomAmount: number;
  //   selectMode: "click" | "hover";
};
export const SATWrapper = styled.div<STARType>`
  margin: 64px auto;
  border: 2px solid grey;
  border-radius: ${spaceBlocks.xs};
  width: 800px;
  height: 1100px;
  position: absolute;
  background-color: ${whiteColor};
  z-index: 50;
  top: 10px;
  transform: scale(${(props) => props.zoomAmount});
  transform-origin: 60% 0% 0px;
  rotate: -3deg;
`;
