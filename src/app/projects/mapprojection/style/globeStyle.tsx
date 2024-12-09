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
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23535353' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
