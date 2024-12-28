"use client";
import { createRef, RefObject, useState } from "react";
import {
  ColorControls,
  ColorSquare,
  PageWrapper,
} from "./style/colorSpaceStyle";
import { ColorPicker } from "./components/ColorPicker";

export default function ColorSpace() {
  const [colors, setColors] = useState([
    { r: 128, g: 170, b: 31 },
    { r: 26, g: 42, b: 108 },
    { r: 253, g: 187, b: 45 },
  ]);
  const [openModal, setOpenModal] = useState({ num: 0, open: false });
  return (
    <PageWrapper $colors={colors}>
      <ColorControls>
        {colors.map((color, i) => {
          return (
            <ColorPicker
              colors={colors}
              colorIndex={i}
              setColors={setColors}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          );
        })}
      </ColorControls>
    </PageWrapper>
  );
}
