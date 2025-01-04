"use client";
import { useEffect, useMemo, useState } from "react";
import { returnRandomCar } from "./components/carAnimations";
import {
  CloudSVGWrapper,
  CloudWrapper,
  HillSVGWrapper,
  HillsWrapper,
  PageWrapper,
  GridItem,
  RoadLaneWrapperGrid,
  AddTrafficBtn,
} from "./style/trafficJamStyle";

export default function TrafficJam() {
  const [carGrid, setCarGrid] = useState<any[]>(
    Array.from(Array(20).keys()).map((x) => null)
  );
  useEffect(() => {
    addNewCar({ carGrid: [...carGrid], setCarGrid: setCarGrid, numCars: 2 });
  }, []);

  return (
    <PageWrapper>
      <AddTrafficBtn
        disabled={carGrid.filter((x) => x != null).length == 20 ? true : false}
        onClick={() =>
          addNewCar({
            carGrid: [...carGrid],
            setCarGrid: setCarGrid,
            numCars: 1,
          })
        }
      >
        {carGrid.filter((x) => x != null).length == 20
          ? "Traffic Jam!"
          : "+ Add Car"}
      </AddTrafficBtn>

      <CloudWrapper>
        {/* Random number of clouds generated between 2 and 10 every rerender */}
        {useMemo(
          () =>
            Array.from(Array(Math.floor(Math.random() * 8) + 2).keys()).map(
              (x) => <CloudGenerator key={x} />
            ),
          []
        )}
      </CloudWrapper>

      <HillsWrapper>
        <HillGenerator
          startPos={50}
          topMargin={0}
          numCars={carGrid.filter((x) => x != null).length}
        />
        <HillGenerator
          startPos={100}
          topMargin={20}
          numCars={carGrid.filter((x) => x != null).length}
        />
        <HillGenerator
          startPos={200}
          topMargin={5}
          numCars={carGrid.filter((x) => x != null).length}
        />
        <HillGenerator
          startPos={150}
          topMargin={10}
          numCars={carGrid.filter((x) => x != null).length}
        />
      </HillsWrapper>

      <RoadLaneWrapperGrid>
        {carGrid.map((x, i) => (
          <GridItem key={i}> {x == null ? "" : x}</GridItem>
        ))}
      </RoadLaneWrapperGrid>
    </PageWrapper>
  );
}

function addNewCar({
  carGrid,
  setCarGrid,
  numCars,
}: {
  carGrid: any[];
  setCarGrid: any;
  numCars?: number;
}) {
  let carstoAdd = numCars ? numCars : 1;
  let i = 0;
  while (i < carstoAdd) {
    let randomCellPosition = Math.floor(Math.random() * carGrid.length);
    if (carGrid[randomCellPosition] == null) {
      carGrid[randomCellPosition] = returnRandomCar();
      i++;
    }
  }
  setCarGrid([...carGrid]);
}

const CloudGenerator = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) {
    return null;
  }
  const margin = 50;
  //generate overall size of cloud
  const cloudWidth = Math.floor(Math.random() * 200) + 100; //maxWidth 260px
  const cloudHeight = Math.floor(Math.random() * 25) + 30;

  //randomize number of points for cloud
  const cloudPoints = Math.floor(Math.random() * 4) + 3;
  const switchPoint = Math.floor(Math.random() * (cloudPoints - 1)) + 1;

  // randomize the intensity of control points
  const controlPoint = { x: -30, y: -30 };

  // animation variables
  const animationWidth = 130;
  const animationStartPoint = Math.floor(Math.random() * animationWidth);
  const topMargin = Math.floor(Math.random() * 50);

  let pathHolder: string[] = [];

  pathHolder.push(` M ${cloudWidth + margin} ${cloudHeight + margin * 2}`);
  pathHolder.push(` L${margin} ${cloudHeight + margin * 2}`);
  pathHolder.push(
    `s ${controlPoint.x} ${controlPoint.y} ${cloudWidth / (cloudPoints + 1)} ${
      (-1 * cloudHeight) / cloudPoints
    }`
  );
  for (let i = 0; i < cloudPoints; i++) {
    if (i < switchPoint) {
      pathHolder.push(
        ` c ${Math.random() * controlPoint.x} ${controlPoint.y} ${
          -1 * controlPoint.x
        } ${controlPoint.y} ${cloudWidth / (cloudPoints + 1)}  ${
          (-1 * cloudHeight) / cloudPoints
        }`
      );
    } else {
      pathHolder.push(
        `c ${Math.random() * 0.5 * controlPoint.x} ${
          Math.random() * 0.5 * controlPoint.y
        } ${-2 * controlPoint.x} ${1 * controlPoint.y} ${
          cloudWidth / (cloudPoints + 1)
        }  ${
          ((cloudHeight / cloudPoints) * (switchPoint + 1)) /
          (cloudPoints - switchPoint)
        }`
      );
    }
  }

  return (
    <CloudSVGWrapper
      width={cloudWidth + margin * 2}
      height={cloudHeight + margin * 3}
      $animationStartPoint={animationStartPoint}
      $animationWidth={animationWidth}
      $topMargin={topMargin}
      suppressHydrationWarning={true}
    >
      <path d={pathHolder.join(" ")} suppressHydrationWarning={true} />
    </CloudSVGWrapper>
  );
};

const HillGenerator = ({
  startPos,
  topMargin,
  numCars,
}: {
  startPos: number;
  topMargin: number;
  numCars: number;
}) => {
  const animationWidth = 200;
  const animationStartPoint = startPos;
  return (
    <HillSVGWrapper
      viewBox="0 0 1230 220"
      $animationStartPoint={animationStartPoint}
      $animationWidth={animationWidth}
      $topMargin={topMargin}
      $speed={numCars * 2}
    >
      <path d="M1227.42 214.385L1231.5 217H1L169.5 132.535C323 93.0346 657.9 11.5346 769.5 1.5346C879.686 -8.33866 1119.65 145.361 1227.42 214.385Z" />
    </HillSVGWrapper>
  );
};
