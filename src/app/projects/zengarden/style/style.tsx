import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: var(--font-space-grotesk), Futura, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-color: #fff;
`;

export const Title = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  z-index: 10;

  h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 0;
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
  background-color: #fff;
  z-index: 10;
`;

export const ControlButtonBox = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  border-top-width: 0px;
  border-right-width: 0px;
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
  p {
    margin: 0;
  }

  span {
    opacity: 50%;
    letter-spacing: 2.5px;
  }
`;

export const SandBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SandBoxWalls = styled.div`
  box-sizing: border-box;
  border: 2px solid black;
  border-top-width: 0px;
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

export const Sand = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;

  canvas {
    display: block;
    position: absolute;
    inset: 0;
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
  z-index: 5; /* Keep rocks above the sand but below UI */
`;
