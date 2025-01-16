import { fontSize, fontWeight, spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";

const greenColor = "#049B73";
const whiteColor = "#F4F1ED";
type ButtonProps = {
  $clicked: boolean;
};

export const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 6px;
  margin: ${spaceBlocks.xs};
  margin-left: 64px;
`;
export const VerticalStripWrapper = styled.div`
  position: absolute;
  left: 32px;
  top: 90px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  column-gap: 0px;
  /* background-color: gainsboro; */
  width: 16px;
`;

export const VerticalCopyRightText = styled.div`
  rotate: 90deg;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 8px;
  height: 16px;
  position: absolute;
  top: 96px;
  left: 24px;
  transform-origin: 0% 0% 0px;
  width: 1100px;
  div {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: ${spaceBlocks.md};
  }
  p {
    color: ${greenColor};
    font-size: 12px;
  }
`;

export const ScantronWrapper = styled.div<{ $zoomAmount: number }>`
  margin: 64px auto;
  border: 2px solid grey;
  border-radius: ${spaceBlocks.xs};
  width: 464px;
  height: 1280px;
  position: relative;
  background-color: ${whiteColor};
  z-index: 50;
  top: 10px;
  transform: scale(${(props) => props.$zoomAmount});
  transform-origin: 30% 0% 0px;
  rotate: -8deg;
`;

type GreenBorderProps = {
  $width: number;
};
export const GreenBorderInfo = styled.div<GreenBorderProps>`
  width: ${(props) => `${props.$width}px`};
  height: 100%;
  border-radius: ${spaceBlocks.sm};
  border: 1.5px solid ${greenColor};
  display: flex;
  flex-direction: column;
`;
export const GreenTitle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${greenColor};
  color: ${whiteColor};
  text-align: center;
  text-transform: uppercase;
  &:first-child {
    border-radius: ${spaceBlocks.xs} ${spaceBlocks.xs} 0px 0px;
    padding: 4px 0px;
  }
  /* &:last-child {
    padding-bottom: 4px;
  } */
`;
export const GreenBordersButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: ${spaceBlocks.xs};
  padding: ${spaceBlocks.xs};
  border-right: 1.5px solid ${greenColor};
  width: 80%;
`;

export const ImportantBoxPosition = styled.div`
  position: absolute;
  top: 160px;
  left: 440px;
  rotate: 90deg;
  transform-origin: 0% 0% 0px;
  display: flex;
  flex-direction: column;
`;
export const ImportantInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 0px;
`;
export const ImportantLeftInfo = styled.div`
  padding: ${spaceBlocks.sm};
  border-right: 1.5px solid ${greenColor};
  width: 140px;
  /* background-color: red; */
  ul {
    list-style-type: square;
  }
  ul li {
    color: ${greenColor};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: ${fontWeight.bold};
    margin-bottom: 8px;
    margin-left: 4px;
    width: 100px;
  }
`;
export const ImportantRightInfo = styled.div`
  border-right: 1.5 solid ${greenColor};
  width: 160px;
  h4 {
    color: ${greenColor};
    font-size: 10px;
    font-weight: ${fontWeight.bold};
    text-align: center;
    text-transform: uppercase;
    width: 100px;
    margin: 4px auto 8px auto;
  }
  h5 {
    color: ${greenColor};
    font-size: 10px;
    font-weight: ${fontWeight.bold};
    text-align: left;
    text-transform: uppercase;
    width: 60px;
    margin-bottom: 4px;
    margin-top: 12px;
    margin-left: 12px;
  }
  ul {
    list-style-type: square;
  }
  ul li {
    color: ${greenColor};
    font-size: 8px;
    font-weight: ${fontWeight.bold};
    margin-bottom: 0px;
    margin-left: 20px;
    /* width: 100px; */
  }
`;

export const SubjScorePosition = styled.div`
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const NameSubjBoxPosition = styled.div`
  position: absolute;
  top: 520px;
  left: 404px;
  rotate: 90deg;
  transform-origin: 0% 0% 0px;
  display: flex;
  flex-direction: column;
`;

type InputWrapperType = {
  height?: number;
};
export const InputWrapper = styled.div<InputWrapperType>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: ${(props) => (props.height ? `${props.height}px` : "30px")};

  &:first-child div {
    border-radius: 10px 0px 0px 0px;
  }
  &:first-child input {
    border-radius: 0px 10px 0px 0px;
  }
  &:last-child :first-child div {
    border-radius: 0px 0px 0px 10px;
    border-bottom: 0;
  }
  &:last-child :last-child div {
    border-bottom: 0;
  }
  &:last-child input {
    border-radius: 0px 0px 10px 0px;
  }
`;
export const InputInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const InputTitle = styled.div`
  min-width: 64px;
  max-width: 64px;
  display: flex;
  align-items: center;
  background-color: ${greenColor};
  text-transform: uppercase;
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.xs};
  padding-left: 8px;
  color: ${whiteColor};
  border-bottom: 1px solid ${whiteColor};
  border-radius: 0px;
`;
export const InputInput = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${greenColor};

  input {
    border: 0px solid ${whiteColor};
    width: 100%;
    border-radius: 8px;
    font-family: var(--font-reeniebeenie), cursive;
    color: rgba(0, 0, 0, 0.7);
    font-size: 22px;
    border-radius: 0px;
    margin-left: 8px;
    background-color: ${whiteColor};
  }
  input:focus {
    background-color: none;
    border-color: none;
    outline: 0;
  }
`;

export const TestRecordPosition = styled.div`
  position: absolute;
  top: 880px;
  left: 410px;
  rotate: 90deg;
  transform-origin: 0% 0% 0px;
  display: flex;
  flex-direction: column;
`;
export const TRInputTitle = styled.div`
  min-width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${whiteColor};
  text-transform: uppercase;
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.xs};
  padding-left: 8px;
  color: ${greenColor};
  border-bottom: 1px solid ${greenColor};
  border-right: 1px solid ${greenColor};
  border-radius: 0px;
`;
export const Part1Postion = styled.h3`
  position: absolute;
  top: 76px;
  right: 112px;
  color: ${greenColor};
  text-transform: uppercase;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.xs};
`;

export const TopBlackBoxPosition = styled.div`
  position: absolute;
  top: 112px;
  right: 40px;
`;
export const BottomBlackBoxPosition = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 72px;
  right: 40px;
`;

export const ReorderFormPosition = styled.div`
  position: absolute;
  top: 888px;
  left: 454px;
  rotate: 90deg;
  transform-origin: 0% 0% 0px;
  display: flex;
  flex-direction: column;
  color: ${greenColor};
  font-size: ${fontSize.xs};
  text-align: center;
  width: 180px;
  h3 {
    font-weight: ${fontWeight.bold};
  }
`;
