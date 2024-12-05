"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  ClickSquare,
  Container,
  PageWrapper,
  SeasonDiv,
} from "./style/GSAPStyle";

export default function GSAP() {
  const container = useRef(null);
  const jan = useRef<HTMLDivElement>(null);
  const feb = useRef<HTMLDivElement>(null);
  const mar = useRef<HTMLDivElement>(null);
  const apr = useRef<HTMLDivElement>(null);

  const circle = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();
      if (jan.current && feb.current && mar.current && apr.current) {
        //  refs...
        tl.to(jan?.current, {
          y: "+=600",
          // opacity: "-=0.8",
          duration: 4,
          color: "#012973",
        });
        tl.to(
          feb?.current,
          {
            y: "+=600",
            color: "#012973",
            duration: 4,
          },
          "<0.5"
        );
        tl.to(
          mar?.current,
          {
            y: "+=600",
            color: "#012973",
            duration: 4,
          },
          "<0.5"
        );
        tl.to(
          apr?.current,
          {
            y: "+=600",
            color: "#012973",
            duration: 4,
          },
          "<0.7"
        );
      }
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <PageWrapper>
      <Container ref={container}>
        <SeasonDiv ref={jan}>January</SeasonDiv>
        <SeasonDiv ref={feb}>February</SeasonDiv>
        <SeasonDiv ref={mar}>March</SeasonDiv>
        <SeasonDiv ref={apr}>April</SeasonDiv>
      </Container>
    </PageWrapper>
  );
}
