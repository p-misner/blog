import { fontSize, fontWeight, spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";

const greenColor = "#049B73";
const whiteColor = "#F4F1ED";
const blueColor = "#686ec3";
const lightBlueColor = "#D1D5DF";
const lightestBlueColor = "#E4E4EC";
const darkBlueColor = "#393e85";
const whiteSTARColor = "#F8FAF9";

export const ScantronButtonWrapper = styled.button<{
  $clicked: boolean;
}>`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => (props.$clicked ? "#010f0a" : whiteColor)};
  border: 1px solid ${greenColor};
  height: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
  height: 8px;
  width: 28px;
  max-width: 28px;

  color: ${greenColor};
  font-size: ${fontSize.xxs};
  font-weight: ${fontWeight.bold};
  text-shadow: 0px 2px ${whiteColor}, 0px -2px ${whiteColor},
    2px 0px ${whiteColor}, -2px 0px ${whiteColor};
  text-transform: uppercase;
`;
export const ScantronButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: ${spaceBlocks.xs};
  p {
    text-align: right;
    font-size: ${fontSize.xs};
    font-weight: ${fontWeight.bold};
    color: ${greenColor};
    width: 12px;
    max-width: 12px;
    margin-right: ${spaceBlocks.xs};
    /* margin-bottom: ${spaceBlocks.xxs}; */
  }
`;

export const STARButtonWrapper = styled.button<{
  $clicked: boolean;
}>`
  /* -webkit-appearance: none;
  appearance: none; */
  background-color: ${(props) => (props.$clicked ? "#010f0a" : whiteSTARColor)};
  border: 1px solid ${darkBlueColor};
  height: 20px;
  width: 16px;
  padding: 0px;

  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;

  color: ${blueColor};
  font-size: ${fontSize.xxs};
  font-weight: ${fontWeight.regular};
  text-transform: uppercase;
`;

export const STARButtonRow = styled.div`
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 4px;
  :first-child {
    margin-left: 4px;
  }
  :last-child {
    margin-right: 4px;
  }
  /* this paragraph is for row number */
  div {
    background-color: ${lightestBlueColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    height: 100%;
  }
  p {
    text-align: right;
    font-size: ${fontSize.xs};
    font-weight: ${fontWeight.regular};
    color: ${darkBlueColor};
    width: 12px;
    max-width: 12px;
    margin-right: ${spaceBlocks.xs};
    /* margin-bottom: ${spaceBlocks.xxs}; */
  }
`;
