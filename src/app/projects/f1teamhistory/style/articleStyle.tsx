import { fontSize, fontWeight } from "@/app/style/styleConstants";
import styled from "styled-components";

export const PageWrapper = styled.div`
  /* background-color: #e8e0e0;
  width: 100vw;
  margin: 0px auto; */
  height: 1000vh;
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
  /* top: 0px; */
  /* background-color: red; */
  padding: 24px;
  width: 60vw;
  text-align: center;
  /* border: 1px dashed magenta; */

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
  /* position: fixed; */
  z-index: 100;
  margin: 0px auto;
  padding: 24px;
  /* min-height: 200px; */
  width: 60vw;
  border: 1px dashed magenta;
  margin-bottom: 60vh;
  background-color: white;
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.light};
`;

export const BarChartWrapper = styled.div`
  min-height: 100vh;
  /* background-color: #fdfdfd; */
  border: 1px dotted aqua;
  stroke-dasharray: "10 10";
  z-index: -1;
`;
export const BarSVGWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  div {
    display: flex;
    flex-direction: column;

    /* justify-content: flex-end; */
  }
  svg {
    /* margin-right: 24px; */
    /* background-color: gainsboro; */
    margin-bottom: 8px;
  }
`;
