"use client";
import { Map, SpinningGlobe } from "./components/globe";
import {
  BodyWrapper,
  ContentWrapper,
  FooterText,
  GlobeWrapper,
  LatLngWrapper,
  MapsWrapper,
  ProjectionComparisonWrapper,
  SelectOptions,
  Selector,
  SupertitleTextWrapper,
  TitleText,
  TitleTextWrapper,
} from "./style/globeStyle";
import MapData from "./data/ne_110m_land.json";
import { data } from "./data/worldmap";
import { useState } from "react";
import { MapProjections } from "./utils/projectionTypes";
import useScreenSize from "./utils/screenSize";

export default function Home() {
  const [mapProj, setMapProj] = useState("Baker dinomic");
  const [circlePos, setCirclePos] = useState<[number, number]>([
    21.445313, 5.303919,
  ]);
  const screenSize = useScreenSize();

  return (
    <BodyWrapper>
      <ContentWrapper>
        <TitleTextWrapper>
          <TitleText>Compare the globe to</TitleText>

          <Dropdown value={mapProj} setValue={setMapProj} />

          <TitleText>at</TitleText>
          <LatLngWrapper>
            <SupertitleTextWrapper>
              <p>Latitude</p>
              <TitleText> {circlePos[1].toFixed(4)},</TitleText>
            </SupertitleTextWrapper>
            <SupertitleTextWrapper>
              <p>Longitude</p>
              <TitleText> {circlePos[0].toFixed(4)}</TitleText>
            </SupertitleTextWrapper>
          </LatLngWrapper>
        </TitleTextWrapper>
        {screenSize.width > 100 && (
          <MapsWrapper>
            {" "}
            <Map
              mapProj={mapProj}
              width={screenSize.width * 0.8}
              height={
                screenSize.height > screenSize.width
                  ? screenSize.width * 0.6
                  : screenSize.height * 0.8
              }
              data={data}
              circlePos={circlePos}
              setCirclePos={setCirclePos}
            />
            <GlobeWrapper>
              <Map
                mapProj={"Orthographic"}
                width={Math.min(screenSize.width, 1200) * 0.25}
                height={Math.min(screenSize.width, 1200) * 0.25}
                data={data}
                circlePos={circlePos}
                setCirclePos={setCirclePos}
              />
            </GlobeWrapper>
          </MapsWrapper>
        )}{" "}
        <FooterText>
          <h3>
            Made by <a href="www.priyamisner.com">Priya Misner</a> ©2024
          </h3>
        </FooterText>
      </ContentWrapper>
    </BodyWrapper>
  );
}

export function Dropdown({
  value,
  setValue,
}: {
  value: string;
  setValue: (...args: any[]) => void;
}) {
  return (
    <div>
      <Selector
        value={value}
        $labelLength={value.length}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {MapProjections.filter((x) => x.name != "Orthographic").map((x) => (
          <SelectOptions key={x.name} value={x.name}>
            {x.name} projection
          </SelectOptions>
        ))}
      </Selector>
    </div>
  );
}
