import { fontSize, spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";

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

export const NavButtonWrapper = styled.button`
  background-color: rgba(255, 255, 255, 1);
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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  &:hover svg {
    background-color: rgba(0, 150, 73, 0.9);
    padding: 6px;
    border-radius: 50%;
    path,
    line,
    circle {
      fill: #003b1c;
    }
  }
  &:first-child {
    border-radius: 50% 0% 0% 50%;
    padding-left: 24px;
    padding-right: 12px;
  }
  &:last-child {
    border-radius: 0% 50% 50% 0%;
    padding-right: 24px;
  }
`;

export const TestButtonWrapper = styled.div`
  background-color: rgb(0, 118, 57);
  border: none;
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
    background-color: #006330;
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
  /* background-color: white; */
  width: 18px;
  height: 64px;
  background: ${(props) =>
    props.direction == "right"
      ? "radial-gradient(circle at -240%, rgba(0, 0, 0, 0) 75%, white 75%)"
      : "radial-gradient(circle at 340%, rgba(0, 0, 0, 0) 75%, #fff 75%)"};
  /* background: radial-gradient(circle at 200%, rgba(144, 0, 0, 1) 75%, #fff 75%); */
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 0px;
  justify-content: center;
  position: fixed;
  bottom: 160px;
  right: 72px;
  z-index: 100;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  border-radius: ${spaceBlocks.sm};
`;
type MenuItemTypes = {
  color: string;
};

export const MenuItem = styled.div<MenuItemTypes>`
  width: 140px;
  height: 120px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    border-radius: ${spaceBlocks.sm} ${spaceBlocks.sm} 0% 0%;
  }
  &:last-child {
    border-radius: 0% 0% ${spaceBlocks.sm} ${spaceBlocks.sm};
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
