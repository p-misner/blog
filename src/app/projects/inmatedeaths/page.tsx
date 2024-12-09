"use client";
import { useState } from "react";
import { WaffleChart } from "./components/WaffleChart";
import {
  ChartWrapper,
  ContentWrapper,
  ControlsWrapper,
  Footer,
  PageWrapper,
} from "./style/PageStyle";
import { dataCategories } from "./data/dataCategories";
import { TitleFloat } from "./components/TitleFloat";
import { HeroText } from "./components/HeroText";
import { Controls } from "./components/Controls";
import useScreenSize from "../mapprojection/utils/screenSize";

export type HighlightCategoryType = {
  selection: string;
  category:
    | "Sex"
    | "Race"
    | "InstID"
    | "DeathCategory"
    | "ICD10 Prime"
    | "ICD10 Second";
};

export default function InmateDeaths() {
  const [highlightCategory, setHighlightCategory] =
    useState<HighlightCategoryType>({
      category: "Sex",
      selection: "Female",
    });

  return (
    <PageWrapper>
      <ContentWrapper>
        <TitleFloat />
        <HeroText />
        <Controls
          highlightCategory={highlightCategory}
          setHighlightCategory={setHighlightCategory}
        />
        <WaffleChart
          width={1200}
          height={700}
          highlightCategory={highlightCategory}
        />
      </ContentWrapper>

      <ChartWrapper></ChartWrapper>
      <ContentWrapper>
        <Footer>
          <p>Data last updated August 2024</p>
          <p>
            {" "}
            <a href="www.priyamisner.com">Created by Priya Misner</a>{" "}
          </p>
        </Footer>
      </ContentWrapper>
    </PageWrapper>
  );
}
