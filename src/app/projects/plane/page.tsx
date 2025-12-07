"use client";
import {
  BirdFlapping,
  Flock,
  PageWrapper,
  PlanePlaceholder,
} from "./style/style";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export default function PlaneMove() {
  const mouse = useRef({
    //true position of cursor
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });
  const cursorFollower = useRef<HTMLDivElement>(null);
  const bird = useRef<HTMLDivElement>(null);

  const manageInputMove = (e: MouseEvent | TouchEvent) => {
    let clientX, clientY;

    // Check if it's a touch event and get the first touch point's coordinates
    if ("touches" in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        return; // No active touch, exit
      }
    } else {
      // It's a mouse event
      clientX = e.clientX;
      clientY = e.clientY;
    }
    mouse.current = { x: clientX, y: clientY };
  };

  //linear interpolation
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const movePlane = (x: number, y: number, rotation: number) => {
    gsap.set(cursorFollower.current, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
      rotation: rotation ? rotation : 0,
      transformOrigin: "50% 50%",
    });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    const lerpSpeed = 0.005;

    let opposite = mouse.current.y - y;
    let adjacent = mouse.current.x - x;
    let rotationRad = Math.atan2(opposite, adjacent);
    let rotation = rotationRad * (180 / Math.PI);

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, lerpSpeed),
      y: lerp(y, mouse.current.y, lerpSpeed),
    };
    movePlane(delayedMouse.current.x, delayedMouse.current.y, rotation);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    if (bird.current) {
      // Total distance is the width of 8 frames (8 * 196px = 1568px)
      const targetDistance = -74 * 6;
      const birdSprites = bird.current.querySelectorAll("div");

      gsap.to(birdSprites, {
        // Use the calculated pixel value
        backgroundPositionX: `${targetDistance}px`,
        duration: 1, // Example duration, adjust for desired speed

        // 8 steps are needed for 9 total frames
        ease: `steps(6)`,
        repeat: -1,
        stagger: {
          each: 0.05, // Delay each subsequent bird's animation start by 0.05 seconds
          repeat: -1, // Ensures the stagger pattern repeats every time the main animation loops
          from: "start",
        },
      });
    }
    mouse.current = { x: centerX, y: centerY };
    delayedMouse.current = { x: centerX, y: centerY };
    movePlane(centerX, centerY, 0);

    animate();
    // Use the updated handler function
    window.addEventListener("mousemove", manageInputMove);

    // ADDED: Listener for mobile dragging
    window.addEventListener("touchmove", manageInputMove);

    return () => {
      window.removeEventListener("mousemove", manageInputMove);
      // ADDED: Cleanup for touch listener
      window.removeEventListener("touchmove", manageInputMove);
    };
  }, []);
  return (
    <PageWrapper>
      <PlanePlaceholder ref={cursorFollower}>
        <Flock ref={bird}>
          <BirdFlapping></BirdFlapping>
          <BirdFlapping></BirdFlapping>
          <BirdFlapping></BirdFlapping>
          <BirdFlapping></BirdFlapping>
        </Flock>

        {/* <svg
          width="176"
          height="221"
          viewBox="0 0 176 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M150.171 122.999L105 122.999L61 212.5L61 122.999L4.00001 122.999L4.00001 89.9995L61 89.9995L61 -0.000909972L105 89.9995L150.171 89.9996L172 107.6L150.171 122.999Z" />
        </svg> */}
        {/* <svg
          width="316"
          height="408"
          viewBox="0 0 316 408"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1008_4614)">
            <path d="M273.475 239.256C295.627 241.132 304.819 227.393 306.645 220.289C303.294 192.811 272.994 201.665 255.884 193.571C242.197 187.096 240.168 176.561 240.865 172.103C243.475 160.903 245.535 133.602 245.494 128.002C245.291 100.232 246.96 90.866 246.421 79.9591L246.421 79.9587C245.883 69.0515 244.446 39.9672 245.188 25.7653C245.782 14.4037 241.03 13.5016 238.579 14.4708C235.695 13.6277 227.178 11.4033 216.179 9.25102C205.181 7.09877 203.462 15.3574 203.977 19.7558L194.899 58.7121L184.346 103.999C182.076 113.738 182.946 145.258 181.456 158.259C180.265 168.66 175.715 173.35 173.589 174.394C137.583 170.282 64.7619 161.561 61.5281 159.576C57.486 157.094 60.4363 144.433 58.7109 127.602C56.9856 110.771 52.636 111.812 36.68 107.58C23.9152 104.195 19.8067 111.691 19.348 115.863C16.3048 125.251 9.97905 147.256 9.02193 160.176C8.06482 173.096 12.975 210.041 15.5498 226.898C21.8534 229.223 36.1484 233.238 42.8996 230.704C49.6508 228.17 56.8265 196.643 59.5704 181.196C68.7533 191.14 144.363 212.421 181.02 221.819C176.16 251.49 189.76 305.485 192.251 332.249C194.742 359.013 192.983 393 197.366 394.022C201.748 395.043 227.297 399.97 233.334 398.296C239.371 396.622 238.663 360.006 243.297 331.309C247.93 302.612 241.133 256.876 242.608 250.545C244.083 244.215 245.785 236.911 273.475 239.256Z" />
          </g>
          <defs>
            <filter
              id="filter0_f_1008_4614"
              x="0.000391006"
              y="0.000391006"
              width="315.544"
              height="407.54"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4.45"
                result="effect1_foregroundBlur_1008_4614"
              />
            </filter>
          </defs>
        </svg> */}
      </PlanePlaceholder>
    </PageWrapper>
  );
}
