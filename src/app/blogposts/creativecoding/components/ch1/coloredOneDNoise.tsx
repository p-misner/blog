"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

export const ColoredPixelNoise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);

  let canvas;

  const drawRandPixels = (p5: p5Types) => {
    // p5.background(220, 220, 230, 255);
    p5.loadPixels();

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let index = 4 * (x + y * p5.width);
        p5.pixels[index + 0] = p5.random(200) + 54;
        p5.pixels[index + 1] = p5.random(200) + 54;
        p5.pixels[index + 2] = p5.random(200) + 54;
        p5.pixels[index + 3] = 255;
      }
    }
    p5.updatePixels();
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
      p5.frameRate(6);

      drawRandPixels(p5);
    }
  };

  const draw = (p5: p5Types) => {
    if (inDiv) {
      //To get array pos in pixel array is (x+y*width)*4 (0-> 4, 1->g, 2->b, 3-> alpha)
      drawRandPixels(p5);
    }
  };

  const windowResized = (p5: p5Types) => {
    if (containerRef.current) {
      p5.resizeCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      drawRandPixels(p5);
    }
  };
  return (
    <CanvasWrapper color={[0, 255, 0, 1]}>
      <CanvasTitle>colored random pixel noise </CanvasTitle>
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
