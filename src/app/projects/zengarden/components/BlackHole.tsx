"use client";

import Sketch from "react-p5";
import type p5Types from "p5";
import { useRef, useState, useEffect } from "react";
import { SandBoxWalls, Sand, TempWrapper } from "../style/style"; // adjust path as needed

function clamp(num: number, lower: number, upper: number) {
  return Math.min(Math.max(num, lower), upper);
}
const BlackHole = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCommandPressed, setIsCommandPressed] = useState(false);
  const [prevCommandPressed, setPrevCommandPressed] = useState(false);
  const prevCenterRef = useRef({ x: -1, y: -1 });

  //variables
  const [stdev, setStdDev] = useState(18);
  const [toPlay, setToPlay] = useState(false);

  const maxBrightness = 255;
  const invert = false;
  const numPoints = 6000;
  let canvas;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Meta") {
        setIsCommandPressed(true);
        setPrevCommandPressed(false);
      }
      if (e.key === "r") {
        setToPlay(true);
      }
      if (e.key === "i") {
        setStdDev((prevStdev) => {
          if (prevStdev <= 29) {
            return prevStdev + 1;
          }
          return prevStdev;
        });
      }
      if (e.key == "d") {
        setStdDev((prevStdev) => {
          if (prevStdev >= 8) {
            return prevStdev - 1;
          }
          return prevStdev;
        });
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
      canvas = p5.createCanvas(700, 700);

      //   canvasParentRef.current = canvas;
      canvas.parent(canvasParentRef);

      canvas.style("z-index", "1");

      //   const ctx = (canvas.elt as HTMLCanvasElement).getContext("2d", {
      //     willReadFrequently: true,
      //   });
      p5.pixelDensity(1);
      drawRandPixels(p5);
    }
  };

  const draw = (p5: p5Types) => {
    if (toPlay) {
      drawRandPixels(p5);
      setToPlay(false);
    }

    let cx = Math.floor(p5.mouseX);
    let cy = Math.floor(p5.mouseY);
    const hasMoved =
      cx !== prevCenterRef.current.x || cy !== prevCenterRef.current.y;
    p5.loadPixels();

    if (!isCommandPressed && hasMoved) {
      if (toPlay) {
        drawRandPixels(p5);
      }

      for (let i = 0; i < numPoints; i++) {
        let rx = Math.floor(p5.randomGaussian(cx, stdev));
        let ry = Math.floor(p5.randomGaussian(cy, stdev));

        let centerDistance = clamp(
          Math.hypot(cx - rx, cy - ry) / (2.5 * stdev),
          0,
          1,
        );

        let easedDistance = Math.pow(centerDistance, 2); //ease makes center black for longer

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

    if (isCommandPressed && !prevCommandPressed) {
      setPrevCommandPressed(true);

      for (let i = 0; i < numPoints; i++) {
        let rx = Math.floor(p5.randomGaussian(cx, stdev));
        let ry = Math.floor(p5.randomGaussian(cy, stdev));

        //TO DO, ALLOW SOME TRACKING OUTSIDE OF THE SANDBOX AREA

        if (rx >= 0 && rx < p5.width && ry >= 0 && ry < 0 + p5.height) {
          let index = 4 * (rx + ry * p5.width);

          let r = p5.random(60, 255); //cool effect let r = p5.random(0, 60);
          let finalCol = invert ? 255 - r : r;

          p5.pixels[index + 0] = finalCol; // R
          p5.pixels[index + 1] = finalCol; // G
          p5.pixels[index + 2] = finalCol; // B
          p5.pixels[index + 3] = 255; // A
        }
      }
    }

    prevCenterRef.current = { x: cx, y: cy };

    p5.updatePixels();
  };

  const windowResized = (p5: p5Types) => {
    if (containerRef.current) {
      p5.resizeCanvas(
        containerRef.current.offsetWidth,
        containerRef.current.clientHeight,
      );
      drawRandPixels(p5);
    }
  };
  return (
    <TempWrapper ref={containerRef}>
      <Sketch
        setup={setup as any}
        draw={draw as any}
        windowResized={windowResized as any}
      />
    </TempWrapper>
  );
};
export default BlackHole;
