"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

export const PaintSplatter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);

  let canvas;

  const init = (p5: p5Types) => {
    p5.background(220, 220, 230, 255);
  };
  const setup = (p5: p5Types, canvasParentRef: any) => {
    if (containerRef.current) {
      canvas = p5.createCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2
      );
      canvas.parent(canvasParentRef);
      canvas.style("z-index", "1");
      init(p5);
    }
  };

  const mouseClicked = (p5: p5Types) => {
    if (!inDiv) return;
    let opacity = 255;
    let stdev = 35;
    let numSplashes = Math.floor(Math.random() * 4) + 2;
    let spread = 10;
    let offset = { x: 0, y: 0 };

    for (let j = 0; j < numSplashes; j++) {
      if (j > 0) {
        offset = {
          x: Math.random() * spread - spread * 2,
          y: Math.random() * spread - spread * 2,
        };
      }
      //   alert("numSpalsh", j);
      let colorA = Math.floor(Math.random() * 255);
      for (let i = 0; i < 200; i++) {
        // @ts-ignore (to access the native canvas context in TS)
        p5.drawingContext.shadowBlur = 15;
        // @ts-ignore
        p5.drawingContext.shadowColor = p5.color(0, 220, 230);
        p5.fill(220, 200, colorA, 220 - i);
        p5.strokeWeight(0);
        // @ts-ignore (to access the native canvas context in TS)
        p5.circle(
          p5.randomGaussian(p5.mouseX + offset.x, stdev),
          p5.randomGaussian(p5.mouseY + offset.y, stdev),
          35
        );
        // @ts-ignore (to access the native canvas context in TS)
        p5.drawingContext.shadowBlur = 0;
      }
    }
  };
  const draw = (p5: p5Types) => {};

  const windowResized = (p5: p5Types) => {
    if (containerRef.current) {
      p5.resizeCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2
      );
      init(p5);
    }
  };
  return (
    <CanvasWrapper color={[0, 255, 0, 1]}>
      <CanvasTitle>paint splatter </CanvasTitle>
      <CanvasOutlinep5
        ref={containerRef}
        $active={inDiv}
        onMouseEnter={() => setInDiv(true)}
        onMouseLeave={() => setInDiv(false)}
      >
        <Sketch
          setup={setup as any}
          draw={draw as any}
          mouseClicked={mouseClicked as any}
          windowResized={windowResized as any}
        />
      </CanvasOutlinep5>
    </CanvasWrapper>
  );
};
