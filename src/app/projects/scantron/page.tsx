"use client";

import { BackgroundWrapper } from "./style/deskStyle";
import Image from "next/image";
import DeskBG from "../../../../public/desk.png";
import ScantronCover from "../../../../public/standardizedTest/scantronCover.png";
import STARCover from "../../../../public/standardizedTest/STAR.png";
import SATCover from "../../../../public/standardizedTest/SAT.png";
import { Scantron } from "./components/scantron";
import { NavBar } from "./components/navigation";
import { useEffect, useState } from "react";
import { MenuItem, MenuLabel, MenuWrapper } from "./style/navStyle";
import { PopUpMessage } from "./components/popUpMessage";
import { STARTest } from "./components/starTest";
import { TestColor } from "./utils/utils";
import { SATTest } from "./components/satTest";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testType, setTestType] = useState<"scantron" | "STAR" | "SAT">(
    "scantron"
  );
  const [selectMode, setSelectMode] = useState<"click" | "hover">("click");
  const [zoomAmount, setZoomAmount] = useState(1);
  const [seed, setSeed] = useState(1);
  const [urlParams, setUrlParams] = useState({});

  useEffect(() => {
    const queryString = window.location.search;
    let urlObj: any = {};
    let urlArray =
      queryString.length > 6
        ? queryString
            .split("=")[1]
            .split("%2B")
            // .map((x) => console.log(x.split("_").length))
            .map((x) =>
              x.split("_").length == 2
                ? (urlObj[x.split("_")[0]] = x.split("_")[1])
                : ""
            )
        : {};
    setUrlParams(urlObj);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setSelectMode(selectMode == "hover" ? "click" : "hover");
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setSelectMode(selectMode == "hover" ? "hover" : "click");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <BackgroundWrapper>
      <Image
        style={{
          position: "fixed",
          opacity: 0.8,
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          objectPosition: "50% 0%",
        }}
        src={DeskBG}
        alt="texture of school desk"
      />

      {testType == "scantron" && (
        <Scantron
          key={seed}
          zoomAmount={zoomAmount}
          selectMode={selectMode}
          urlParams={urlParams}
          setUrlParams={setUrlParams}
        />
      )}
      {testType == "STAR" && <STARTest key={seed} zoomAmount={zoomAmount} />}
      {testType == "SAT" && <SATTest key={seed} zoomAmount={zoomAmount} />}

      <NavBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setSelectMode={setSelectMode}
        setSeed={setSeed}
        setZoomAmount={setZoomAmount}
        zoomAmount={zoomAmount}
        testType={testType}
        urlParams={urlParams}
        setUrlParams={setUrlParams}
      />
      <PopUpMessage testType={testType} />

      {menuOpen && (
        <MenuWrapper>
          <MenuItem
            onClick={() => {
              setTestType("scantron");
              setMenuOpen(false);
            }}
            color={
              testType == "scantron"
                ? TestColor({ testType: testType })
                : "white"
            }
          >
            <Image
              src={ScantronCover}
              alt="two small scantrons stacked on top of each other"
            />
            <MenuLabel color={TestColor({ testType: "scantron" })}>
              {" "}
              Scantron
            </MenuLabel>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setTestType("STAR");
              setMenuOpen(false);
            }}
            color={
              testType == "STAR" ? TestColor({ testType: testType }) : "white"
            }
          >
            {" "}
            <Image
              src={STARCover}
              alt="two small scantrons stacked on top of each other"
            />
            <MenuLabel color={TestColor({ testType: "STAR" })}> STAR</MenuLabel>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setTestType("SAT");
              setMenuOpen(false);
            }}
            color={
              testType == "SAT" ? TestColor({ testType: testType }) : "white"
            }
          >
            {" "}
            <Image
              src={SATCover}
              alt="two small scantrons stacked on top of each other"
            />
            <MenuLabel color={TestColor({ testType: "SAT" })}> SAT</MenuLabel>
          </MenuItem>
        </MenuWrapper>
      )}
    </BackgroundWrapper>
  );
}
