"use client";
import Image from "next/image";
import {
  BlogPostWrapper,
  BlogSubtitle,
  BlogTitle,
  ContentWrapper,
  Date,
  ImageWrapper,
  PageWrapper,
  PlaceholderImage,
  Subtitle,
  Title,
  TopSpacer,
} from "./style/homePageStyle";
import { useContext } from "react";
import { ThemeContext } from "./components/providers";
import PageHeader from "./components/header";
import { ControlPanelWrapper } from "./style/controlStyle";
import ColorPickerComponent from "./components/colorcontrols";

import testImg from "../../public/coverImages/mapProjectionCover.png";
import scantronImg from "../../public/coverImages/ScantronCover.png";
import ccGSAP from "../../public/coverImages/creativecoding_gsap.png";
import inmateCover from "../../public/coverImages/InmateDeaths.png";
export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <PageWrapper color={theme.colorPicked}>
      <PageHeader $darktext={false} />
      <PageWrapper color={theme.colorPicked}>
        <ContentWrapper color={theme.colorPicked}>
          <ControlPanelWrapper>
            {" "}
            <ColorPickerComponent />
          </ControlPanelWrapper>

          <TopSpacer />
          <BlogTitle color={theme.colorPicked}>Blog</BlogTitle>
          {/* <BlogSubtitle color={theme.colorPicked}>
            some thoughts I've jotted down{" "}
          </BlogSubtitle> */}

          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Dec 9, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/projects/inmatedeaths">
                Visualizing Federal Inmate Deaths
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              Using data from The Data Liberation Project, this page allows you
              to explore the Federal Inmate Death dataset and filter the data
              based on several variables in the dataset.
            </Subtitle>
            <ImageWrapper>
              <Image
                src={inmateCover}
                alt="a  bar chart with a date range from 2005 to 2024 "
              />
            </ImageWrapper>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Dec 4th, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/projects/gsap">Creative Coding: In Review</a>
              <span> →</span>
            </Title>
            <Subtitle>
              My first time working with GSAP, I made a small animation to
              capture that feeling of the year passing you by for Wednesday's
              creative coding.
            </Subtitle>
            <ImageWrapper>
              <Image
                src={ccGSAP}
                alt="a background of a blue rectangle with dark blue edges has the words of 5 months falling down "
              />
            </ImageWrapper>
          </BlogPostWrapper>

          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Dec 3rd, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/projects/colorspace">Color Spaces</a>
              <span> →</span>
            </Title>
            <Subtitle>
              🚧🚧Work in Progress 🚧🚧An exploration into color pickers
            </Subtitle>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>November 15, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/projects/scantron">Wrong Answers Only: Scantron</a>
              <span> →</span>
            </Title>
            <Subtitle>
              Do NOT read the question, checking your work is NOT allowed. An
              overly faithful reproduction of a multiple choice test form that
              lets you bubble things in to your hearts content
            </Subtitle>
            <ImageWrapper>
              <Image src={scantronImg} alt="picture of scantron on desk" />
            </ImageWrapper>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>November 14, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/blogposts/creativecoding">Creative Coding: Week 1</a>
              <span> →</span>
            </Title>
            <Subtitle>
              During my time at the Recurse Center I'm working my way through
              the Nature of Code alongside some of my batchmates. Instead using
              p5.js, I'll be following along using Typescript to manipulate the
              canvas and maybe will try dabbling with doing the exercises using
              three.js as time goes on.
            </Subtitle>
          </BlogPostWrapper>

          <BlogPostWrapper color={theme.colorPicked}>
            <Date>November 11, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="./projects/mapprojection">
                Map Projections: Translating 3D into 2D
              </a>
              <span> →</span>
            </Title>
            <Subtitle>
              {/* Used d3-geo to create a variety of map projections */}
            </Subtitle>
            <ImageWrapper>
              <Image
                src={testImg}
                alt="picture of globe over a map projection"
              />
            </ImageWrapper>
          </BlogPostWrapper>
        </ContentWrapper>
      </PageWrapper>
    </PageWrapper>
  );
}
