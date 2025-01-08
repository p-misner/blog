"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  //   const [scrollDistance, setScrollDistance] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  let position = 0;
  const handleScroll = () => {
    position = window.scrollY < 150 ? 0 : window.scrollY - 150;

    setScrollPosition(position);
  };

  useEffect(() => {
    let intervalId: any;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <LongScrollWrapper>
      <ScrollAmount>
        {" "}
        <h1> The Million Pixel Dash</h1>
        <h2> How fast can you scroll? Timer starts when you pass start! </h2>
        <h1>
          you have scrolled down <span>{scrollPosition} pixels</span> in{" "}
          <span>{elapsedTime} seconds</span>
        </h1>
        <ScrollPlayer />
      </ScrollAmount>
      {Array.from(Array(1001).keys()).map((x) => (
        <StartLine amount={x * 1000} key={x}>
          <p>
            {x == 0 ? "[Start]" : ""} {x == 1000 ? "[End]" : ""} {x * 1000}px
          </p>
        </StartLine>
      ))}
    </LongScrollWrapper>
  );
}

const LongScrollWrapper = styled.div`
  height: 1002000px;
  background: rgb(103, 255, 0);
  background: linear-gradient(
    0deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 25%,
    rgba(252, 176, 69, 1) 50%,
    rgba(252, 246, 69, 1) 75%,
    rgba(178, 252, 69, 1) 100%
  );
`;

const ScrollAmount = styled.div`
  position: sticky;
  top: 25px;
  left: 24px;
  text-align: center;

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 24px;
  }
  span {
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
`;
const StartLine = styled.div<{ amount: number }>`
  position: absolute;
  top: ${(props) => `${props.amount + 300}px`};
  width: 100%;
  height: 2px;
  border-bottom: 1px solid black;
  p {
    margin-top: -12px;
  }
`;
