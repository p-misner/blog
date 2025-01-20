import { fontSize, fontWeight, spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";
const blueColor = "#686ec3";
const lightBlueColor = "#D1D5DF";
const lightestBlueColor = "#E4E4EC";
const darkBlueColor = "#393e85";
const whiteColor = "#F8FAF9";

export type STARType = {
  $zoomAmount: number;
  $selectMode: "click" | "hover";
  $urlParams?: any;
  setUrlParams?: any;
  testType: "scantron" | "STAR" | "SAT";
};
export const STARWrapper = styled.div<{ $zoomAmount: number }>`
  margin: 64px auto;
  border: 2px solid grey;
  border-radius: ${spaceBlocks.xs};
  width: 1100px;
  height: 800px;
  position: absolute;
  background-color: ${whiteColor};
  z-index: 50;
  top: 10px;
  transform: scale(${(props) => props.$zoomAmount});
  transform-origin: 30% 0% 0px;
  rotate: -3deg;
  opacity: 0.95;
`;

export const HorizontalStripWrapper = styled.div`
  position: absolute;
  left: 38px;
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
  left: 38px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border: 1px solid ${darkBlueColor};
  /* background-color: red; */
`;
export const IDBoxWrapper = styled.div`
  position: absolute;
  top: 112px;
  left: 322px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border: 1px solid ${darkBlueColor};
`;
export const MiscBoxWrapper = styled.div`
  position: absolute;
  bottom: 34px;
  left: 322px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border: 1px solid ${darkBlueColor};
`;
export const MiscTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const MiscABCDEFWrapper = styled.div`
  /* width: 100px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${lightBlueColor};
  border-right: 1px solid ${darkBlueColor};
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${lightBlueColor};
  border-bottom: 1px solid ${darkBlueColor};
  p {
    padding: 0px 4px;
    text-transform: capitalize;
    color: ${darkBlueColor};

    font-size: ${fontSize.xs};
    font-weight: ${fontWeight.regular};
  }
`;

export const LabeledLetterRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  :nth-child(even) {
    /* background: ${lightestBlueColor}; */
  }
  :first-child {
    border-left: 0px solid ${darkBlueColor};
  }
  div {
    width: 20px;
    height: 22px;
    color: ${darkBlueColor};
    border-top: 1px solid ${darkBlueColor};
    /* border-bottom: 1px solid ${darkBlueColor}; */
    border-left: 1px solid ${darkBlueColor};
    border-right: 0px solid ${darkBlueColor};
    font-size: 16px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-size: ${fontSize.xs};
    font-weight: ${fontWeight.regular};
  }
`;

export const BoxTitle = styled.div<{ padding?: number }>`
  /* width: 100%; */
  background-color: ${lightBlueColor};
  color: ${darkBlueColor};
  text-transform: uppercase;
  padding: ${(props) => (props.padding ? `${props.padding}px` : "12px")} 0px;
  text-align: center;
`;
export const BoxSubitle = styled.div<{ padding?: number }>`
  background-color: ${lightBlueColor};
  color: ${darkBlueColor};
  text-transform: uppercase;
  padding: ${(props) => (props.padding ? `${props.padding}px` : "12px")} 2px;
  text-align: center;
  font-size: ${fontSize.xxs};
`;

export const LetterInputRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  :nth-child(even) {
    background: ${lightestBlueColor};
  }
  :first-child {
    border-left: 0px solid ${darkBlueColor};
  }
`;
export const LetterInputs = styled.input<{ $backgroundColor?: string }>`
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  max-width: 16px;
  height: 24px;
  max-height: 24px;
  border-top: 1px solid ${darkBlueColor};
  border-bottom: 1px solid ${darkBlueColor};
  border-left: 1px solid ${darkBlueColor};
  border-right: 0px solid ${darkBlueColor};
  font-size: 24px;
  text-align: center;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "none"};
`;

export const HundredBubbleColumnsWrapper = styled.div`
  position: absolute;
  bottom: 34px;
  right: 32px;
  display: flex;
  flex-direction: row;
  min-height: 100px;
  column-gap: 12px;
`;
export const BubbleColumnWrapper = styled.div`
  flex-direction: column;
  /* border: 1px solid ${darkBlueColor}; */
  min-width: 130px;
  :first-child {
    :nth-child(2),
    :nth-child(3),
    :nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      border-top: 1px solid ${darkBlueColor};
    }
  }
  :last-child {
    :nth-child(2),
    :nth-child(3),
    :nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      border-bottom: 1px solid ${darkBlueColor};
    }
  }
`;
export const TrueFalseWrapper = styled.div`
  position: relative;
`;
export const TrueAnnotation = styled.p`
  position: absolute;
  top: -14px;
  left: 34px;
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.regular};
  color: ${darkBlueColor};
`;
export const FalseAnnotation = styled.p`
  position: absolute;
  top: -14px;
  left: 56px;
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.regular};
  color: ${darkBlueColor};
`;

export const BubbleColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-right: 1px solid ${darkBlueColor};
  /* padding-bottom: 1.5px; */
  :nth-child(2) {
    border-left: 1px solid ${darkBlueColor};
    padding-left: 4px;
  }

  div {
    padding-right: 6px;
    padding-bottom: 2px;
  }
  p {
    text-align: right;
    font-size: ${fontSize.xs};
    font-weight: ${fontWeight.bold};
    color: ${darkBlueColor};
    width: 7px;
    margin-right: ${spaceBlocks.xs};
  }
`;

export const BlueHighlight = styled.div`
  background-color: ${lightestBlueColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 20px;
  height: 21px;
`;

export const InstructionalWrapper = styled.div`
  position: absolute;
  top: 64px;
  left: 330px;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  color: ${darkBlueColor};
`;

export const PoorGoodWrapper = styled.div`
  position: absolute;
  top: 44px;
  right: 30px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  border-left: 1px solid ${darkBlueColor};
  border-bottom: 1px solid ${darkBlueColor};
  width: 140px;
  h2 {
    color: ${darkBlueColor};
    width: 40px;
    padding-top: 2px;
    /* background-color: red; */
    margin-right: 8px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 4px;
    margin-bottom: 2px;
  }
`;

export const DeptWrapper = styled.div`
  position: absolute;
  top: 112px;
  left: 520px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${darkBlueColor};
  :last-child {
    border-right: 1px solid ${darkBlueColor};
  }
  h2 {
    padding-right: 4px;
  }
`;
export const CourseWrapper = styled.div`
  position: absolute;
  top: 112px;
  left: 740px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${darkBlueColor};
  :last-child {
    border-right: 1px solid ${darkBlueColor};
  }
  h2 {
    padding-right: 4px;
  }
`;
export const DateWrapper = styled.div`
  position: absolute;
  top: 112px;
  right: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${darkBlueColor};
  :last-child {
    border-right: 1px solid ${darkBlueColor};
  }
  h2 {
    padding-right: 4px;
  }
`;

export const LongBorder = styled.div`
  position: absolute;
  top: 112px;
  left: 490px;
  border-top: 1px solid ${darkBlueColor};
  width: 578px;
  height: 2px;
`;
