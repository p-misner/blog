"use client";
import { useState } from "react";
import {
  ColorControls,
  ColorSquare,
  PageWrapper,
} from "./style/colorSpaceStyle";
import { ColorPicker } from "./components/ColorPicker";

export default function ColorSpace() {
  const [colors, setColors] = useState([
    { r: 128, g: 128, b: 31 },
    { r: 26, g: 42, b: 108 },
    { r: 253, g: 187, b: 45 },
  ]);

  // useState([{
  //   "rgb(26, 42, 108)",
  //   "rgb(178, 31, 31)",
  //   "rgb(253, 187, 45)",}
  // ]);
  return (
    <PageWrapper colors={colors}>
      <ColorControls>
        <ColorPicker colors={colors} colorIndex={0} setColors={setColors} />
        <ColorPicker colors={colors} colorIndex={1} setColors={setColors} />
        {/* <ColorPicker color={colors[1]} setColors={setColors} />
        <ColorPicker color={colors[2]} setColors={setColors} /> */}
      </ColorControls>
    </PageWrapper>
  );
}
