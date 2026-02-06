"use client";
import { useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";
import {
  CanvasOutlinep5,
  CanvasTitle,
  CanvasWrapper,
} from "../../style/canvasStyle";

export const SandMixer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);

  let canvas;

  const drawRandPixels = (p5: p5Types) => {
    // p5.background(220, 220, 230, 255);
    p5.loadPixels();

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let index = 4 * (x + y * p5.width);
        let r = p5.random(0, 255);

        p5.pixels[index + 0] = r;
        p5.pixels[index + 1] = r;
        p5.pixels[index + 2] = r;
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
      // p5.frameRate(5);

      drawRandPixels(p5);
    }
  };

  const draw = (p5: p5Types) => {
    if (inDiv) {
      p5.loadPixels();

      //To get array pos in pixel array is (x+y*width)*4 (0-> 4, 1->g, 2->b, 3-> alpha)
      let cx = Math.floor(p5.mouseX);
      let cy = Math.floor(p5.mouseY);
      let stdev = 20;

      p5.loadPixels();

      //generate pizels aroundcx,cy

      // let index = 4 * (cx + cy * p5.width);

      for (let i = 0; i < 4000; i++) {
        let rx = Math.floor(p5.randomGaussian(cx, stdev));
        let ry = Math.floor(p5.randomGaussian(cy, stdev));

        // Boundary check
        if (rx >= 0 && rx < p5.width && ry >= 0 && ry < p5.height) {
          let index = 4 * (rx + ry * p5.width);

          let r = p5.random(0, 255);

          p5.pixels[index + 0] = r; // R
          p5.pixels[index + 1] = r; // G
          p5.pixels[index + 2] = r; // B
          p5.pixels[index + 3] = 255; // A
        }
      }

      p5.updatePixels();
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
      <CanvasTitle> mouse following pixel noise </CanvasTitle>

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
