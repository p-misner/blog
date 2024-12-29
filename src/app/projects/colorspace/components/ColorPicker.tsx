import { RefObject, useEffect, useRef, useState } from "react";
import {
  ColorPickerWrapper,
  ColorSquare,
  ColorSquareWrapper,
  RowLayout,
} from "../style/colorSpaceStyle";
import { LabelInput } from "./Inputs";
import { SketchPicker } from "react-color";
export const ColorPicker = ({
  colors,
  colorIndex,
  setColors,
  openModal,
  setOpenModal,
}: {
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
  setColors: (colors: { r: number; g: number; b: number }[]) => void;
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
          setColors={setColors}
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
  setColors,
}: {
  parentPosition: any;
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
  width: number;
  setColors: (colors: { r: number; g: number; b: number }[]) => void;
}) => {
  return (
    <ColorPickerWrapper width={width} $parentPosition={parentPosition}>
      <ColorCanvas
        colors={colors}
        colorIndex={colorIndex}
        width={width}
        setColors={setColors}
      />
      {/* <SketchPicker
        color={colors[colorIndex]}
        onChangeComplete={(e) => console.log(e)}
      /> */}
      <HueGradientCanvas
        width={width}
        colors={colors}
        setColors={setColors}
        colorIndex={colorIndex}
      />
      <RowLayout>
        <LabelInput
          insideLabel="R"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].r}
          onChangeCallback={(value: number) => {
            let newColor = {
              r: value,
              g: colors[colorIndex].g,
              b: colors[colorIndex].b,
            };
            colors[colorIndex] = newColor;
            setColors([...colors]);
          }}
        />
        <LabelInput
          insideLabel="G"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].g}
          onChangeCallback={(value: number) => {
            let newColor = {
              r: colors[colorIndex].r,
              g: value,
              b: colors[colorIndex].b,
            };
            colors[colorIndex] = newColor;
            setColors([...colors]);
          }}
        />
        <LabelInput
          insideLabel="B"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].b}
          onChangeCallback={(value: number) => {
            let newColor = {
              r: colors[colorIndex].r,
              g: colors[colorIndex].g,
              b: value,
            };
            colors[colorIndex] = newColor;
            setColors([...colors]);
          }}
        />
      </RowLayout>
    </ColorPickerWrapper>
  );
};

const ColorCanvas = ({
  width,
  colors,
  colorIndex,
  setColors,
}: {
  width: number;
  setColors: (colors: { r: number; g: number; b: number }[]) => void;
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
}) => {
  const height = width;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let initVal = rgb2hsv(colors[colorIndex]);
  const [pos, setPos] = useState({
    x: initVal.s > 0.5 ? initVal.s * width : width - initVal.s * width,
    y: initVal.v > 0.5 ? height - initVal.v * height : initVal.v * height,
  });

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.fillStyle = `hsl(${rgb2hsv(colors[colorIndex]).h * 360},100%,50%`;
        ctx.fillRect(0, 0, width, height);

        // Add left -->right color stops
        let gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(1, " rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Add top -->bottom color stops
        gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(1, "rgba(0,0,0,1)");
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4, 0, 2 * Math.PI);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1.5;
        ctx.fillStyle = `rgb(${colors[colorIndex].r},${colors[colorIndex].g},${colors[colorIndex].b})`;
        ctx.fill();
        ctx.stroke();
      }
    }
  }, [pos, colors]);

  useEffect(() => {
    setPos(rgb2coordinates(width, colors[colorIndex]));
  }, [colors]);
  // Render the canvas and the color code
  return (
    <div className="color-picker">
      <canvas
        ref={canvasRef}
        height={width}
        width={width}
        onClick={(e) => {
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              let xPos =
                e.clientX - canvasRef.current?.getBoundingClientRect()?.left;
              let yPos =
                e.clientY - canvasRef.current?.getBoundingClientRect()?.top;
              let imageData = ctx.getImageData(xPos, yPos, 1, 1);
              let newColor = {
                r: imageData.data[0],
                g: imageData.data[1],
                b: imageData.data[2],
              };
              colors[colorIndex] = newColor;
              setPos({
                x: xPos,
                y: yPos,
              });
              setColors([...colors]);
            }
          }
        }}
      />
    </div>
  );
};
const HueGradientCanvas = ({
  width,
  setColors,
  colors,
  colorIndex,
}: {
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
  width: number;
  setColors: (colors: { r: number; g: number; b: number }[]) => void;
}) => {
  const height = 16;

  const [pos, setPos] = useState({
    x: rgb2hsv(colors[colorIndex]).h * width,
    y: height / 2,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    // This effect runs after the component renders
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        let gradient = ctx.createLinearGradient(0, 0, width, 0);
        for (let i = 0; i <= 360; i = i + 10) {
          gradient.addColorStop(i / 380, `hsl(${i}, 100%, 50%)`);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.fill();

        let currentColorHue = rgb2hsv(colors[colorIndex]);
        console.log(currentColorHue);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4, 0, 2 * Math.PI);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1.5;
        ctx.fillStyle = `hsl(${currentColorHue},100%,50%})`;
        ctx.fill();
        ctx.stroke();
      }
    }
  }, [pos, colors]);

  useEffect(() => {
    setPos({
      x: rgb2hsv(colors[colorIndex]).h * width,
      y: height / 2,
    });
  }, [colors]);
  return (
    <div>
      {" "}
      <canvas
        height={height}
        width={width}
        ref={canvasRef}
        onClick={(e) => {
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              let xPos =
                e.clientX - canvasRef.current?.getBoundingClientRect()?.left;
              let yPos = height / 2; //center ellipse in gradient canvas

              //calculating change in hue on original color
              let imageData = ctx.getImageData(xPos, yPos, 1, 1);
              let newColor = {
                r: imageData.data[0],
                g: imageData.data[1],
                b: imageData.data[2],
              };
              let oldColor = rgb2hsv(colors[colorIndex]);
              colors[colorIndex] = hsv2rgb({
                h: rgb2hsv(newColor).h,
                s: oldColor.s,
                v: oldColor.v,
              });

              //set x position in canvas; overall colors
              setPos({
                x: xPos,
                y: yPos,
              });
              setColors([...colors]);
            }
          }
        }}
      />
    </div>
  );
};

function rgb2hsv(color: { r: number; g: number; b: number }) {
  let { r, g, b } = color;

  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    if (h) {
      h /= 6;
      return { h: h, s: s, v: v };
    }
  }
  return { h: 0, s: s, v: v };
}
function hsv2rgb(color: { h: number; s: number; v: number }) {
  let { h, s, v } = color;
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
    default:
      (r = 0), (g = 0), (b = 0);
  }

  return { r: r * 255, g: g * 255, b: b * 255 };
}

function rgb2coordinates(
  width: number,
  color: { r: number; g: number; b: number }
) {
  let { h, s, v } = rgb2hsv(color);

  //hue does nothing
  const height = width;

  return { x: s * width, y: height - v * height };
}
