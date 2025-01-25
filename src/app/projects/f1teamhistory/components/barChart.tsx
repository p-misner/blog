import { useRef } from "react";
import { BarChartWrapper, BarSVGWrapper } from "../style/articleStyle";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import styled from "styled-components";
import { GridRows, GridColumns } from "@visx/grid";
import { AxisLeft, AxisTop } from "@visx/axis";
import { scaleOrdinal, scaleLinear, scaleBand } from "@visx/scale";
import { TeamHistory } from "../data/teams";
import { Group } from "@visx/group";
const constructors2024 = Array.from(
  new Set(TeamHistory.map((x) => x.currentName))
);
export const BarChartAnimated = () => {
  const barChartRef = useRef(null);
  useGSAP(() => {
    gsap.to(barChartRef.current, {
      scrollTrigger: {
        trigger: barChartRef.current,
        start: "top 1%",
        end: "bottom 1%",
        markers: true,
        pin: true,
        // pinSpacing: false,
        pinType: "transform",
      },
      border: "1px solid magenta",
      backgroundColor: "lightgray",
    });

    gsap.to(".RedBull rect", {
      scrollTrigger: {
        trigger: barChartRef.current,
        start: "top 65%", // when the top of the trigger hits the top of the viewport
        end: "top+=100", // end after scrolling 500px beyond the start
        scrub: true,
        markers: true,
      },
      fill: "red",
      attr: { x: "-=100", width: "+=100" },
    });
  });

  const svgWidth = 1000;
  const svgHeight = 64;
  return (
    <BarChartWrapper ref={barChartRef} className="barchartwrapper">
      <h2> Constructors over Time</h2>
      <div>
        {constructors2024.map((x, i) => (
          <BarSVGWrapper>
            <svg
              width={`${svgWidth}px`}
              height={`${svgHeight}px`}
              className={x}
              id={i == 0 ? "first" : ""}
            >
              <rect
                className={`rect-${x}`}
                y="0"
                x={`${svgWidth - 4}px`}
                width="4px"
                height={`${svgHeight}px`}
              ></rect>
            </svg>
          </BarSVGWrapper>
        ))}
      </div>
    </BarChartWrapper>
  );
};

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

  useGSAP(() => {
    gsap.to(barChartRef.current, {
      scrollTrigger: {
        trigger: barChartRef.current,
        endTrigger: ".lastcard",
        start: "top 0%",
        end: "bottom 0%",
        // markers: true,
        pin: true,
        pinSpacing: false,

        // onLeave: () => alert("lkeaving"),
        // pinType: "transform",
      },
      border: "1px solid magenta",
      // backgroundColor: "lightgray",
    });
    // gsap.to(".singleyear", {
    //   scrollTrigger: {
    //     trigger: barChartRef.current,
    //     start: "top 0%",
    //     end: "bottom 0%",
    //     scrub: 2,
    //     // markers: true,
    //     // pin: true,
    //     // pinSpacing: false,
    //     pinType: "transform",
    //   },
    //   stagger: 0.3,
    //   opacity: 0.8,
    // });
  });
  return (
    <BarChartWrapper ref={barChartRef} className="barchartwrapper">
      <BarSVG viewBox={`0 0 ${dimens.width} ${dimens.height}`}>
        <Group left={margin.left} top={margin.top}>
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
                    <rect
                      key={x.currentName + item.year}
                      className={`singleyear opaque item${item.year}  ${
                        x.years[i].team == x.currentName ? "currentTeam" : ""
                      }`}
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
