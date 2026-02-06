"use client";

import { ContentWrapper, TopSpacer } from "../../style/homePageStyle";
import PageHeader from "../../components/header";
import {
  BlogBody,
  BlogHero,
  BlogInset,
  BlogSectionHeader,
} from "../../style/blogStyle";
import { useContext } from "react";
import { ThemeContext } from "../../components/providers";
import { TestCanvasP5 } from "./components/setup/p5test";
import { RandomWalk } from "./components/setup/randomWalk";
import { StarterExample } from "./components/setup/starterP5";
import { MouseRandomWalker } from "./components/ch1/mouseFollowingRandomWalker";
import { PaintSplatter } from "./components/ch1/paintSplatter";
import { DrawDandelions } from "./components/ch1/drawDandelion";
import { MovingPerlinNoise } from "./components/ch1/movingPerlinNoise";
import { PerlinNoiseWalker } from "./components/ch1/perlinNoiseWalker";
import { RandomPixelNoise } from "./components/ch1/oneDNoise";
import { ColoredPixelNoise } from "./components/ch1/coloredOneDNoise";
import { SandMixer } from "./components/ch1/sandMixer";
import { SandMixerV2 } from "./components/ch1/sandMixerPart2";
import { PerlinNoisePixels } from "./components/ch1/perlinNoisePixels";
import { BlackHole } from "./components/ch1/blackHole";
import { SandFade } from "./components/ch1/sandFadeBack";
import { PerlinSky } from "./components/ch1/perlinSky";

export default function BlogPost() {
  const theme = useContext(ThemeContext);

  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader $darktext={true} />
      <TopSpacer />
      <BlogHero>Nature of Code: Chapter 1 </BlogHero>
      <BlogSectionHeader>Getting p5 to run in React</BlogSectionHeader>
      <BlogBody>
        Took me a bit but I wanted to get p5 running on my website so I could
        store all my examples and exercises as I work thorugh Nature of Code.
        Some things I learned: <br></br> - what an instance is (p5 is running in
        instance mode) <br></br>-react-p5 vs the newer p5-wrapper/react. in the
        future I would like to switch to p5-wrapper but tbh I also just want to
        get workin on nature of code<br></br> -conflicting typing and as "as
        any" to resolve this (do I understand this??)
      </BlogBody>{" "}
      <TestCanvasP5></TestCanvasP5>
      <RandomWalk></RandomWalk>
      <BlogSectionHeader> Canvas Improvements</BlogSectionHeader>
      <BlogBody>
        I want to add pause/reset button and maybe a check box that decides
        whether or not it pauses on exit? and maybe a hover state when it's
        active vs not.
      </BlogBody>
      <StarterExample></StarterExample>
      <BlogSectionHeader> Chapter 1</BlogSectionHeader>
      <BlogBody> Random walker that follows the mouse roughly</BlogBody>
      <MouseRandomWalker></MouseRandomWalker>
      <BlogBody> Paint splatter</BlogBody>
      <PaintSplatter />
      <DrawDandelions />
      <MovingPerlinNoise />
      <PerlinNoiseWalker />
      <RandomPixelNoise />
      <ColoredPixelNoise />
      <SandMixer />
      <SandMixerV2 />
      <BlackHole />
      <SandFade />
      <PerlinNoisePixels />
      <PerlinSky />
    </ContentWrapper>
  );
}
