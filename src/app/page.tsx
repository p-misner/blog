"use client";
import Image from "next/image";
import {
  BlogPostWrapper,
  ContentWrapper,
  Date,
  ImageWrapper,
  PageWrapper,
  PlaceholderImage,
  Subtitle,
  Title,
  TopSpacer,
} from "./style/homePageStyle";
import TestImage from "../../public/StadiumCompare.png";
import { useContext } from "react";
import { ThemeContext } from "./components/providers";
import PageHeader from "./components/header";
import { ControlPanelWrapper } from "./style/controlStyle";
export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <PageWrapper color={theme.colorPicked}>
      <PageHeader darktext={false} />
      {/* <ControlPanelWrapper>
        <ColorPickerComponent />
      </ControlPanelWrapper> */}
      <PageWrapper color={theme.colorPicked}>
        <ContentWrapper color={theme.colorPicked}>
          <TopSpacer />
          {/* <PlaygroundTitle color={theme.colorPicked}>Blog</PlaygroundTitle> */}
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>September 29, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/sportsfield">
                Size Matters: Comparing Playing Areas Across Sports
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {" "}
              A cricket field can fit 12.2 tennis courts while a basketball
              court is only 1.4 tennis courts. The smallest premier league field
              is 14.3% smaller than Stadium name.See how sports field compare to
              one another but across sports and across teams.
            </Subtitle>
            <PlaceholderImage />
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>September 29, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/sportsfield">
                Size Matters: Comparing Playing Areas Across Sports
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {" "}
              A cricket field can fit 12.2 tennis courts while a basketball
              court is only 1.4 tennis courts. The smallest premier league field
              is 14.3% smaller than Stadium name.See how sports field compare to
              one another but across sports and across teams.
            </Subtitle>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>September 29, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/sportsfield">
                Size Matters: Comparing Playing Areas Across Sports
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {" "}
              A cricket field can fit 12.2 tennis courts while a basketball
              court is only 1.4 tennis courts. The smallest premier league field
              is 14.3% smaller than Stadium name.See how sports field compare to
              one another but across sports and across teams.
            </Subtitle>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>September 29, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/sportsfield">
                Size Matters: Comparing Playing Areas Across Sports
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {" "}
              A cricket field can fit 12.2 tennis courts while a basketball
              court is only 1.4 tennis courts. The smallest premier league field
              is 14.3% smaller than Stadium name.See how sports field compare to
              one another but across sports and across teams.
            </Subtitle>
            <PlaceholderImage />
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>September 29, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/sportsfield">
                Size Matters: Comparing Playing Areas Across Sports
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {" "}
              A cricket field can fit 12.2 tennis courts while a basketball
              court is only 1.4 tennis courts. The smallest premier league field
              is 14.3% smaller than Stadium name.See how sports field compare to
              one another but across sports and across teams.
            </Subtitle>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>September 29, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/sportsfield">
                Size Matters: Comparing Playing Areas Across Sports
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {" "}
              A cricket field can fit 12.2 tennis courts while a basketball
              court is only 1.4 tennis courts. The smallest premier league field
              is 14.3% smaller than Stadium name.See how sports field compare to
              one another but across sports and across teams.
            </Subtitle>
          </BlogPostWrapper>
        </ContentWrapper>
      </PageWrapper>
    </PageWrapper>
  );
}
