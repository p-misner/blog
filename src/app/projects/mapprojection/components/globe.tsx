"use client";

import { GlobeSVG, GreatCircleSelect } from "../style/globeStyle";
import { geoCircle, geoGraticule10, geoPath } from "d3-geo";
import { useEffect, useRef, useState } from "react";
import { MapProjections } from "../utils/projectionTypes";
export type MapProps = {
  width: number;
  height: number;
  data?: any;
  mapProj?: string;
  $mapProj?: string;
  circlePos: [number, number];
  setCirclePos: any;
};

export const Map = ({
  width,
  height,
  data,
  mapProj,
  circlePos,
  setCirclePos,
}: MapProps) => {
  const mapExtentRef = useRef<HTMLDivElement>(null);
  let circle = geoCircle().center(circlePos).radius(10).precision(10);
  let currentProj = MapProjections.filter((x) => x.name === mapProj)[0].value;
  const [bbox, setBbox] = useState({ top: 0, left: 0 });
  const set = () =>
    setBbox(
      mapExtentRef?.current
        ? mapExtentRef?.current?.getBoundingClientRect()
        : { top: 0, left: 0 }
    );
  useEffect(() => {
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const mapMargin = 12;
  // for preclipping: https://observablehq.com/@d3/spherical-clipping

  const projection = currentProj
    .fitExtent(
      [
        [mapMargin, mapMargin],
        [width - mapMargin, height - mapMargin],
      ],
      data
    )
    .rotate(
      mapProj == "Orthographic" ? [-circlePos[0], -circlePos[1]] : [0, 0]
    );

  // TO ROTATE GLOBE
  const rotate = projection.rotate();
  const geoPathGenerator = geoPath().projection(projection);
  const graticule = geoGraticule10();

  // build the paths
  const oceanColor = "#CEE2f2";
  const outlineColor = "#295107";
  const landColor = "#CADCBA";
  const graticuleColor = "#295107";
  const greatCircleColor = "#00f";
  const allSvgPaths = data.features.map((shape: any) => {
    return (
      <path
        key={shape.id}
        d={shape && geoPathGenerator(shape)}
        stroke={outlineColor}
        fill={landColor}
      />
    );
  });

  function orthoClick(click: React.MouseEvent<HTMLOrSVGElement> | MouseEvent) {
    // console.log("hi", click);
    // projection.rotate([rotate[0] + 5, rotate[1]]);
  }
  //translate mouseClick into LongLat
  function mapClick(click: React.MouseEvent<HTMLOrSVGElement> | MouseEvent) {
    let newCirclePos = projection.invert([
      click.clientX - bbox.left,
      click.clientY - bbox.top,
    ]);
    if (newCirclePos != undefined) {
      setCirclePos(newCirclePos);
    }
  }

  //mousemove
  const isDown = useRef<boolean>(false);
  const greatCircle = useRef<SVGPathElement>(null);

  const handleCursorPosition = (
    e: React.MouseEvent<HTMLOrSVGElement> | MouseEvent
  ): void => {
    mapClick(e);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    if (isDown.current) {
      handleCursorPosition(e);
    }
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLOrSVGElement> | MouseEvent
  ): void => {
    isDown.current = true;

    handleCursorPosition(e);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (): void => {
    isDown.current = false;

    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <div ref={mapExtentRef}>
      <GlobeSVG width={width} height={height} $mapProj={mapProj}>
        <g
          onClick={(e) => {
            mapProj == "Orthographic" ? orthoClick(e) : mapClick(e);
          }}
        >
          <path
            d={`${geoPathGenerator({ type: "Sphere" })}`}
            stroke="none"
            fill={oceanColor}
          ></path>
          <path
            d={`${geoPathGenerator(graticule)}`}
            stroke={graticuleColor}
            strokeOpacity=".2"
            fill="none"
          ></path>
          <g>{allSvgPaths}</g>

          <GreatCircleSelect
            ref={greatCircle}
            onMouseDown={(e) => handleMouseDown(e)}
            d={`${geoPathGenerator(circle())}`}
            stroke={greatCircleColor}
            strokeWidth="2px"
            strokeDasharray={mapProj == "Orthographic" ? "6, 3" : "none"}
            fill={greatCircleColor}
            fillOpacity={0.3}
          />

          <path
            d={`${geoPathGenerator({ type: "Sphere" })}`}
            stroke={outlineColor}
            strokeWidth="2px"
            fill="none"
          ></path>
        </g>
      </GlobeSVG>
    </div>
  );
};
