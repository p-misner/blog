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
    // let xstep = Math.floor(Math.random() * 9) - 4;
    // let ystep = Math.floor(Math.random() * 9) - 4;

    let xstep = p5.randomGaussian(0, 2);
    let ystep = p5.randomGaussian(0, 2);

    this.x + xstep > 0
      ? (this.x += xstep)
      : this.x + xstep < p5.width
      ? p5.width
      : 0;
    this.y + ystep > 0
      ? (this.y += ystep)
      : this.y + ystep < p5.height
      ? p5.height
      : 0;
  }
  show(p5: p5Types) {
    p5.stroke(20);
    p5.strokeWeight(3);
    p5.point(this.x, this.y);
  }
  centerUpdate(p5: p5Types, height: number, width: number) {
    this.x = width / 2;
    this.y = height / 2;
  }
}
export const RandomWalk = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const walkerRef = useRef<Walker | null>(null);
  const [inDiv, setInDiv] = useState(false);

  let canvas;

  const setup = (p5: p5Types, canvasParentRef: any) => {
    if (containerRef.current) {
      canvas = p5.createCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2
      );
      canvas.parent(canvasParentRef);
      canvas.style("z-index", "1");
      let rect = containerRef.current.getBoundingClientRect();
      p5.background(220, 220, 230, 255);

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
    if (containerRef.current && walkerRef.current) {
      const img = p5.get();
      p5.resizeCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2
      );
      p5.tint(255, 100);
      p5.image(img, 0, 0);
      let rect = containerRef.current.getBoundingClientRect();

      walkerRef.current.centerUpdate(p5, rect.height, rect.width);
      walkerRef.current.step(p5);
      walkerRef.current.show(p5);
    }
  };
  return (
    <CanvasWrapper color={[0, 255, 0, 1]}>
      <CanvasTitle>random gaussian</CanvasTitle>
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
