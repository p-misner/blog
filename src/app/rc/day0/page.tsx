"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

import { ContentWrapper, TopSpacer } from "../../style/homePageStyle";
import PageHeader from "../../components/header";
import { BlogBody, BlogHero } from "../../sportsfield/style/sportsPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../../components/providers";

export default function PointMap() {
  const theme = useContext(ThemeContext);

  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader darktext={true} />
      <TopSpacer />
      <BlogHero>Recurse Center </BlogHero>
      <BlogBody>Planning, Reflections, Resources</BlogBody>
    </ContentWrapper>
  );
}
