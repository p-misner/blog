"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";
function clamp(num: number, lower: number, upper: number) {
  return Math.min(Math.max(num, lower), upper);
}
export const PerlinNoisePixels = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);

  let canvas;
  let offset = 0.0;
  const pixelDraw = (p5: p5Types) => {
    p5.loadPixels();

    let zoomFactor = 0.01;
    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let index = 4 * (x + y * p5.width);
        let brightness = p5.map(
          p5.noise(x * zoomFactor, y * zoomFactor, offset),
          0,
          1,
          0,
          255,
        );

        p5.pixels[index + 0] = brightness;
        p5.pixels[index + 1] = brightness;
        p5.pixels[index + 2] = brightness;
        p5.pixels[index + 3] = 255;
      }
    }
    p5.updatePixels();
  };

  const init = (p5: p5Types) => {
    pixelDraw(p5);
  };
  const setup = (p5: p5Types, canvasParentRef: any) => {
    if (containerRef.current) {
      canvas = p5.createCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      canvas.parent(canvasParentRef);
      canvas.style("z-index", "1");
      p5.pixelDensity(1);
      p5.frameRate(60);
      p5.noiseDetail(4, 0.5);

      init(p5);
    }
  };

  const draw = (p5: p5Types) => {
    if (inDiv) {
      p5.circle(p5.width / 2, p5.height / 2, 20);
      p5.strokeWeight(20);
      offset += 0.005;
      pixelDraw(p5);
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
      <CanvasTitle>perlin noise stationary </CanvasTitle>
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
