"use client";
import { PageWrapper } from "./style/style";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { Hand0, AllHands } from "./hands/hands";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function Handcounting() {
  const hand = useRef<SVGSVGElement>(null);
  var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  var colorTl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  useGSAP(
    () => {
      // tl.to("#base", {
      //   delay: 0.4,
      //   duration: 1,
      //   morphSVG: "#p1",
      //   fill: "transparent",
      // });
      // tl.to("#base", {
      //   duration: 1,
      //   morphSVG: "#p2",
      // });
      tl.to("#handa", {
        duration: 0.5,
        morphSVG: { shape: "#handb", shapeIndex: 28 },
      });

      tl.pause();
      tl.to("#handa", {
        duration: 3,
        morphSVG: { shape: "#handa", shapeIndex: 14 },
      });
      tl.pause();
      // findShapeIndex("#handa", "#handb");
      // colorTl.to("#stop2", {
      //   delay: 0.4,
      //   duration: 1,
      //   stopColor: "#0965c0",
      // });
      // tl.to("#base", {
      //   duration: 1,
      //   morphSVG: "#p2",
      // });
      // colorTl.to("#stop2", {
      //   duration: 1,
      //   stopColor: "#65d88c",
      // });
      colorTl.pause();
    },
    { scope: hand },
  );
  return (
    <PageWrapper>
      {" "}
      hello
      <button
        onClick={() => {
          tl.restart();
          tl.play();
          colorTl.restart();
          colorTl.play();
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          tl.progress(1);
          tl.reverse();
          colorTl.progress(1);
          colorTl.reverse();
        }}
      >
        reverse
      </button>
      <AllHands ref={hand} />
    </PageWrapper>
  );
}
