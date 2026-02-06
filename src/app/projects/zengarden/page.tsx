"use client";
import { renderToStaticMarkup } from "react-dom/server";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Sketch from "react-p5";
import type p5Types from "p5";

import {
  SandBoxWalls,
  Sand,
  PageWrapper,
  Title,
  ControlRow,
  ControlButtonBox,
  RockWrapper,
  SandBoxWrapper,
} from "./style/style";

function clamp(num: number, lower: number, upper: number) {
  return Math.min(Math.max(num, lower), upper);
}

const Rock1 = ({ width }: { width: number }) => {
  return (
    <svg
      width={width}
      height={width * 0.8}
      viewBox="0 0 821 647"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${Math.random() * 120 - 60})`}
    >
      <g filter="url(#filter0_f_1239_56)">
        <path
          d="M631.37 507.612C621.388 521.773 613.171 532.045 606.528 539.488C605.801 539.787 605.115 540.067 604.475 540.333C597.69 543.465 589.443 549.937 577.043 559.686C566.482 564.35 549.731 573.179 479.046 575.244C420.146 576.964 316.627 577.524 263.106 576.764C206.628 575.961 181.511 575.003 147.859 572.947C133.362 572.062 127.446 573.079 120.452 569.533C107.99 563.217 90.4111 551.701 81.8897 526.79C74.9333 506.455 68.653 485.998 69.0159 473.573C70.2033 432.917 69.8326 369.649 85.6818 326.553C97.5446 294.297 112.116 263.312 125.676 256.343C139.995 248.984 157.341 234.443 219.19 218.358C270.285 205.07 371.992 167.756 435.697 160.166C499.401 152.576 535.155 152.223 557.537 160.671C599.414 176.478 628.323 182.624 651.602 232.922C667.753 267.818 686.087 321.985 683.628 348.267C679.778 389.421 660.486 466.305 631.37 507.612Z"
          fill="#151515"
          fillOpacity="0.8"
        />
      </g>
      <path
        d="M699.467 441.234C692.591 455.519 677.026 465.406 666.598 476.089C658.635 484.915 649.431 494.172 639.669 502.556C630.216 510.674 611.448 525.371 586.482 540.387L586.388 540.444C570.812 549.812 560.653 555.923 540.569 559.851C500.52 567.684 470.089 573.046 460.392 573.118C447.162 573.217 429.573 570.45 407.894 566.767C383.288 562.586 343.354 554.732 318.926 545.267C290.645 534.308 267.842 526.021 256.917 518.836C239.749 507.547 227.145 498.697 222.248 493.065C215.996 485.876 197.136 461.284 177.792 426.761C168.207 409.655 161.473 393.719 159.326 368.649C156.934 340.717 155.202 317.034 161.766 301.078C175.201 268.418 189.359 242.478 210.746 228.628C228.809 216.931 245.643 206.478 268.249 200.556C284.324 196.344 309.483 190.821 349.368 185.232C389.252 179.642 442.256 174.154 487.362 172.283C532.468 170.411 568.582 172.106 592.622 174.541C616.662 176.976 628.494 179.576 637.984 183.512C655.267 190.678 676.227 200.798 694.308 216.183C706.161 226.268 713.761 234.065 717.613 241.614C720.363 247.006 729.089 271.262 731.067 310.105C732.483 337.901 731.505 359.214 722.456 385.219C716.597 402.054 707.041 425.497 699.467 441.234Z"
        fill="#303030"
      />
      <path
        d="M624.24 269.963C635.557 280.208 646.221 289.862 653.796 306.92C653.109 308.631 653.549 310.686 653.789 312.75C654.033 314.86 654.068 316.917 654.11 319.47L654.111 319.548C654.207 330.544 650.746 341.546 655.173 361.254C661.664 390.146 677.395 437.726 688.743 424.831C691.05 422.209 693.34 417.828 695.726 410.592C705.32 381.495 712.131 358.946 716.335 347.471C722.859 329.667 731.283 303.259 721.076 275.757C715.196 259.912 703.004 225.167 677.248 202.736C649.288 178.387 635.206 168.052 604.716 163.965C583.614 161.137 572.704 162.833 532.975 165.056C513.962 166.121 485.45 166.931 454.211 170.322C422.972 173.713 390.004 179.51 355.877 186.571C321.75 193.632 287.214 200.793 266.299 207.602C237.179 217.083 222.647 223.522 211.375 233.561C197.524 245.897 184.307 256.273 179.244 265.55C171.678 279.416 153.194 323.027 170.144 324.078C171.836 324.183 173.547 322.012 176.95 317.981L177.168 317.722C193.882 297.923 205.078 284.661 223.963 275.604C230.958 272.25 259.566 261.411 310.271 248.027C335.126 241.466 358.658 236.659 381.361 233.555C404.064 230.45 425.327 228.408 447.477 229.151C492.117 230.648 521.637 228.683 547.959 235.992C573.031 242.953 604.418 252.019 624.144 269.876L624.24 269.963Z"
        fill="#0a0a0a"
        fillOpacity="0.1"
      />
      <path
        d="M433.084 593.651C433.828 593.489 468.107 585.668 527.744 569.929C553.817 563.047 570.044 553.9 586.461 543.896C602.878 533.892 618.652 522.156 634.025 508.243C649.399 494.331 663.894 478.598 674.076 466.598C684.258 454.598 689.688 446.808 697.264 431.08C704.841 415.352 714.4 391.923 720.26 375.098C729.313 349.109 730.294 327.809 728.883 300.032C726.91 261.215 718.188 236.975 715.438 231.588C711.588 224.044 703.989 216.254 692.138 206.177C674.059 190.804 653.101 180.694 635.82 173.535C626.33 169.603 614.5 167.006 590.461 164.576C566.422 162.146 530.309 160.458 485.204 162.334C440.099 164.211 387.096 169.703 347.212 175.294C307.328 180.886 282.17 186.409 266.094 190.62C243.488 196.541 226.653 206.99 208.589 218.682C187.201 232.526 173.039 258.451 159.6 291.092C153.034 307.039 154.762 330.706 157.15 358.619C159.293 383.672 166.026 399.597 175.608 416.69C194.946 451.188 213.802 475.761 220.052 482.945C224.949 488.573 237.551 497.415 254.717 508.694C265.641 515.873 288.442 524.151 316.721 535.099C341.146 544.555 381.078 552.398 405.683 556.572C427.361 560.25 444.949 563.013 458.178 562.912C467.875 562.838 498.306 557.476 538.354 549.642C558.479 545.705 568.639 539.581 584.269 530.184C609.236 515.174 628.006 500.485 637.459 492.371C660.586 472.521 680.573 447.776 688.38 435.464C691.951 429.833 698.95 412.402 709.083 387.064C716.639 368.17 718.074 344.309 719.719 319.089C720.698 304.079 715.521 276.184 708.811 240.56C706.043 225.859 703.181 221.604 699.876 217.203C694.372 209.874 663.709 197.012 621.892 182.375C591.634 171.783 556.277 175.813 534.432 172.47C528.471 171.558 523.803 170.286 522.626 169.874C512.014 166.152 549.585 180.39 551.615 182.258C553.313 183.821 526.751 178.061 496.949 171.86C487.558 169.906 489.172 173.349 492.428 175.92C499.714 181.67 508.184 182.956 527.274 185.265C573.047 190.799 606.233 200.271 610.748 202.249C611.892 202.75 609.499 203.757 572.866 199.262C536.232 194.766 465.124 185.127 419.992 180.522C374.86 175.916 357.86 176.636 344.049 178.06C320.011 180.54 306.164 185.759 291.711 196.087C261.531 217.654 242.618 235.541 241.187 236.876C239.519 238.432 249.683 228.609 261.978 219.923C274.197 211.291 305.017 200.772 344.795 187.921C369.623 179.9 384.052 178.483 401.316 178.51C432.822 178.56 462.232 185.264 478.995 190.351C501.843 197.283 515.409 213.431 517.31 218.455C518.141 220.651 513.744 222.67 510.77 223.814C507.797 224.958 505.113 225.304 458.62 224.78C412.127 224.256 321.905 222.852 273.484 222.334C221.191 221.775 213.974 223.348 207.813 225.564C191.485 231.439 177.741 272.805 168.201 294.988C164.023 304.703 191.844 258.875 228.613 223.63C237.566 215.048 247.817 210.803 266.034 204.239C310.484 188.226 345.081 180.93 358.18 179.337C371.855 177.675 389.854 180.009 414.54 184.706C475.96 196.392 497.117 216.584 498.211 219.538C498.73 220.939 496.514 222.517 496.119 224.153C495.724 225.789 496.537 227.531 497.961 229.861C499.385 232.191 501.396 235.057 504.029 238.532"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M654.76 468.003C656.878 466.352 658.871 464.849 660.73 463.49C661.676 463.486 662.657 463.448 663.792 463.306C667.506 462.658 670.763 461.653 673.155 460.264C677.208 456.152 683.417 447.898 680.175 441.041C679.54 439.699 678.651 438.269 676.795 438.66C667.77 440.561 662.146 443.466 653.849 447.495C644.166 452.198 628.045 462.025 607.917 466.021C595.273 468.531 552.738 508.254 533.795 511.134C514.852 514.014 499.999 515.563 489.115 516.375C478.231 517.188 458.406 532.125 428.408 529.566C398.409 527.007 362.899 520.761 330.674 516.984C298.449 513.206 282.822 497.658 273.925 495.005C251.18 488.224 251.996 443.851 241.419 431.733C233.815 423.022 220.966 409.173 214.343 391.959C205.635 369.327 200.922 347.313 202.988 340.086C205.381 331.712 207.348 325.245 207.97 317.709C208.474 311.602 210.475 301.224 204.714 299.738C203.699 299.477 202.476 300.165 200.424 301.637C191.252 308.215 184.611 312.388 182.344 321.342C177.803 339.273 174.349 348.537 173.19 358.552C171.847 370.167 168.247 388.785 169.301 406.72C170.376 425.01 173.123 443.798 188.888 462.264C196.715 471.432 209.648 485.373 225.06 498.474C240.473 511.575 257.837 523.475 272.585 532.576C287.333 541.676 298.973 548.043 306.707 551.445C317.634 556.252 323.915 558.241 339.923 559.547C352.989 560.613 375.534 562.169 394.7 562.405C413.865 562.64 429.188 561.587 452.183 557.775C475.179 553.964 504.945 547.588 523.934 542.984C542.923 538.381 551.014 535.887 562.101 530.76C587.331 519.092 602.685 511.562 605.235 509.567C608.258 507.201 617.552 499.007 631.899 487.192C643.746 477.437 650.376 471.423 654.76 468.003Z"
        fill="#151515"
        fillOpacity="0.18"
      />
      <defs>
        <filter
          id="filter0_f_1239_56"
          x="0"
          y="85.4062"
          width="752.852"
          height="560.691"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="34.5"
            result="effect1_foregroundBlur_1239_56"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default function ZenGarden() {
  const [rocks, setRocks] = useState<any[]>([]);
  const shuffleRocks = () => {
    const newRocks = Array.from({
      length: Math.floor(Math.random() * 4) + 1,
    }).map(() => ({
      id: Math.random(),
      x: Math.random() * 0.8 + 0.1, // Keep away from extreme edges (10% - 90%)
      y: Math.random() * 0.8 + 0.1,
      width: Math.random() * 100 + 150,
    }));
    setRocks(newRocks);
  };
  useEffect(() => {
    shuffleRocks();
  }, []);

  // Listen for the "S" key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "s") {
        shuffleRocks();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // let rock1Width = Math.random() * 50 + 230;
  // let rock2Width = Math.random() * 100 + 100;
  // let rock3Width = Math.random() * 60 + 180;
  return (
    <PageWrapper>
      <Title>
        <h1> Raking Sand in a Zen Garden</h1>
      </Title>
      <ControlRow>
        <ControlButtonBox>
          <p>
            <span> [⌘] </span> Lift Brush
          </p>
          <p>
            <span> [I] </span> Increase Size
          </p>
          <p>
            <span> [D] </span> Decrease Size
          </p>
        </ControlButtonBox>
        <ControlButtonBox>
          <p>
            <span> [S] </span> Shuffle Rocks
          </p>
          <p>
            <span> [R] </span> Reset Sand
          </p>
        </ControlButtonBox>
        {/* <ControlButtonBox>
          <p>
            <span> [G] </span> Gallery
          </p>
        </ControlButtonBox> */}
      </ControlRow>
      <SandBoxWrapper>
        <BlackHole></BlackHole>
        {rocks.map((rock) => (
          <RockWrapper key={rock.id} $width={rock.x} $height={rock.y}>
            <Rock1 width={rock.width} />
          </RockWrapper>
        ))}
      </SandBoxWrapper>

      <ControlRow>
        <ControlButtonBox>
          <p>.</p>

          <p>Made by Priya Misner</p>
        </ControlButtonBox>
      </ControlRow>
    </PageWrapper>
  );
}
export const BlackHole = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  //   const [inDiv, setInDiv] = useState(false);
  const [isCommandPressed, setIsCommandPressed] = useState(false);
  const [prevCommandPressed, setPrevCommandPressed] = useState(false);
  const prevCenterRef = useRef({ x: -1, y: -1 });
  //variables
  const [stdev, setStdDev] = useState(18);
  const [maxBrightness, setMaxBrightness] = useState(255);
  const [toPlay, setToPlay] = useState(false);
  const [invert, setInvert] = useState(false);
  const [numPoints, setNumPoints] = useState(6000);

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
      canvas = p5.createCanvas(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight - 2,
      );
      canvas.parent(canvasParentRef);
      canvas.style("z-index", "1");
      p5.pixelDensity(1);
      //   p5.frameRate(60);
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
        containerRef.current.offsetWidth - 2,
        containerRef.current.offsetHeight - 2,
      );
      drawRandPixels(p5);
    }
  };
  return (
    <SandBoxWalls>
      <Sand ref={containerRef}>
        <Sketch
          setup={setup as any}
          draw={draw as any}
          windowResized={windowResized as any}
        />
      </Sand>
    </SandBoxWalls>
  );
};
