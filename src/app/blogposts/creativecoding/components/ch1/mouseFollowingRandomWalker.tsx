"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

class Walker {
  x: number;
  y: number;
  constructor(height: number, width: number) {
    this.x = width / 2;
    this.y = height / 2;
  }

  step(p5: p5Types) {
    let stepAmount = 3;
    let xRand = Math.random(),
      yRand = Math.random();

    let xMouseDirection = Math.sign(p5.mouseX - this.x);
    let yMouseDirection = Math.sign(p5.mouseY - this.y);

    if (xRand > 0.4) {
      this.x += xRand * stepAmount * xMouseDirection;
    } else {
      this.x += xRand * stepAmount * xMouseDirection * -1;
    }
    if (yRand > 0.4) {
      this.y += yRand * stepAmount * yMouseDirection;
    } else {
      this.y += yRand * stepAmount * yMouseDirection * -1;
    }
  }
  show(p5: p5Types) {
    p5.stroke(20);
    p5.strokeWeight(5);
    p5.point(this.x, this.y);
  }
  centerUpdate(p5: p5Types, height: number, width: number) {
    this.x = width / 2;
    this.y = height / 2;
  }
}

export const MouseRandomWalker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const walkerRef = useRef<Walker | null>(null);
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
      p5.background(220, 220, 230, 255);

      let rect = containerRef.current.getBoundingClientRect();
      walkerRef.current = new Walker(rect.height, rect.width);
    }
  };

  const draw = (p5: p5Types) => {
    if (containerRef.current && inDiv) {
      if (walkerRef.current) {
        walkerRef.current.step(p5);
        walkerRef.current.show(p5);
      }
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
      <CanvasTitle>mouse following random walker</CanvasTitle>
      <CanvasOutlinep5
        ref={containerRef}
        $active={inDiv}
        onMouseEnter={() => setInDiv(true)}
        onMouseLeave={() => setInDiv(false)}
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
