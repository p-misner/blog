"use client";
import { BarChart } from "./components/barChart";
import {
  CarPath,
  ColorChangingRect,
  ArticleTitle,
} from "./components/introAnimation";
import { InfoCard, contentFirst, contentSecond } from "./page";
import { PageWrapper } from "./style/articleStyle";

export default function F1TeamHistory() {
  return (
    <PageWrapper className="wrapper">
      <CarPath />
      <ColorChangingRect />
      <ArticleTitle />
      <BarChart />
      <InfoCard content={contentFirst} label="first" />
      <InfoCard content={contentSecond} label="second" />
      <InfoCard content={contentSecond} label="third" />

      <InfoCard content={["placeholder"]} label="lastcard" />
    </PageWrapper>
  );
}
