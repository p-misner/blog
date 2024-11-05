/* eslint-disable @typescript-eslint/no-explicit-aœny */
"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { ArrayRGBA, colorConverterService } from "./utils";
import { ThemeContext } from "./providers";
import { Hue, HueWrapper } from "../style/controlStyle";
// interface ColorPickerComponentProps {
//   style?: React.CSSProperties;
//   setColorPicked(color: ArrayRGBA): void;
//   colorPicked: ArrayRGBA;
//   //   handleColorSelected(color: string): void;
// }

export default function ColorPickerComponent() {
  const hueRef = useRef<any>();
  const hueSelectorRef = useRef<any>();
  const isDown = useRef<boolean>(false);
  const mousePosition = useRef<any>();
  const setSaturation = 80;
  const setLightness = 50;
  const MAX_HUE = 240; // hue range
  const MIN_HUE = 60;
  const theme = useContext(ThemeContext);

  const handleHueCursorPosition = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    const hueRect = hueRef.current.getBoundingClientRect();
    const hueHeight =
      hueRef.current.offsetHeight - hueSelectorRef.current.offsetHeight;

    const mousePositionY = e.clientY - hueRect.top - 8;

    mousePosition.current = {
      y:
        mousePositionY >= 0 && mousePositionY <= hueHeight
          ? mousePositionY
          : mousePositionY > hueHeight
          ? hueHeight
          : 0,
    };

    hueSelectorRef.current.style.top = mousePosition.current.y + "px";
    const hue = (mousePosition.current.y / hueHeight) * MAX_HUE + MIN_HUE;
    hueSelectorRef.current.style.backgroundColor = `hsl(${hue},${setSaturation}%,${setLightness}%)`;

    const hex = colorConverterService.hexToRGB(
      colorConverterService.hslToHex(hue, setSaturation, setLightness)
    );
    theme?.setColorPicked([hex.r, hex.g, hex.b, 1]);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    if (isDown.current) {
      handleHueCursorPosition(e);
    }
  };
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    isDown.current = true;
    handleHueCursorPosition(e);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (): void => {
    isDown.current = false;

    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <HueWrapper>
      <Hue
        color={theme?.colorPicked}
        ref={hueRef}
        onMouseDown={(e) => handleMouseDown(e)}
        // onClick={(e) => handleHueCursorPosition(e)}
        // onClick={(e) => console.log(e)}
      >
        <span ref={hueSelectorRef} />
      </Hue>
    </HueWrapper>
  );
}
