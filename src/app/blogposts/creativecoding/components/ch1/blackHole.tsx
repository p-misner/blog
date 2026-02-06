"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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

export const BlackHole = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inDiv, setInDiv] = useState(false);
  const [isCommandPressed, setIsCommandPressed] = useState(false);
  const [prevCommandPressed, setPrevCommandPressed] = useState(false);

  //variables
  const [stdev, setStdDev] = useState(26);
  const [maxBrightness, setMaxBrightness] = useState(255);
  const [toPlay, setToPlay] = useState(true);
  const [invert, setInvert] = useState(false);
  const [numPoints, setNumPoints] = useState(4000);
  const [frameRate, setFrameRate] = useState(5);

  let canvas;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Meta") {
        setIsCommandPressed(true);
        setPrevCommandPressed(false);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Meta") setIsCommandPressed(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStdDev(e.target.valueAsNumber);
  };
  const handleBrightnessChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxBrightness(e.target.valueAsNumber);
  };
  const handleNumPoints = (e: ChangeEvent<HTMLInputElement>) => {
    setNumPoints(e.target.valueAsNumber);
  };
  const handleFrameRate = (e: ChangeEvent<HTMLInputElement>) => {
    setFrameRate(e.target.valueAsNumber);
  };

  const handlePlayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToPlay(e.target.checked);
  };
  const handleInvertChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInvert(e.target.checked);
  };

  const drawRandPixels = (p5: p5Types) => {
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

      drawRandPixels(p5);
    }
  };

  const draw = (p5: p5Types) => {
    if (inDiv) {
      if (toPlay) {
        p5.frameRate(frameRate);
      } else {
        p5.frameRate(60);
      }

      if (isCommandPressed && !prevCommandPressed) {
        console.log("first frame", p5.frameCount);
        setPrevCommandPressed(true);

        p5.loadPixels();
        //To get array pos in pixel array is (x+y*width)*4 (0-> 4, 1->g, 2->b, 3-> alpha)
        let cx = Math.floor(p5.mouseX);
        let cy = Math.floor(p5.mouseY);

        for (let i = 0; i < numPoints; i++) {
          let rx = Math.floor(p5.randomGaussian(cx, stdev));
          let ry = Math.floor(p5.randomGaussian(cy, stdev));

          let centerDistance = clamp(
            Math.hypot(cx - rx, cy - ry) / (2.5 * stdev),
            0,
            1,
          );

          // let easedDistance = Math.pow(centerDistance, 2); //ease makes center black for longer

          let baseColor = centerDistance * maxBrightness;
          // let colorPercent = p5.random(0, baseColor);

          // Boundary check
          if (rx >= 0 && rx < p5.width && ry >= 0 && ry < p5.height) {
            let index = 4 * (rx + ry * p5.width);

            let r = p5.random(0, 255); //cool effect let r = p5.random(0, 60);

            p5.pixels[index + 0] = invert ? 255 - r : r; // R
            p5.pixels[index + 1] = invert ? 255 - r : r; // G
            p5.pixels[index + 2] = invert ? 255 - r : r; // B
            p5.pixels[index + 3] = 255; // A
          }
        }
      }

      if (!isCommandPressed) {
        p5.loadPixels();
        if (toPlay) {
          drawRandPixels(p5);
        }

        //To get array pos in pixel array is (x+y*width)*4 (0-> 4, 1->g, 2->b, 3-> alpha)
        let cx = Math.floor(p5.mouseX);
        let cy = Math.floor(p5.mouseY);
        //   let stdev = 26;

        //rand pixels NOT generated so the background is stationary, only movement is around mouse
        //generate pixels aroundcx,cy
        for (let i = 0; i < numPoints; i++) {
          let rx = Math.floor(p5.randomGaussian(cx, stdev));
          let ry = Math.floor(p5.randomGaussian(cy, stdev));

          let centerDistance = clamp(
            Math.hypot(cx - rx, cy - ry) / (2.5 * stdev),
            0,
            1,
          );

          let easedDistance = Math.pow(centerDistance, 2); //ease makes center black for longer
          // 3. Define your color range
          let minBrightness = 0; // Dark center
          // let maxBrightness = 10; // Light edges

          let baseColor = easedDistance * maxBrightness;
          let colorPercent = p5.random(baseColor * 0.3, baseColor);

          // Boundary check
          if (rx >= 0 && rx < p5.width && ry >= 0 && ry < p5.height) {
            let index = 4 * (rx + ry * p5.width);

            let r = colorPercent; //cool effect let r = p5.random(0, 60);

            p5.pixels[index + 0] = invert ? 255 - r : r; // R
            p5.pixels[index + 1] = invert ? 255 - r : r; // G
            p5.pixels[index + 2] = invert ? 255 - r : r; // B
            p5.pixels[index + 3] = 255; // A
          }
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
      <CanvasTitle> black hole pixel noise </CanvasTitle>
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
          id="points"
          name="points"
          min="1000"
          max="20000"
          value={numPoints}
          onChange={handleNumPoints}
          step="100"
        />
        <label htmlFor="points">Points</label>

        <input
          type="range"
          id="frame"
          name="frame"
          min="1"
          max="20"
          value={frameRate}
          onChange={handleFrameRate}
          step="1s"
        />
        <label htmlFor="frame">Frame Rate</label>
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
