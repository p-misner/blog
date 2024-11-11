"use client";

import styled from "styled-components";

export const FieldCompareWidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // height: 500px;
  border: 2px solid #d3d3d3;
  border-radius: 16px;
  grid-column: 2 / span 10;
  padding: 24px;
`;

export const CourtSvg = styled.svg`
  margin-left: 8px;
  margin-right: 4px;
`;
export const CourtRect = styled.rect`
  stroke: black;
  stroke-width: 2px;
  fill: gray;
`;

export const SVGBackground = styled.svg`
  // width: 1200px;
  // height: 800px;
  // background: rgba(0, 0, 200, 0.2);
`;

export const FieldCompareTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0px;
`;
