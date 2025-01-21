"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const ColorChangingRect = () => {
  const [endX, setEndX] = useState(600);
  const [clciked, setClicked] = useState(false);
  const rectRef = useRef(null);
  useGSAP(() => {
    gsap.to(rectRef.current, {
      //   delay: 1,
      duration: 1,
      x: endX,
      backgroundColor: clciked ? "blue" : "red",
    });
  }, [endX]);
  return (
    <RectBox
      ref={rectRef}
      onClick={() => {
        setClicked(!clciked);
        setEndX(Math.random() * 500);
      }}
    />
  );
};

export default function Handcounting() {
  return (
    <PageWrapper>
      <ColorChangingRect />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #e8e0e0;
  width: 80vw;
  margin: 24px auto;
`;

const RectBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  border: 1px solid black;
`;
