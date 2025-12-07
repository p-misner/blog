import { fontSize, fontWeight } from "@/app/style/styleConstants";
import styled from "styled-components";

export const PageWrapper = styled.div`
  /* background-color: #e8e0e0;
  width: 100vw;
  margin: 0px auto; */
  /* height: 1000vh; */
`;

export const RectBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: blue;
  border: 1px solid black;
  margin-top: 0px;
  transform-origin: "50% 50%";
`;
export const SVGBox = styled.svg`
  margin-top: 10px;
  width: 100vw;
  height: 90vh;
  /* background-color: #bababa; */
  /* border: 3px solid red; */
`;

export const ArticleTitleWrapper = styled.div`
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 60vw;
  text-align: center;

  h1 {
    font-size: 6vw;
    text-transform: capitalize;
    padding-bottom: 16px;
  }
  h2 {
    font-size: 4vw;
    text-transform: capitalize;
  }
`;

export const TextSectionWrapper = styled.div`
  margin: 0px auto;
  padding: 24px;
  width: 60vw;
  height: fit-content;
  border: 1px dashed magenta;
  margin-bottom: 60vh;
  background-color: white;
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.light};
`;

export const BarChartWrapper = styled.div`
  min-height: 100vh;
  border: 1px dotted aqua;
  stroke-dasharray: "10 10";
`;
