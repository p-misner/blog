"use client";
import styled from "styled-components";

export const PageWrapper = styled.div`
  /* background-color: skyblue; */
  width: 100vw;
  height: 100vh;
  background-color: #9db846;
  background-image: url("/spriteSheets/grass3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Headline = styled.h1`
  left: 24px;
  top: 24px;
  position: absolute;
  max-width: 6vw;
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #141135;
  opacity: 0.3;
  filter: blur(3px);
`;

export const Subtitle = styled.h2`
  right: 24px;
  top: 32px;
  position: absolute;
  /* max-width: 6vw; */
  font-size: 20px;
  /* font-family: Georgia, "Times New Roman", Times, serif; */
  color: #141135;
  opacity: 0.3;
  filter: blur(1.5px);
  a,
  &a:visited {
    color: #141135;
    text-decoration: underline;
  }
  @media (max-width: 576px) {
    /* Styles applied ONLY when the screen width is 576px or narrower */
    width: 20vw;
  }
`;

export const Buttons = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 12px 4px 12px;
  border-radius: 5px 5px 0 0;
  z-index: 1000; /* Ensure it stays on top of other content */
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  border-radius: 12px 12px 0px 0px;
`;

interface ToggleButtonProps {
  active: boolean;
}
export const Button = styled.button<ToggleButtonProps>`
  background-color: ${(props) =>
    props.active ? "rgba(255,255,255,0.7)" : "transparent"};
  color: #494949;
  text-align: center;
  padding: 12px 12px 4px 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: ${(props) => (props.active ? "0.9" : "1")};
    background-color: ${(props) =>
      props.active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)"};
  }
  svg {
    width: 32px;
  }
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
  opacity: 0.3;
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
