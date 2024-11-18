import {
  CurvedSpacer,
  NavButtonWrapper,
  NavWrapper,
  TestButtonWrapper,
} from "../style/navStyle";
import {
  ClickArrow,
  HoverArrow,
  ResetIcon,
  Share,
  ZoomIn,
  ZoomOut,
} from "./icons";
import ScantronImg from "../../../../../public/standardizedTest/scantronCover.png";
import Image from "next/image";
import { useState } from "react";

type NavBarTypes = {
  menuOpen: boolean;
  zoomAmount: number;
  setMenuOpen: any;
  setSelectMode: any;
  setSeed: any;
  setZoomAmount: any;
};

export function NavBar({
  menuOpen,
  setMenuOpen,
  setSelectMode,
  setSeed,
  zoomAmount,
  setZoomAmount,
}: NavBarTypes) {
  return (
    <NavWrapper>
      <NavButtonStandard
        symbol="reset"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setSeed(Math.random());
          setZoomAmount(1);
        }}
      />
      <NavButtonStandard
        symbol="clickArrow"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setSelectMode("click");
        }}
      />
      <NavButtonStandard
        symbol="hoverArrow"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setSelectMode("hover");
        }}
      />
      <NavButtonStandard
        symbol="zoomIn"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setZoomAmount(zoomAmount + 0.1 < 1.5 ? zoomAmount + 0.1 : zoomAmount);
        }}
      />
      <NavButtonStandard
        symbol="zoomOut"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setZoomAmount(zoomAmount - 0.1 > 0.2 ? zoomAmount - 0.1 : zoomAmount);
        }}
      />
      <CurvedSpacer direction="left" />
      <TestButtonWrapper
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <Image
          src={ScantronImg}
          alt="two small scantrons stacked on top of each other"
        />
        {/* Scantron{" "} */}
      </TestButtonWrapper>

      <CurvedSpacer direction="right" />
      <NavButtonStandard
        symbol="share"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          alert("this doesn't work");
        }}
      />
    </NavWrapper>
  );
}

type NavButtonType = {
  symbol:
    | "reset"
    | "clickArrow"
    | "hoverArrow"
    | "zoomIn"
    | "zoomOut"
    | "share";
  text: string;
  clickEvent?: any;
};

const NavButtonStandard = ({ symbol, text, clickEvent }: NavButtonType) => {
  return (
    <NavButtonWrapper onClick={clickEvent}>
      {" "}
      {iconSwitch({ symbol: symbol })}
    </NavButtonWrapper>
  );
};

function iconSwitch({
  symbol,
}: {
  symbol:
    | "reset"
    | "clickArrow"
    | "hoverArrow"
    | "zoomIn"
    | "zoomOut"
    | "share";
}) {
  switch (symbol) {
    case "reset":
      return <ResetIcon />;
    case "clickArrow":
      return <ClickArrow />;
    case "hoverArrow":
      return <HoverArrow />;
    case "zoomIn":
      return <ZoomIn />;
    case "zoomOut":
      return <ZoomOut />;
    case "share":
      return <Share />;
    default:
      return <p> none</p>;
  }
}
