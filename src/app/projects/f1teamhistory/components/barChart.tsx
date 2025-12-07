import { useCallback, useRef, MouseEvent } from "react";
import { BarChartWrapper } from "../style/articleStyle";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import styled from "styled-components";
import { GridRows, GridColumns } from "@visx/grid";
import { AxisLeft, AxisTop } from "@visx/axis";
import { scaleOrdinal, scaleLinear, scaleBand } from "@visx/scale";
import { TooltipWithBounds, useTooltip } from "@visx/tooltip";

import { TeamHistory } from "../data/teams";
import { Group } from "@visx/group";
const constructors2024 = Array.from(
  new Set(TeamHistory.map((x) => x.currentName))
);

export const BarChart = () => {
  const barChartRef = useRef(null);

  //   data viz constants
  const dimens = { width: 1000, height: 600 };
  const margin = { top: 96, right: 8, bottom: 50, left: 96 };
  const rectHeight = 40;

  const yearScale = scaleLinear<number>({
    domain: [1950, 2024],
  });
  const teamScale = scaleBand({
    domain: constructors2024,
  });
  const xMax = dimens.width - margin.left - margin.right;
  const yMax = dimens.height - margin.top - margin.bottom;
  yearScale.range([0, xMax]);
  teamScale.range([0, yMax]);

  const rectWidth = yearScale(1999) - yearScale(1998);
  const {
    showTooltip,
    hideTooltip,
    tooltipOpen,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<string>({
    // initial tooltip state
    tooltipOpen: true,
    tooltipData: "Move me with your mouse or finger",
  });

  useGSAP(() => {
    gsap.to(barChartRef.current, {
      scrollTrigger: {
        trigger: barChartRef.current,
        endTrigger: ".lastcard",
        start: "top 0%",
        end: "bottom 0%",
        pin: true,
        pinSpacing: false,
      },
      border: "1px solid magenta",
    });
  });
  return (
    <BarChartWrapper
      ref={barChartRef}
      className="barchartwrapper"
      onClick={() => console.log("barchart clicked")}
    >
      <BarSVG viewBox={`0 0 ${dimens.width} ${dimens.height}`}>
        <Group
          left={margin.left}
          top={margin.top}
          onMouseLeave={() => {
            tooltipOpen: false;
          }}
        >
          <GridRows
            scale={teamScale}
            width={xMax}
            height={yMax}
            stroke="black"
          />
          <GridColumns
            scale={yearScale}
            width={xMax}
            height={yMax}
            stroke="black"
          />
          <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke="black" />
          <AxisTop
            top={0}
            scale={yearScale}
            numTicks={dimens.width > 520 ? 10 : 5}
            tickFormat={(d) => {
              //   console.log(d);
              return d.toString() + "s";
            }}
          />

          {TeamHistory.map((x) => {
            let count = 0;
            return (
              <g key={x.currentName} className={x.currentName}>
                {x.years.map((item, i) => {
                  if (i > 1 && x.years[i].team !== x.years[i - 1].team) {
                    count++;
                  }
                  return (
                    <CarYearRect
                      onMouseEnter={(event: MouseEvent<SVGRectElement>) => {
                        showTooltip({
                          tooltipData: `${x.years[i].team}/${item.year}`,
                          tooltipLeft: event.clientX,
                          tooltipTop: event.clientY,
                        });
                      }}
                      key={x.currentName + item.year}
                      className={`singleyear item${item.year}  ${
                        x.years[i].team == x.currentName ? "currentTeam" : ""
                      } ${x.currentName}`}
                      x={yearScale(item.year) - rectWidth + rectWidth / 2}
                      y={teamScale(x.currentName)}
                      height={`${rectHeight}px`}
                      width={`${rectWidth}px`}
                      fill={count % 2 == 0 ? "gray" : "darkgray"}
                    />
                  );
                })}
              </g>
            );
          })}
        </Group>
      </BarSVG>
      {tooltipData ? (
        <TooltipWithBounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          // style={tooltipStyles}
        >
          {tooltipData.split("/").map((x) => (
            <p key={x}>{x}</p>
          ))}
          {/* <p>{`Total Spend: `}</p>
          <p>{`Renewable Spend:`}</p> */}
        </TooltipWithBounds>
      ) : null}
    </BarChartWrapper>
  );
};

const BarSVG = styled.svg`
  width: 99vw;
  height: 60vw;
  .opaque {
    opacity: 0.2;
  }
`;

//this relates to the tooltip
const CarYearRect = styled.rect`
  /* opacity: 0.2; */
  &:hover {
    stroke: black;
    stroke-width: 1px;
    -webkit-filter: drop-shadow(1px 0px 3px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(1px 0px 3px rgba(0, 0, 0, 0.5));
  }
`;
