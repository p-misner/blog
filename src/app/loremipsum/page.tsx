"use client";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

import { ContentWrapper, TopSpacer } from "../style/homePageStyle";
import PageHeader from "../components/header";
import {
  BlogBody,
  BlogHero,
} from "../projects/sportsfield/style/sportsPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../components/providers";

export default function PointMap() {
  const theme = useContext(ThemeContext);

  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader darktext={true} />
      <TopSpacer />
      <BlogHero>Placeholder </BlogHero>
      <BlogBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </BlogBody>
      <BlogBody>
        Faucibus gravida maximus consequat duis pretium. Habitasse semper
        pretium penatibus eu consequat curae. Nam suspendisse tempor inceptos
        accumsan lacinia lacinia mattis netus. Nec maecenas nibh dis vel
        dapibus; arcu hac. Ornare semper non at; luctus aliquet duis. Molestie
        penatibus mollis habitasse litora morbi dictum blandit rhoncus. Hac
        vulputate vestibulum ut at nisl aenean accumsan. Ante suspendisse
        natoque nunc odio; torquent volutpat tristique?
      </BlogBody>
      <BlogBody>
        Tincidunt sodales neque aptent consequat iaculis ante et mus. Etiam
        parturient mattis fermentum turpis id elementum. Praesent dictumst sit
        mus elementum, habitasse nec. Curae magna ante phasellus taciti
        placerat; mattis id penatibus. Netus ac consequat amet vehicula
        suspendisse auctor. Taciti pulvinar conubia taciti sapien gravida
        rutrum. Integer ipsum dolor ridiculus cras fusce primis cubilia erat.
        Posuere neque porttitor lacus laoreet viverra non. Ut proin nunc dapibus
        orci imperdiet mus.
      </BlogBody>
    </ContentWrapper>
  );
}
