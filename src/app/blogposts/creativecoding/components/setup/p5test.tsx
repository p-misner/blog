"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

export const TestCanvasP5 = () => {
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

  const draw = (p5: p5Types) => {
    if (containerRef.current && inDiv) {
      let rect = containerRef.current.getBoundingClientRect();
      // let x = p5.mouseX > 0 ? p5.mouseX : p5.mouseX > rect.width ? 20 : 0;
      let x =
        p5.mouseX > rect.width ? rect.width : p5.mouseX < 0 ? 0 : p5.mouseX;
      let y =
        p5.mouseY > rect.height ? rect.height : p5.mouseY < 0 ? 0 : p5.mouseY;
      p5.background(220, 220, 230, 100);
      p5.circle(x, y, 20);
      p5.stroke(
        255 * (p5.mouseX / rect.width),
        100,
        255 * (p5.mouseY / rect.height)
      );
      p5.strokeWeight(2);
    }
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
      <CanvasTitle>mouse follower</CanvasTitle>
      <CanvasOutlinep5
        ref={containerRef}
        onMouseEnter={() => setInDiv(true)}
        onMouseLeave={() => setInDiv(false)}
        $active={inDiv}
      >
        <Sketch
          setup={setup as any}
          draw={draw as any}
          windowResized={windowResized as any}
        />
      </CanvasOutlinep5>
    </CanvasWrapper>
  );
};
