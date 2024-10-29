"use client";
import FieldCompare from "./components/sportsField/fieldCompare";
import { ContentWrapper, TopSpacer } from "../style/homePageStyle";
import { BlogBody, BlogHero } from "./style/sportsPageStyle";
import { useContext } from "react";
import { ThemeContext } from "../components/providers";
import PageHeader from "../components/header";

export default function SportsField() {
  const theme = useContext(ThemeContext);

  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader darktext={true} />

      <TopSpacer />
      <BlogHero>Size Matters: Dimensions of pitches across Sports </BlogHero>
      <BlogBody>
        Games have rules- from the way the uniforms should look to the height of
        the goalposts to what’s considered out of bounds. And while rules often
        cover every minute detail of the game, there is always leeway in certain
        sections. So let’s talk about, areas in which fields vary within a
        single sport and the major differences across different disciplines.{" "}
      </BlogBody>
      <BlogBody>
        For sports like 🏀 basketball and 🎾 tennis every dimension of the pitch
        is specified, and there is virtually no variation in size if I step onto
        a court in New York’s Central Park versus at the Fancy Stadium Name in
        Paris. Sports like ⚽️soccer ⚾️ baseball and 🏏cricket on the other
        hand aren’t as standard and there can be sizeable differences in field
        dimensions from one location to another.
      </BlogBody>
      <BlogBody>To start with, let’s see how many fit into a: </BlogBody>
      <FieldCompare />
    </ContentWrapper>
  );
}
