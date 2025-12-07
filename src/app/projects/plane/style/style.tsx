"use client";
import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: skyblue;
  width: 100vw;
  height: 100vh;
`;

export const PlanePlaceholder = styled.div`
  opacity: 1;
  /* width: 98px;
  height: 32px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg path {
    fill: #141135;
    opacity: 0.2;
  }
  position: absolute;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
`;

export const Flock = styled.div`
  /* background-color: olivedrab; */
  opacity: 0.5;
  width: 250px;
  height: 150px;
  position: absolute;
  div:first-child {
    top: 30px;
    left: 180px;
  }
  div:nth-child(2) {
    top: 0px;
    left: 120px;
  }
  div:nth-child(3) {
    top: -20px;
    left: 100px;
  }
  div:nth-child(4) {
    top: 50px;
    left: 40px;
  }
`;
export const BirdFlapping = styled.div`
  width: 74px;
  height: 98px;

  background-image: url("/spriteSheets/smallBirdSpritesRight.png");
  background-repeat: no-repeat;
  background-size: 518px 98px;
  background-position-x: 0px;
  position: absolute;
`;
