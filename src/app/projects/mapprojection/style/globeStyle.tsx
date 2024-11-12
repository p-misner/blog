"use client";
import styled from "styled-components";

export const BodyWrapper = styled.div`
  background-color: #dee7d6;
  min-height: 100vh;
`;
export const ContentWrapper = styled.div`
  margin: 0px auto;
  width: 80vw;
`;

export type GlobeSVGProps = {
  width: number;
  height: number;

  $mapProj?: string;
};
export const GlobeSVG = styled.svg<GlobeSVGProps>`
  background-color: "none";
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  cursor: "cursor";
`;
export const GreatCircleSelect = styled.path`
  cursor: move;
`;

export const FixedGreatCircle = styled.g`
  // transform: translate(120, 2.5);
`;

export const GlobeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 24px;
`;
export const ProjectionComparisonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0px;
  right: 0px;
  width: 300px;
  height: 280px;
  background-color: #e5edde;
  border: 2px black solid;
`;

export const MapsWrapper = styled.div`
  position: relative;
`;
type labelLength = {
  $labelLength?: number;
};
export const Selector = styled.select<labelLength>`
  font-size: 24px;
  max-width: ${({ $labelLength }) =>
    $labelLength ? `${($labelLength + "projection".length) * 13}px` : "100px"};
  width: 100%;
  font-family: "Instrument Serif", serif;
  padding: 4px;
  background-color: #e5edde;
`;

export const SelectOptions = styled.option`
  font-size: 24px;
  color: red;
`;

export const TitleTextWrapper = styled.div`
  padding-top: 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  row-gap: 24px;
  font-family: "Instrument Serif", serif;
`;

export const TitleText = styled.h2`
  font-size: 32px;
`;
export const SupertitleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  height: 32px;
  // background-color: red;
`;

export const LatLngWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 12px;
`;
export const SupertitleTex = styled.h2`
  font-size: 16px;
`;

export const FooterText = styled.div`
  font-family: "Instrument Serif", serif;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    color: black;
  }
  a:hover {
    text-decoration-style: double;
  }
`;
