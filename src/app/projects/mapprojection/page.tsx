"use client";
import { Map } from "./components/globe";
import {
  BodyWrapper,
  ContentWrapper,
  FooterText,
  GlobeWrapper,
  LatLngWrapper,
  MapsWrapper,
  SupertitleTextWrapper,
  TitleText,
  TitleTextWrapper,
} from "./style/globeStyle";
import { data } from "./data/worldmap";
import { useEffect, useState } from "react";
import useScreenSize from "./utils/screenSize";
import { Dropdown } from "./components/dropdown";

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
              <TitleText>
                {" "}
                {circlePos != undefined ? circlePos[1]?.toFixed(4) : "null"},
              </TitleText>
            </SupertitleTextWrapper>
            <SupertitleTextWrapper>
              <p>Longitude</p>
              <TitleText>
                {" "}
                {circlePos != undefined
                  ? circlePos[0]?.toFixed(4)
                  : "null"}{" "}
              </TitleText>
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
          <h3>Click and drag the blue circle to spin globe</h3>
          <h3>
            Made by <a href="www.priyamisner.com">Priya Misner</a> ©2024
          </h3>
        </FooterText>
      </ContentWrapper>
    </BodyWrapper>
  );
}
