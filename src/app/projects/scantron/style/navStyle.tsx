import { fontSize, spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";
import { DarkTestColor, TestColor } from "../utils/utils";
const backgroundColor = "#fff";

export const NavWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 0px;
  z-index: 100;
  align-items: center;
  /* justify-content: center; */
`;

export const NavButtonWrapper = styled.button<testTypeType>`
  background-color: ${backgroundColor};
  min-width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.xs};
  border: none;
  cursor: pointer;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.3);

  &:hover svg {
    background-color: ${(props) => TestColor({ testType: props.$testType })};
    padding: 6px;
    border-radius: 50%;
    path,
    line,
    circle {
      fill: #282828;
    }
  }
  &:first-child {
    border-radius: 50% 0% 0% 50%;
    padding-left: 24px;
    padding-right: 12px;
    border-left: 1px solid grey;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
  &:not(:first-child, :last-child) {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
  &:last-child {
    border-radius: 0% 50% 50% 0%;
    padding-right: 24px;
    border-right: 1px solid grey;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
`;

type testTypeType = {
  $testType: "scantron" | "STAR" | "SAT";
};
export const TestButtonWrapper = styled.div<testTypeType>`
  background-color: ${(props) => TestColor({ testType: props.$testType })};
  border: 1px solid grey;
  width: 104px;
  height: 104px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
  display: relative;
  img {
    height: 120px;
    width: auto;
    position: absolute;
    top: -16px;
    margin-left: 8px;
    /* left: 8px; */
  }
  &:hover {
    background-color: ${(props) =>
      DarkTestColor({ testType: props.$testType })};
    cursor: pointer;
  }
  &:hover img {
    height: 130px;
    width: auto;
    top: -26px;
  }
`;

type CurvedSpacerType = {
  direction: "left" | "right";
};
export const CurvedSpacer = styled.div<CurvedSpacerType>`
  width: 18px;
  height: 62px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-bottom: 1px solid grey;
  background: ${(props) =>
    props.direction == "right"
      ? `radial-gradient(circle at -240%, rgba(0, 0, 0, 0) 75%, grey 77%,grey 78%,${backgroundColor} 77%)`
      : `radial-gradient(circle at 340%, rgba(0, 0, 0, 0) 75%, grey 77%,grey 78%, ${backgroundColor} 75%)`};
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 0px;
  justify-content: center;
  position: fixed;
  bottom: 160px;
  right: 20px;
  z-index: 100;
  border-radius: ${spaceBlocks.sm};
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.3);
`;
type MenuItemTypes = {
  color: string;
};

export const MenuItem = styled.div<MenuItemTypes>`
  width: 140px;
  height: 120px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  &:first-child {
    border-radius: ${spaceBlocks.sm} ${spaceBlocks.sm} 0% 0%;
    border-top: 1px solid grey;
  }
  &:last-child {
    border-radius: 0% 0% ${spaceBlocks.sm} ${spaceBlocks.sm};
    border-bottom: 1px solid grey;
  }
  &:not(:first-child):not(:last-child) {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }

  img {
    max-height: 110px;
    width: auto;
    height: auto;
    max-width: 120px;
  }
  &:hover {
    opacity: 0.95;
  }
`;

export const MenuLabel = styled.h3<MenuItemTypes>`
  text-transform: capitalize;
  font-size: 28px;
  position: absolute;
  color: white;
  text-shadow: -1.5px -1.5px 0 ${(props) => props.color},
    1.5px -1.5px 0 ${(props) => props.color},
    -1.5px 1.5px 0 ${(props) => props.color},
    1.5px 1.5px 0 ${(props) => props.color}, 0px 0px 5px rgba(0, 0, 0, 0.3),
    0px 0px 5px ${(props) => props.color};
`;
