import dataJSON from "../data/data.json";

import { GridRows, GridColumns } from "@visx/grid";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft, AxisTop } from "@visx/axis";
import { withTooltip, Tooltip } from "@visx/tooltip";
import { scaleTime, scaleLinear } from "@visx/scale";
import { HighlightCategoryType } from "../page";
import { DataLiberationColors } from "../style/StyleConstants";
import { useState } from "react";
import { TooltipWrapper } from "../style/PageStyle";
import useScreenSize from "../../mapprojection/utils/screenSize";

const defaultMargin = { top: 60, left: 70, right: 40, bottom: 60 };

const getYearTotalData = () => {
  {
    let dataByYear = [];
    let newYear = "";

    for (let i = 0; i < dataJSON.length; i++) {
      let currentYear: any[] = dataJSON[i].DOD.split("/");
      if (newYear != currentYear[2]) {
        newYear = currentYear[2];
        dataByYear.push({
          year: `${currentYear[2]} `,
          details: [dataJSON[i]],
        });
      } else {
        dataByYear[dataByYear.length - 1].details.push(dataJSON[i]);
      }
    }
    return dataByYear;
  }
};

function sortByCategory(arr: any, category: string) {
  return arr.sort((a: any, b: any) => {
    return a[category].localeCompare(b[category]);
  });
}

export const WaffleChart = ({
  width,
  height,
  highlightCategory,
  margin = defaultMargin,
}: {
  highlightCategory: HighlightCategoryType;
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipData, setTooltipData] = useState<any>({
    deathcategory: "Cancer",
    dod: "11/24/2010",
    instid: "BUH",
    registernum: "XX",
    namelast: "Horton",
    race: "Black",
    sex: "Male",
    x: 0,
    y: 0,
  });
  const screenSize = useScreenSize();

  const yScale = scaleLinear<number>({
    domain: [0, 672],
    // nice: true,
  });
  const dateScale = scaleTime<number>({
    domain: [new Date("2005-01-01"), new Date("2024-09-01")],
    // nice: true,
  });
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  yScale.rangeRound([0, yMax]);
  dateScale.rangeRound([0 + 48, xMax - 48]);

  const yearlyData = getYearTotalData().map((x) => {
    return {
      year: x.year,
      details: sortByCategory(x.details, highlightCategory.category),
    };
  });

  return (
    <div>
      {tooltipOpen && (
        <TooltipWrapper x={tooltipData.x} y={tooltipData.y}>
          <p>
            <span>Last Name </span> {tooltipData.namelast}
          </p>
          <p>
            <span>Race </span> {tooltipData.race}
          </p>
          <p>
            <span>Sex </span> {tooltipData.sex}
          </p>
          <p>
            <span>Death Category </span> {tooltipData.deathcategory}
          </p>
          <p>
            <span>Insitution ID </span> {tooltipData.instid}
          </p>
        </TooltipWrapper>
      )}
      <svg
        width={screenSize.width < 1120 ? screenSize.width : 1120}
        height={
          screenSize.width < 1120 ? screenSize.width * 0.583 : 1120 * 0.583
        }
        viewBox={`0 0 ${width} ${height}`}
      >
        {/* <rect width={width} height={height} rx={8} fill="#ddd" /> */}
        <Group top={margin.top} left={margin.left}>
          <GridRows
            scale={yScale}
            width={xMax - 48}
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
            // hideAxisLine
            label={"Number of Deaths"}
            labelOffset={48}
            labelProps={{ fontSize: 16, fontWeight: 600, opacity: 0.6 }}
            hideTicks
            scale={yScale}
            tickLabelProps={{
              fontSize: 16,
              textAnchor: "middle",
              dy: "0.33em",
              dx: "-0.63em",
            }}
          />
          <AxisTop
            top={0}
            scale={dateScale}
            label={"Year of Death"}
            labelOffset={16}
            labelProps={{
              fontSize: 16,
              fontWeight: 600,
              opacity: 0.6,
              textAnchor: "middle",
            }}
            tickLabelProps={{
              fontSize: 16,
              textAnchor: "middle",
            }}
          />
          {yearlyData.map((d, i) => {
            return d.details.map((dd: any, ii: number) => {
              return (
                <Bar
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    setTooltipOpen(true);
                    setTooltipData({
                      ...e.currentTarget.dataset,
                      x: e.clientX,
                      y: e.pageY,
                    });
                  }}
                  onMouseLeave={() => setTooltipOpen(false)}
                  key={`bar-${ii}`}
                  x={
                    dateScale(Date.parse(`1/1/${d.year}`)) +
                    (ii % 7) * 6 -
                    (6 * 7) / 2 +
                    0.5
                  }
                  y={Math.floor(ii / 7) * 6}
                  width={5}
                  height={5}
                  fill={
                    dd[highlightCategory.category] ==
                    highlightCategory.selection
                      ? DataLiberationColors.yellow
                      : "rgba(0,0,0,1)"
                  }
                  stroke="rgba(0,0,0,1)"
                  strokeWidth={
                    dd[highlightCategory.category] ==
                    highlightCategory.selection
                      ? "0.2"
                      : "0"
                  }
                  opacity={
                    tooltipOpen
                      ? tooltipData.registernum == dd.RegisterNum
                        ? 1
                        : 0.3
                      : 1
                  }
                  data-race={dd.Race}
                  data-sex={dd.Sex}
                  data-instid={dd.InstID}
                  data-dod={dd.DOD}
                  data-deathcategory={dd.DeathCategory}
                  data-namelast={dd.NameLast}
                  data-registernum={dd.RegisterNum}
                />
              );
            });
          })}
        </Group>
      </svg>
    </div>
  );
};
