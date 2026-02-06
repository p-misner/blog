"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

export const MovingPerlinNoise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);
  let canvas;
  let t = 0.0; //time
  let yRandValues = useRef<number[]>([]);
  const init = (p5: p5Types) => {
    p5.background(220, 220, 230, 255);
    let xOffset = t; //move the line

    yRandValues.current = Array.from(
      {
        length: Math.floor(p5.width * 0.8),
      },
      () => Math.random() * p5.height
    );
    p5.noFill();
    p5.stroke(180);
    p5.strokeWeight(1);
    p5.beginShape();

    for (let i = 0; i < yRandValues.current.length; i++) {
      p5.vertex(i, yRandValues.current[i]);
    }
    p5.endShape();
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.beginShape();
    for (let i = 0; i < 0.8 * p5.width; i++) {
      let y = p5.noise(xOffset) * p5.height;
      xOffset += 0.01;
      p5.vertex(i, y);
    }
    p5.endShape();
    p5.circle(p5.width * 0.8, p5.noise(xOffset) * p5.height, 20);
    t += 0.01;
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

      //   new Array(Math.floor(p5.width * 0.8)).fill(
      //     Math.random() * p5.height
      //   );
    }
  };

  const draw = (p5: p5Types) => {
    if (!inDiv) return;
    p5.background(220, 220, 230, 255);
    let xOffset = t; //move the line

    yRandValues.current.push(p5.random(0, p5.height));
    yRandValues.current.shift();
    p5.noFill();
    p5.stroke(180);
    p5.strokeWeight(1);
    p5.beginShape();

    for (let i = 0; i < yRandValues.current.length; i++) {
      p5.vertex(i, yRandValues.current[i]);
    }
    p5.endShape();

    //perlin noise
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.beginShape();
    for (let i = 0; i < 0.8 * p5.width; i++) {
      let y = p5.noise(xOffset) * p5.height;
      xOffset += 0.01;
      p5.vertex(i, y);
    }
    p5.endShape();
    p5.circle(p5.width * 0.8, p5.noise(xOffset) * p5.height, 20);
    t += 0.02;
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
      <CanvasTitle>moving perlin noise chart </CanvasTitle>
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
