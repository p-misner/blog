"use client";
import { ChangeEvent, useRef, useState } from "react";
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

// some control over black hole intensity
// control: pause or play static animation
// size of mouse blob DONE

export const SandFade = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);
  const [stdev, setStdDev] = useState(26);
  const [maxBrightness, setMaxBrightness] = useState(255);
  const [invert, setInvert] = useState(false);
  const [fadeTime, setFadeTime] = useState(0.92);
  const [toPlay, setToPlay] = useState(true);

  const bgLayerRef = useRef<p5Types.Graphics | null>(null);
  const moveLayerRef = useRef<p5Types.Graphics | null>(null);
  let canvas;

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStdDev(e.target.valueAsNumber);
  };
  const handleBrightnessChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxBrightness(e.target.valueAsNumber);
  };
  const handleFadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFadeTime(e.target.valueAsNumber);
  };

  const handlePlayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToPlay(e.target.checked);
  };
  const handleInvertChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInvert(e.target.checked);
  };

  //   const drawRandPixels = (p5: p5Types) => {
  //     p5.loadPixels();

  //     for (let x = 0; x < p5.width; x++) {
  //       for (let y = 0; y < p5.height; y++) {
  //         let index = 4 * (x + y * p5.width);
  //         let r = p5.random(0, 255);

  //         p5.pixels[index + 0] = r;
  //         p5.pixels[index + 1] = r;
  //         p5.pixels[index + 2] = r;
  //         p5.pixels[index + 3] = 255;
  //       }
  //     }
  //     p5.updatePixels();
  //   };
  const setup = (p5: p5Types, canvasParentRef: any) => {
    if (containerRef.current) {
      canvas = p5.createCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      bgLayerRef.current = p5.createGraphics(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      moveLayerRef.current = p5.createGraphics(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      canvas.parent(canvasParentRef);
      canvas.style("z-index", "1");
      p5.pixelDensity(1);

      //   drawRandPixels(p5);
      bgLayerRef.current.pixelDensity(1);
      moveLayerRef.current.pixelDensity(1);
      bgLayerRef.current.loadPixels();
      for (let x = 0; x < p5.width; x++) {
        for (let y = 0; y < p5.height; y++) {
          let index = 4 * (x + y * p5.width);
          let r = p5.random(0, 255);

          bgLayerRef.current.pixels[index + 0] = r;
          bgLayerRef.current.pixels[index + 1] = r;
          bgLayerRef.current.pixels[index + 2] = r;
          bgLayerRef.current.pixels[index + 3] = 255;
        }
      }
      bgLayerRef.current.updatePixels();
      p5.image(bgLayerRef.current, 0, 0);
      p5.image(moveLayerRef.current, 0, 0);
    }
  };

  const draw = (p5: p5Types) => {
    if (inDiv && moveLayerRef.current && bgLayerRef.current) {
      //To get array pos in pixel array is (x+y*width)*4 (0-> 4, 1->g, 2->b, 3-> alpha)
      let cx = Math.floor(p5.mouseX);
      let cy = Math.floor(p5.mouseY);

      moveLayerRef.current.loadPixels();

      for (let i = 3; i < moveLayerRef.current.pixels.length; i += 4) {
        if (moveLayerRef.current.pixels[i] > 0) {
          moveLayerRef.current.pixels[i] = Math.floor(
            moveLayerRef.current.pixels[i] * fadeTime,
          );
        }
      }
      //rand pixels NOT generated so the background is stationary, only movement is around mouse
      //generate pixels aroundcx,cy
      for (let i = 0; i < 4000; i++) {
        let rx = Math.floor(p5.randomGaussian(cx, stdev));
        let ry = Math.floor(p5.randomGaussian(cy, stdev));

        let centerDistance = clamp(
          Math.hypot(cx - rx, cy - ry) / (2.5 * stdev),
          0,
          1,
        );

        let easedDistance = Math.pow(centerDistance, 4); //ease makes center black for longer
        // This blends the colors naturally
        let baseColor = easedDistance * maxBrightness;
        let colorPercent = p5.random(baseColor * 0.3, baseColor);

        // Boundary check
        if (rx >= 0 && rx < p5.width && ry >= 0 && ry < p5.height) {
          let index = 4 * (rx + ry * p5.width);

          let r = colorPercent; //cool effect let r = p5.random(0, 60);

          moveLayerRef.current.pixels[index + 0] = invert ? 255 - r : r; // R
          moveLayerRef.current.pixels[index + 1] = invert ? 255 - r : r; // G
          moveLayerRef.current.pixels[index + 2] = invert ? 255 - r : r; // B
          moveLayerRef.current.pixels[index + 3] = 255; // A
        }
      }

      moveLayerRef.current.updatePixels();

      if (toPlay && p5.frameCount % 15 == 0) {
        bgLayerRef.current.loadPixels();
        for (let x = 0; x < p5.width; x++) {
          for (let y = 0; y < p5.height; y++) {
            let index = 4 * (x + y * p5.width);
            let r = p5.random(0, 255);

            bgLayerRef.current.pixels[index + 0] = r;
            bgLayerRef.current.pixels[index + 1] = r;
            bgLayerRef.current.pixels[index + 2] = r;
            bgLayerRef.current.pixels[index + 3] = 255;
          }
        }
        bgLayerRef.current.updatePixels();
      } else {
        p5.frameRate(60);
      }

      p5.image(bgLayerRef.current, 0, 0);
      p5.image(moveLayerRef.current, 0, 0);
    }
  };

  const windowResized = (p5: p5Types) => {
    if (containerRef.current) {
      p5.resizeCanvas(
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
    }
  };
  return (
    <CanvasWrapper color={[0, 255, 0, 1]}>
      <CanvasTitle> fade out disturbances in noise </CanvasTitle>
      <div>
        <input
          type="checkbox"
          id="pixels"
          name="pixels"
          checked={toPlay}
          onChange={handlePlayChange}
        />
        <label htmlFor="pixels">Refresh Background</label>
        <input
          type="checkbox"
          id="invert"
          name="invert"
          checked={invert}
          onChange={handleInvertChange}
        />
        <label htmlFor="invert">Invert Colors</label>
      </div>
      <div>
        <input
          type="range"
          id="stdev"
          name="stdev"
          min="10"
          max="50"
          value={stdev}
          onChange={handleRangeChange}
          step="1"
        />
        <label htmlFor="stdev">Blur Size</label>

        <input
          type="range"
          id="brightness"
          name="brightness"
          min="0"
          max="255"
          value={maxBrightness}
          onChange={handleBrightnessChange}
          step="5"
        />
        <label htmlFor="brightness"> Brightness</label>
        <input
          type="range"
          id="fade"
          name="fade"
          min="0.8"
          max="0.999"
          value={fadeTime}
          onChange={handleFadeChange}
          step=".001"
        />
        <label htmlFor="brightness"> Fade Time</label>
      </div>
      <CanvasOutlinep5
        ref={containerRef}
        $active={inDiv}
        $height={640}
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
