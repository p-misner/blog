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
  const container = useRef();
  const jan = useRef();
  const feb = useRef();
  const mar = useRef();
  const apr = useRef();
  const may = useRef();
  const jun = useRef();
  const jul = useRef();
  const aug = useRef();
  const sept = useRef();
  const oct = useRef();
  const nov = useRef();
  const dec = useRef();
  const circle = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();

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
      tl.to(
        may?.current,
        {
          y: "+=600",
          color: "#012973",
          duration: 4,
        },
        "<0.7"
      );
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
        <SeasonDiv ref={may}>May</SeasonDiv>
        <SeasonDiv ref={jun}>June</SeasonDiv>
        <SeasonDiv ref={jul}>July</SeasonDiv>
        <SeasonDiv ref={aug}>August</SeasonDiv>
        <SeasonDiv ref={sept}>September</SeasonDiv>
        <SeasonDiv ref={oct}>October</SeasonDiv>
        <SeasonDiv ref={nov}>November</SeasonDiv>
        <SeasonDiv ref={dec}>December</SeasonDiv>
      </Container>
    </PageWrapper>
  );
}
