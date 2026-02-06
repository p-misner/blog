"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

export const DrawDandelions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);

  let canvas;

  const init = (p5: p5Types) => {
    p5.background(20, 220, 230, 255);
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
    let stdev = 35;
    let numSplashes = Math.floor(Math.random() * 4) + 2;
    let spread = 15;
    let offset = { x: 0, y: 0 };
    let mousePos = { x: p5.mouseX, y: p5.mouseY };
    //draw stem
    p5.fill(0, 128, 0, 100);
    p5.rect(mousePos.x - 5, mousePos.y, 10, 400 - mousePos.y);

    //draw petals
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
        p5.drawingContext.shadowBlur = 115;
        // @ts-ignore
        p5.drawingContext.shadowColor = p5.color(235, 255, 230);
        p5.fill(220, 200, colorA, 220 - i);
        p5.strokeWeight(0);
        // @ts-ignore (to access the native canvas context in TS)
        p5.circle(
          p5.randomGaussian(mousePos.x + offset.x, stdev),
          p5.randomGaussian(mousePos.y + offset.y, stdev),
          15
        );
        // @ts-ignore (to access the native canvas context in TS)
        p5.drawingContext.shadowBlur = 0;
      }
    }
  };
  const draw = (p5: p5Types) => {
    p5.strokeWeight(0);
  };

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
      <CanvasTitle>draw a dandelion on click </CanvasTitle>
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
