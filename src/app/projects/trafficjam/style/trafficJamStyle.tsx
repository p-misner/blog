import styled from "styled-components";
import {
  animationProps,
  bodybounce,
  cloudmove,
  hillmove,
  tirerotate,
} from "./animations";

export const AddTrafficBtn = styled.button`
  position: absolute;
  z-index: 100;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  cursor: pointer;
`;

export const HillSVGWrapper = styled.svg<animationProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  animation-name: ${(props) =>
    hillmove({
      $animationStartPoint: props.$animationStartPoint,
      $animationWidth: props.$animationWidth,
      $topMargin: props.$topMargin,
    })};
  animation-duration: ${(props) => (props.$speed ? `${props.$speed}s` : "80s")};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  width: 800px;
  height: 220px;
  z-index: ${(props) => 40 - props.$topMargin};

  path {
    stroke: #424242;
    fill: black;
  }
  @media screen and (min-width: 1000px) {
    width: 1200px;
    height: 220px;
  }
`;

export const CloudSVGWrapper = styled.svg<animationProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  animation-name: ${(props) =>
    cloudmove({
      $animationStartPoint: props.$animationStartPoint,
      $animationWidth: props.$animationWidth,
      $topMargin: props.$topMargin,
    })};
  animation-duration: 120s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  path {
    stroke: #a3a3a3;
    fill: #fafafa;
  }
`;

export const PageWrapper = styled.div`
  width: 100vw;
  background-color: white;
  min-height: 100vh;
  overflow-x: hidden;
`;
export const CloudWrapper = styled.div`
  position: relative;
  margin-left: -260px;
  width: calc(100vw + 260px);
  min-height: 150px;
`;
export const HillsWrapper = styled.div`
  position: relative;
  margin-left: -100vw;
  width: 200vw;
  height: 220px;
`;

export const RoadLaneWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 50px 60px 80px 110px 150px;
  width: 100vw;
  @media screen and (min-width: 1000px) {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 50px 60px 80px 110px 150px;
  }
`;

export const GridItem = styled.div`
  z-index: 100;
  border-bottom: 1px solid #838383;

  width: 33vw;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    width: 25vw;
  }
`;

export const CarSVG = styled.svg`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const Wheel = styled.g<{ transformOrigin: string }>`
  transform-origin: ${(props) => props.transformOrigin};
  animation: ${tirerotate} 2s linear infinite;
`;

export const CarBody = styled.g`
  transform-origin: center;
  animation: ${bodybounce} 2s linear infinite;
`;
