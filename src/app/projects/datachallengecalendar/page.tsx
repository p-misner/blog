"use client";
import PageHeader from "@/app/components/header";
import {
  BlogBody,
  BlogHero,
  BlogList,
  BlogListItem,
} from "@/app/style/blogStyle";
import { ContentWrapper, Spacer, TopSpacer } from "@/app/style/homePageStyle";
import { ThemeContext } from "../../components/providers";
import { useContext } from "react";
import {
  LegendPill,
  LegendSymbol,
  LegendWrapper,
} from "./style/dataCalendarStyle";

export default function DataChallengeCalendar() {
  const theme = useContext(ThemeContext);

  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader $darktext={true} />

      <TopSpacer />
      <BlogHero>Data Visualization Challenge Calendar </BlogHero>
      <BlogBody>
        One of my 2025 New Year's resolution is to build more data
        visualizations and more importantly, get comfortable with sharing my
        work publicly. To that end, there are many great challenges and
        competitions related to data and data viz on Twitter/ Bluesky but I was
        having difficulty keeping track of everything- so I made a calendar to
        keep tabs on everything that strikes my fancy.
      </BlogBody>

      <Spacer spaceAmount={16} />
      <LegendWrapper>
        <LegendPill>
          <LegendSymbol color="#8F27AB" /> <p> Monthly Challenges</p>
        </LegendPill>
        <LegendPill>
          <LegendSymbol color="#049BE5" /> <p> Weekly Challenges</p>
        </LegendPill>
        <LegendPill>
          <LegendSymbol color="#2B54A4" /> <p> Everything Else</p>
        </LegendPill>
      </LegendWrapper>
      <Spacer spaceAmount={8} />

      <iframe
        src="https://calendar.google.com/calendar/embed?src=c5d912124b25a1eb654f7f7523bbd291588aa4c466e494b954178b578a2e8981%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        style={{
          gridColumn: "3 / span 8",
          width: "100%",
          height: "auto",
          minHeight: "600px",
        }}
        // width="auto"
        // hei/ght="600"
        //   frameborder="0"
        scrolling="no"
      ></iframe>
      <Spacer spaceAmount={32} />

      <BlogBody>
        Currently, the repeating events I am tracking include:
      </BlogBody>
      <BlogList>
        <BlogListItem>
          <a href="https://community.storytellingwithdata.com/">
            Storytelling with Data: A monthly data challenge{" "}
          </a>
        </BlogListItem>
        <BlogListItem>
          <a href="https://github.com/rfordatascience/tidytuesday/blob/main/README.md">
            Tidy Tuesday: Weekly social media challenge
          </a>
        </BlogListItem>
        <BlogListItem>
          <a href="https://workout-wednesday.com/">
            Workout Wednesday: Weekly social media challenge
          </a>
        </BlogListItem>
        <BlogListItem>
          <a href="https://github.com/30DayChartChallenge">
            #30DayChartChallenge: Month long social media challenge
          </a>
        </BlogListItem>
        <BlogListItem>
          <a href="https://30daymapchallenge.com/">
            #30DayMapChallenge: Month long social media challenge
          </a>
        </BlogListItem>
        <BlogListItem>
          <a href="https://2025.open-data.nyc/">NYC Open Data Week</a>
        </BlogListItem>
      </BlogList>
      <BlogBody>
        I've made the calendar public so maybe it can help you out too! If
        you've seen an event you think I should add, send me an email with the
        details and relevant event links and I'll add it to the calendar.
      </BlogBody>
      <TopSpacer />
    </ContentWrapper>
  );
}
