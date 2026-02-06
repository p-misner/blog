import { spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: var(--font-space-grotesk), Futura, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Title = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  /* border-bottom: 2px; */
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const ControlRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

export const ControlButtonBox = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  border-right-width: 0px;
  /* border-bottom: 0px; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  column-gap: 24px;
  padding: 16px;
  font-size: 16px;
  flex-grow: 1;
  &:last-child {
    border-right-width: 2px;
  }
  span {
    opacity: 50%;
    /* padding-right: 4px; */
    letter-spacing: 2.5px;
  }
`;

interface RockWrapperProps {
  $width: number;
  $height: number;
}
export const RockWrapper = styled.div<RockWrapperProps>`
  position: absolute;
  top: calc(${(props) => props.$height} * 100%);
  left: calc(${(props) => props.$width} * 100%);
  transform: translate(-50%, -50%);
  touch-action: none;
  pointer-events: none;
`;

// export const SandBoxWrapper = styled.div`
//   position: relative;
//   width: 100vw;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   overflow: hidden;
//   min-height: 0;
// `;

export const SandBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0; /* Essential for Firefox/Safari flex shrinking */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Clip anything that tries to escape */
`;

export const Sand = styled.div`
  flex: 1;
  width: 100%;
  height: 100%; /* Fill the SandBoxWalls */
  position: relative; /* p5 canvas needs this to anchor */
  overflow: hidden;

  canvas {
    /* Force the canvas to obey the div size, regardless of p5 logic */
    display: block;
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: contain;
  }
`;

export const SandBoxWalls = styled.div`
  box-sizing: border-box;
  touch-action: none;
  border: 1px solid black;
  box-shadow: inset 0 0 0 1px #000000;
  padding: 0px;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  margin: 0px auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

// export const Sand = styled.div`
//   position: relative;
//   top: 1px;
//   left: 1px;
//   width: 100%;
//   height: 100%;

//   padding: 0px;
//   flex: 1;
//   canvas {
//     display: block;
//     width: 100% !important;
//     height: 100% !important;
//   }
// `;
