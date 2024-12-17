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
import STARImg from "../../../../../public/standardizedTest/STAR.png";
import SATImg from "../../../../../public/standardizedTest/SAT.png";
import Image from "next/image";
import { useState } from "react";

type NavBarTypes = {
  menuOpen: boolean;
  zoomAmount: number;
  setMenuOpen: any;
  setSelectMode: any;
  setSeed: any;
  setZoomAmount: any;
  testType: "scantron" | "STAR" | "SAT";
};

export function NavBar({
  menuOpen,
  setMenuOpen,
  setSeed,
  zoomAmount,
  setZoomAmount,
  testType,
}: NavBarTypes) {
  return (
    <NavWrapper>
      <NavButtonStandard
        testType={testType}
        symbol="reset"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setSeed(Math.random());
          setZoomAmount(1);
        }}
      />
      {/* <NavButtonStandard
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
      /> */}
      <NavButtonStandard
        testType={testType}
        symbol="zoomIn"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setZoomAmount(zoomAmount + 0.1 < 1.5 ? zoomAmount + 0.1 : zoomAmount);
        }}
      />
      <NavButtonStandard
        testType={testType}
        symbol="zoomOut"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setZoomAmount(zoomAmount - 0.1 > 0.2 ? zoomAmount - 0.1 : zoomAmount);
        }}
      />
      <CurvedSpacer direction="left" />
      <TestButtonWrapper
        $testType={testType}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <Image
          src={TestImg(testType)}
          alt="two small scantrons stacked on top of each other"
        />
        {/* Scantron{" "} */}
      </TestButtonWrapper>

      {/* <CurvedSpacer direction="right" />
      <NavButtonStandard
        symbol="share"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          alert("this doesn't work");
        }}
      /> */}
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
  testType: "scantron" | "STAR" | "SAT";
};

const NavButtonStandard = ({
  symbol,
  text,
  clickEvent,
  testType,
}: NavButtonType) => {
  return (
    <NavButtonWrapper onClick={clickEvent} $testType={testType}>
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

function TestImg(testType: "scantron" | "SAT" | "STAR") {
  switch (testType) {
    case "scantron":
      return ScantronImg;
    case "SAT":
      return SATImg;
    case "STAR":
      return STARImg;
  }
}
