"use client";
import { scaleLinear } from "d3-scale";
import {
  CourtRect,
  CourtSvg,
  FieldCompareTextWrapper,
  FieldCompareWidgetWrapper,
  SVGBackground,
} from "../style/fieldCompareStyle";
import { ArcInputs, Soccer, SVGInputs, Tennis } from "../data/sportSvgs";
export default function FieldCompare() {
  return (
    <FieldCompareWidgetWrapper>
      {" "}
      FIELD COMPARE
      {MiniCourtGraphic({ sport1: "tennis", sport2: "soccer" })}
      <SVGBackground viewBox="0 0 1200 800">
        {CourtSvgGenerator({ sport: "soccer" })}
        {CourtSvgGenerator({ sport: "tennis" })}
      </SVGBackground>
    </FieldCompareWidgetWrapper>
  );
}

type SportTypes =
  | "tennis"
  | "cricket"
  | "soccer"
  | "american football"
  | "basketball";

function MiniCourtGraphic({
  sport1,
  sport2,
}: {
  sport1: SportTypes;
  sport2: SportTypes;
}) {
  return (
    <FieldCompareTextWrapper>
      <p> You could fit </p>
      <CourtSvg width={32} height={15}>
        <CourtRect x="0" y="0" width={10} height={15} />
        <CourtRect x="14" y="0" width={10} height={15} />
        <CourtRect x="28" y="0" width={4} height={15} />
      </CourtSvg>
      <p> 3.2 Tennis courts onto</p>
      <CourtSvg width={10} height={15}>
        <CourtRect x="0" y="0" width={10} height={15} />
      </CourtSvg>
      <p> a single Basketball court</p>
    </FieldCompareTextWrapper>
  );
}

function CourtSvgGenerator({ sport }: { sport: SportTypes }) {
  const svgWidth = 1200;
  const scale = scaleLinear([0, 400], [0, svgWidth]);
  const xOffset = 20;
  const yOffset = 40;
  const lines: SVGInputs[] =
    sport === "tennis"
      ? Tennis.filter((x) => x?.type === "line")
      : Soccer.filter((x) => x?.type === "line");
  const circles: SVGInputs[] =
    sport === "tennis"
      ? Tennis.filter((x) => x?.type === "circle")
      : Soccer.filter((x) => x?.type === "circle");
  const rectangles: SVGInputs[] =
    sport === "tennis"
      ? Tennis.filter((x) => x?.type === "rect")
      : Soccer.filter((x) => x?.type === "rect");
  const arcs: SVGInputs[] =
    sport === "tennis"
      ? Tennis.filter((x) => x?.type === "arc")
      : Soccer.filter((x) => x?.type === "arc");

  function SoccerRadius(arc: ArcInputs) {
    switch (arc.orientation) {
      case "sw":
        return `M ${scale(arc.centerX - arc.radius) + xOffset} ${
          yOffset + scale(arc.centerY)
        } q 0 ${scale(arc.radius * 1)}  ${scale(1 * arc.radius)} ${scale(
          arc.radius
        )} `;
      case "nw":
        return `M ${scale(arc.centerX - arc.radius) + xOffset} ${
          yOffset + scale(arc.centerY)
        } q 0 ${scale(arc.radius * -1)}  ${scale(1 * arc.radius)} ${scale(
          -1 * arc.radius
        )} `;
      case "se":
        return `M ${scale(arc.centerX + arc.radius) + xOffset} ${
          yOffset + scale(arc.centerY)
        } q 0 ${scale(arc.radius * 1)}  ${scale(-1 * arc.radius)} ${scale(
          arc.radius
        )} `;
      case "ne":
        return `M ${scale(arc.centerX) + xOffset} ${
          yOffset + scale(arc.centerY - arc.radius)
        } q ${scale(arc.radius * 1)} 0 ${scale(1 * arc.radius)} ${scale(
          1 * arc.radius
        )} `;
    }
  }
  return (
    <g>
      {lines.map((x) => (
        <line
          key={`${x.topLeftX}${x.topLeftY}${x.label}`}
          onClick={() => alert(x.label)}
          x1={scale(x.topLeftX) + xOffset}
          x2={
            x.orientation == "180"
              ? scale(x.topLeftX) + xOffset
              : scale(x.topLeftX) + scale(x.length) + xOffset
          }
          y1={scale(x.topLeftY) + yOffset}
          y2={
            x.orientation == "90"
              ? scale(x.topLeftY) + yOffset
              : scale(x.topLeftY) + scale(x.length) + yOffset
          }
          stroke={sport === "tennis" ? "rgba(0,200,0,.8)" : "rgba(0,0,0,.2)"}
          strokeWidth="2px"
        />
      ))}
      {circles.map((x) => (
        <circle
          key={`${x.topLeftX}${x.topLeftY}${x.label}`}
          onClick={() => alert(x.label)}
          cx={scale(x.topLeftX) + xOffset}
          cy={scale(x.topLeftY) + yOffset}
          r={scale(x.length)}
          stroke={sport === "tennis" ? "rgba(0,200,0,.8)" : "rgba(0,0,0,.2)"}
          strokeWidth="2px"
          fill="none"
        />
      ))}
      {rectangles.map((x) => (
        <rect
          key={`${x.topLeftX}${x.topLeftY}${x.label}`}
          x={scale(x.topLeftX) + xOffset}
          y={scale(x.topLeftY) + yOffset}
          width={scale(x.length)}
          height={scale(x.width ? x.width : 1)}
          stroke="none"
          fill={sport === "tennis" ? "rgba(0,250,0,.3)" : "rgba(0,0,0,.1)"}
        />
      ))}
      {arcs.map((x) => (
        <path
          key={`${x.arcPath?.centerX}${x.arcPath?.centerY}${x.label}`}
          d={SoccerRadius(
            x.arcPath
              ? x.arcPath
              : {
                  centerX: 1,
                  centerY: 1,
                  radius: 1,
                  orientation: "nw",
                }
          )}
          stroke={sport === "tennis" ? "rgba(0,200,0,.8)" : "rgba(0,0,0,.2)"}
          strokeWidth="2px"
          fill="none"
        />
      ))}

      {/* <rect x="5" y="5" width="20" height="10" /> */}
    </g>
  );
}
