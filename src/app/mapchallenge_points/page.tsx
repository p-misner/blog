"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

import { ContentWrapper, TopSpacer } from "../style/homePageStyle";
import PageHeader from "../components/header";
import { BlogBody, BlogHero } from "../sportsfield/style/sportsPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../components/providers";
import { MapContainer } from "./style/pageStyle";

export default function PointMap() {
  const theme = useContext(ThemeContext);
  //   console.log("mapbox key", process.env.NEXT_PUBLIC_MAPBOX_API_KEY);
  const mapRef = useRef<any>();
  const mapContainerRef = useRef<any>();
  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader darktext={true} />
      <TopSpacer />
      <BlogHero>30 Day Map Challenge: Points </BlogHero>
      <BlogBody>Here's my map</BlogBody>
      <MapContainer id="map-container" ref={mapContainerRef} />
    </ContentWrapper>
  );
}
