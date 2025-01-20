import {
  CopiedText,
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
  urlParams: any;
  setUrlParams: any;
  setLinkCopy: any;
};

export function NavBar({
  menuOpen,
  setMenuOpen,
  setSeed,
  zoomAmount,
  setZoomAmount,
  testType,
  urlParams,
  setUrlParams,
  setLinkCopy,
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
          setUrlParams({
            scantron: {},
            STAR: {},
            SAT: {},
          });
          const toAddUrlParams = new URLSearchParams(window.location.search);
          toAddUrlParams.set("btns", "");
          window.history.replaceState(null, "", `?${toAddUrlParams}`);
        }}
      />

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

      <CurvedSpacer direction="right" />
      <NavButtonStandard
        testType={testType}
        symbol="share"
        text="button1"
        clickEvent={() => {
          setMenuOpen(false);
          setLinkCopy(true);
          setTimeout(() => {
            setLinkCopy(false);
          }, 2000);
          const toAddUrlParams = new URLSearchParams(window.location.search);
          let urlString: string[] = [];
          Object.entries(urlParams[testType]).map((x) =>
            urlString.push(`${x[0]}_${x[1]}+`)
          );
          toAddUrlParams.set("btns", urlString.join(""));
          toAddUrlParams.set("testtype", testType);
          window.history.replaceState(null, "", `?${toAddUrlParams}`);
          // navigator.clipboard.writeText(window.location.href);

          const copyString: string = window.location.href;
          copyToClipboard(copyString);
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

/**
 * Copy a string to clipboard
 * @param  {String} string         The string to be copied to clipboard
 * @return {Boolean}               returns a boolean correspondent to the success of the copy operation.
 * @see https://stackoverflow.com/a/53951634/938822
 */
function copyToClipboard(string: string) {
  let textarea;
  let result;

  try {
    textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "true");
    textarea.setAttribute("contenteditable", "true");
    textarea.style.position = "fixed"; // prevent scroll from jumping to the bottom when focus is set.
    textarea.value = string;

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    const range = document.createRange();
    range.selectNodeContents(textarea);

    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }

    textarea.setSelectionRange(0, textarea.value.length);
    result = document.execCommand("copy");
  } catch (err) {
    console.error(err);
    result = null;
  } finally {
    if (textarea) {
      document.body.removeChild(textarea);
    }
  }

  // manual copy fallback using prompt
  if (!result) {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const copyHotkey = isMac ? "⌘C" : "CTRL+C";
    result = prompt(`Press ${copyHotkey}`, string); // eslint-disable-line no-alert
    if (!result) {
      return false;
    }
  }
  return true;
}
