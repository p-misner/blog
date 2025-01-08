import { spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";
const blueColor = "#686ec3";
const lightBlueColor = "#D1D5DF";
const lightestBlueColor = "#E4E4EC";
const darkBlueColor = "#393e85";
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

export const HorizontalStripWrapper = styled.div`
  position: absolute;
  left: 48px;
  top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const TopLine = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const LastNameBoxWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 48px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border: 1px solid ${darkBlueColor};
  /* background-color: red; */
`;

export const LastNameTitle = styled.div`
  /* width: 100%; */
  background-color: ${lightBlueColor};
  color: ${darkBlueColor};
  text-transform: uppercase;
  padding: 12px 0px;
  text-align: center;
`;
export const LetterInputRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  :nth-child(even) {
    background: ${lightestBlueColor};
  }
`;
export const LetterInputs = styled.input`
  width: 16px;
  height: 24px;
  border: none;
  font-size: 24px;
  text-align: center;
`;
