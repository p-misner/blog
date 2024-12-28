import { RefObject, useEffect, useRef, useState } from "react";
import {
  ColorPickerWrapper,
  ColorSquare,
  ColorSquareWrapper,
  RowLayout,
} from "../style/colorSpaceStyle";
import { LabelInput } from "./Inputs";

export const ColorPicker = ({
  colors,
  colorIndex,
  setColors,

  openModal,
  setOpenModal,
}: {
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
  setColors: any;
  openModal: { num: number; open: boolean };
  setOpenModal: any;
}) => {
  const ColorInputRef = useRef<HTMLDivElement>(null);

  let parentPosition = ColorInputRef?.current?.getBoundingClientRect();
  const width = 256;

  return (
    <ColorSquareWrapper>
      <ColorSquare
        onClick={() => {
          setOpenModal({
            num: colorIndex,
            open: openModal.num == colorIndex ? !openModal.open : true,
          });
        }}
        ref={ColorInputRef}
        color={colors[colorIndex]}
      />
      {openModal.num == colorIndex && openModal.open && (
        <ColorPickerModal
          parentPosition={parentPosition}
          colors={colors}
          colorIndex={colorIndex}
          width={width}
        />
      )}
    </ColorSquareWrapper>
  );
};

const ColorPickerModal = ({
  parentPosition,
  colors,
  colorIndex,
  width,
}: {
  parentPosition: any;
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
  width: number;
}) => {
  return (
    <ColorPickerWrapper width={width} $parentPosition={parentPosition}>
      <ColorCanvas width={width} />
      <RowLayout>
        <LabelInput
          insideLabel="R"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].r}
        />
        <LabelInput
          insideLabel="G"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].g}
        />
        <LabelInput
          insideLabel="B"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].b}
        />
      </RowLayout>
    </ColorPickerWrapper>
  );
};

const ColorCanvas = ({ width }: { width: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // This effect runs after the component renders
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        let gradient = ctx.createLinearGradient(0, 0, width, 0);
        // Add left -->right color stops
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "red");

        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, 200);
        gradient = ctx.createLinearGradient(0, 0, 0, width);
        // Add left -->right color stops
        gradient.addColorStop(0, "rgba(255,255,255,0)");
        gradient.addColorStop(1, "black");

        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, 200);

        // let colorEllipse =
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // Render the canvas and the color code
  return (
    <div className="color-picker">
      <canvas ref={canvasRef} height={200} width={width} />
    </div>
  );
};
