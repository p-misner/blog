"use client";
import Chart from "./components/ChartComponent";
import { PageWrapper, SidePanelLeft, SidePanelRight } from "./style/PageStyle";

export default function InmateDeaths() {
  return (
    <PageWrapper>
      <SidePanelLeft>side panel elft</SidePanelLeft>
      <SidePanelRight>
        {" "}
        side panel right
        <Chart width={900} height={500} />
      </SidePanelRight>
    </PageWrapper>
  );
}
