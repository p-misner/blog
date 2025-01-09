"use client";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const startLineRef = useRef<HTMLDivElement>(null);
  const endLineRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [seconds, setSeconds] = useState(0);
  let position = 0;

  const handleScroll = () => {
    if (playerRef.current) {
      const offset =
        450 -
        playerRef.current.getBoundingClientRect().y -
        playerRef.current.getBoundingClientRect().height;
      position =
        window.scrollY < offset
          ? 0
          : window.scrollY > 1000000 + offset
          ? 1000000
          : window.scrollY - offset;
      if (window.scrollY > 1000000 + offset) {
        setEnded(true);
      }
      if (window.scrollY > offset) {
        setStarted(true);
      }
      setScrollPosition(position);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (started && !ended) setSeconds(seconds + 0.1);
    }, 100);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [seconds, started]);

  //   const startIntersectionCallback = (entries: any) => {
  //     entries.forEach((entry: any) => {
  //       if (entry.isIntersecting && playerRef.current) {
  //         setStarted(true);
  //         let line = entry.boundingClientRect;
  //         let playerDimen = playerRef.current.getBoundingClientRect();

  //         let intersecting =
  //           line.y > playerDimen.y && line.y < playerDimen.y + playerDimen.height;
  //         if (intersecting && started == false) {
  //           setStarted(true);
  //           console.log("intersected");
  //         }
  //       }
  //     });
  //   };
  //   const endIntersectionCallback = (entries: any) => {
  //     entries.forEach((entry: any) => {
  //       if (entry.isIntersecting && playerRef.current) {
  //         setStarted(true);
  //         let line = entry.boundingClientRect;
  //         let playerDimen = playerRef.current.getBoundingClientRect();
  //         let intersecting =
  //           line.y > playerDimen.y && line.y < playerDimen.y + playerDimen.height;
  //         if (intersecting && started == true) {
  //           setEnded(true);
  //         }
  //       }
  //     });
  //   };

  //   const startObserver = new IntersectionObserver(
  //     startIntersectionCallback,
  //     options
  //   );
  //   const endObserver = new IntersectionObserver(
  //     endIntersectionCallback,
  //     options
  //   );
  //   if (startLineRef.current) startObserver.observe(startLineRef.current);
  //   if (endLineRef.current) endObserver.observe(endLineRef.current);

  return (
    <div>
      <LongScrollWrapper>
        <ScrollAmount>
          {" "}
          <h1> The Million Pixel Dash</h1>
          <h3> How fast can you scroll? Timer starts when you pass start! </h3>
        </ScrollAmount>
        <ScrollScore>
          <h2>
            <span>{Math.round(scrollPosition)} pixels</span> in{" "}
            <span>{seconds.toFixed(2)} seconds</span>
          </h2>
          <ScrollPlayer ref={playerRef} />
        </ScrollScore>
        {Array.from(Array(1001).keys()).map((x) => (
          <StartLine
            amount={x * 1000}
            key={x}
            ref={x == 0 ? startLineRef : x == 1000 ? endLineRef : null}
          >
            <p>
              {x == 0 ? "[Start]" : ""} {x == 1000 ? "[End]" : ""} {x * 1000}px
            </p>
            <p>
              {x * 1000}px {x == 0 ? "[Start]" : ""} {x == 1000 ? "[End]" : ""}
            </p>
          </StartLine>
        ))}
        {ended && (
          <WinModal>
            <h1>
              {" "}
              Congratulations! You scrolled 1,000,000 Pixels in {seconds}{" "}
              seconds!
              <ScrollAmount>
                Million Pixel Dash // 84.7 seconds 🏃‍♂️⬜️⬜️🟨🟨🟩🟩🟦🟦💨 see if
                you can beat my time: www.blog.priyamisner.com/onemillion
              </ScrollAmount>
            </h1>
          </WinModal>
        )}
      </LongScrollWrapper>
    </div>
  );
}

const LongScrollWrapper = styled.div`
  position: relative;
  color: black;
  width: 100vw;
  scrollbar-width: none;
  body:not(&) * {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  body:not(&)::-webkit-scrollbar {
    display: none;
  }
  body:not(&) {
    background: linear-gradient(
      180deg,
      rgba(222, 247, 247, 1) 0%,
      rgba(253, 236, 45, 1) 25%,
      rgba(45, 253, 147, 1) 50%,
      rgba(45, 116, 253, 1) 75%,
      rgba(18, 51, 113, 1) 100%
    );
  }
  height: 1002000px;

  /* background: linear-gradient(
    0deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 25%,
    rgba(252, 176, 69, 1) 50%,
    rgba(252, 246, 69, 1) 75%,
    rgba(178, 252, 69, 1) 100%
  ); */
`;

const ScrollAmount = styled.div`
  /* top: 25px;
  left: 24px;
  text-align: center;
  position: sticky; */
  text-align: center;
  margin-top: 48px;
  margin-left: 24px;
  margin-right: 24px;
  h1 {
    font-size: 32px;
    font-weight: 500;
  }
  h3 {
    font-size: 24px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 24px;
  }
`;

const ScrollScore = styled.div`
  top: 25px;
  left: 24px;
  text-align: center;
  position: sticky;
  h2 {
    font-size: 24px;
    font-weight: 300;
  }
  span {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid black;
    padding: 4px;
    border-radius: 4px;
  }
`;

const ScrollPlayer = styled.div`
  border-radius: 100%;
  background-color: black;
  height: 40px;
  width: 40px;
  margin: 0 auto;
  margin-top: 108px;
`;
const StartLine = styled.div<{ amount: number }>`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: ${(props) => `${props.amount + 450}px`};
  width: 100%;
  height: 2px;
  border-bottom: 1px solid black;
  p {
    font-size: 16px;
    margin-top: -12px;
  }
`;

const WinModal = styled.div`
  position: sticky;
  top: 60%;
  margin: 0px auto;
  max-width: 600px;
  width: 80vw;
  height: 152px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid gray;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 24px;
  /* left: 50%;
  transform: translate(-50%, -50%); */
`;

const ShareResults = styled.div`
  background-color: lightgray;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
