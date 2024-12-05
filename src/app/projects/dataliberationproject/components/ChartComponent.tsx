import dataJSON from "./data.json";
import React from "react";
import { BarStackHorizontal, Circle } from "@visx/shape";
import { SeriesPoint } from "@visx/shape/lib/types";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import { scaleBand, scaleTime, scaleLinear, coerceNumber } from "@visx/scale";
import { timeParse, timeFormat } from "@visx/vendor/d3-time-format";
import { withTooltip, Tooltip, defaultStyles } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";

type CityName = "New York" | "San Francisco" | "Austin";

type TooltipData = {
  bar: any;
  key: CityName;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
};

type BarStackHorizontalProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

const defaultMargin = { top: 60, left: 50, right: 40, bottom: 60 };
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "white",
};
const getMinMax = (vals: (number | { valueOf(): number })[]) => {
  const numericVals = vals.map(coerceNumber);
  return [Math.min(...numericVals), Math.max(...numericVals)];
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getMonthTotalData = () => {
  {
    let newMonth = "";
    let dataByMonth: any[] = [];

    for (let i = 0; i < dataJSON.length; i++) {
      let currentMonth: any[] = dataJSON[i].DOD.split("/");

      if (newMonth != currentMonth[0]) {
        newMonth = currentMonth[0];
        dataByMonth.push({
          month: `${months[currentMonth[0] - 1]} ${currentMonth[2]}`,
          details: [dataJSON[i]],
        });
      } else {
        dataByMonth[dataByMonth.length - 1].details.push(dataJSON[i]);
      }
    }
    return dataByMonth;
  }
};
const getYearTotalData = () => {
  {
    let dataByMonth = getMonthTotalData();
    let dataByYear = [];
    let newYear = "";

    for (let i = 0; i < dataByMonth.length; i++) {
      let currYear: any[] = dataByMonth[i].month.split(" ");
      if (newYear != currYear[1]) {
        newYear = currYear[1];
        dataByYear.push({
          year: `${currYear[1]}`,
          total: dataByMonth[i].details.length,
          details: [dataByMonth[i].details],
        });
      } else {
        dataByYear[dataByYear.length - 1].details.push(dataByMonth[i]);
        dataByYear[dataByYear.length - 1].total =
          dataByYear[dataByYear.length - 1].total +
          dataByMonth[i].details.length;
      }
    }
    return dataByYear;
  }
};
const parseDate = timeParse("%m/%d/%Y");
const format = timeFormat("%m/%Y");
const formatDate = (date: string) => format(parseDate(date) as Date);
const dataMinMax = getMinMax([5, 10, 20]);
console.log(dataMinMax);
//data

const monthlyData = getMonthTotalData();
const yearlyData = getYearTotalData();

// accessors
const getDate = (d: any) => d.DOD;

// scales
const xScale = scaleLinear<number>({
  domain: [0, 600],
  nice: true,
});
const dateScale = scaleTime<number>({
  domain: [new Date("2005-01-01"), new Date("2024-09-01")],
  nice: true,
});

let tooltipTimeout: number;

export default withTooltip<BarStackHorizontalProps, TooltipData>(
  ({
    width,
    height,
    events = false,
    margin = defaultMargin,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }: BarStackHorizontalProps & WithTooltipProvidedProps<TooltipData>) => {
    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    xScale.rangeRound([yMax, 0]);
    dateScale.rangeRound([0, xMax]);

    return width < 10 ? null : (
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} rx={8} fill="#ddd" />
          <Group top={margin.top} left={margin.left}>
            <GridRows
              scale={xScale}
              width={xMax}
              height={yMax}
              stroke="#aaaaaa"
            />
            <GridColumns
              scale={dateScale}
              width={xMax}
              height={yMax}
              stroke="#aaaaaa"
            />
            <AxisLeft
              hideAxisLine
              hideTicks
              scale={xScale}
              tickLabelProps={{
                fontSize: 11,
                textAnchor: "end",
                dy: "0.33em",
              }}
            />
            <AxisBottom
              top={yMax}
              scale={dateScale}
              //   tickFormat={formatDate}
              tickLabelProps={{
                fontSize: 11,
                textAnchor: "middle",
              }}
            />
            {yearlyData.map((d, i) => {
              const barWidth = 35;
              const barHeight = yMax - (xScale(d.total) ?? 0);
              const barX = dateScale(new Date(d.year));
              const barY = yMax - barHeight;
              return (
                <Bar
                  key={`bar-${d.year}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="rgba(0,0,0,.2)"
                />
              );
            })}

            {monthlyData.map((d) => {
              const barWidth = 2;
              const barHeight = yMax - (xScale(d.details.length) ?? 0);
              const barX = dateScale(new Date(d.month));
              const barY = yMax - barHeight;
              return (
                <Bar
                  key={`bar-${d.month}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={d.month.includes("January") ? "#FFDD04" : "#000"}
                />
              );
            })}
          </Group>
        </svg>

        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            <div>Tooltip</div>
          </Tooltip>
        )}
      </div>
    );
  }
);
