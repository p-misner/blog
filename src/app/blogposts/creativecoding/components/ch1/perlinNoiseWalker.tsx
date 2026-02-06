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
  tx: number;
  ty: number;

  constructor(height: number, width: number) {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 2;
  }

  step(p5: p5Types) {
    this.x = p5.map(p5.noise(this.tx), 0, 1, 0, p5.width);
    this.y = p5.map(p5.noise(this.ty), 0, 1, 0, p5.height);

    this.tx += 0.01;
    this.ty += 0.01;

    // this.x = p5.constrain(xstep + this.x, 0, p5.width);
    // this.y = p5.constrain(ystep + this.y, 0, p5.height);
  }
  show(p5: p5Types) {
    p5.stroke(0);
    p5.strokeWeight(2);

    //circles near edge are black
    let isNearEdge =
      this.x <= 20 ||
      this.x >= p5.width - 10 ||
      this.y <= 20 ||
      this.y >= p5.height - 10;

    p5.fill(isNearEdge ? 20 : 255);

    p5.circle(this.x, this.y, 20);
  }
}
export const PerlinNoiseWalker = () => {
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
        containerRef.current.offsetHeight - 2,
      );
      canvas.parent(canvasParentRef);
      canvas.style("z-index", "1");
      init(p5);
      walkerRef.current = new Walker(p5.height, p5.width);
    }
  };

  const draw = (p5: p5Types) => {
    if (walkerRef.current && inDiv) {
      walkerRef.current.step(p5);
      walkerRef.current.show(p5);
    }
  };

  const windowResized = (p5: p5Types) => {
    if (containerRef.current) {
      p5.resizeCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      init(p5);
    }
  };
  return (
    <CanvasWrapper color={[0, 255, 0, 1]}>
      <CanvasTitle>perlin noise walker </CanvasTitle>
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
