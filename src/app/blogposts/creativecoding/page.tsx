"use client";

import { ContentWrapper, TopSpacer } from "../../style/homePageStyle";
import PageHeader from "../../components/header";
import {
  BlogBody,
  BlogHero,
  BlogInset,
  BlogSectionHeader,
} from "../../style/blogStyle";
import { forwardRef, RefObject, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../components/providers";
import { CreativeCodeCanvasRefless } from "./components/canvas";
import { text } from "node:stream/consumers";
import {
  draw2,
  randomWalkDraw,
  randomWalkSetup,
  setup2,
} from "./components/ch1";

export default function BlogPost() {
  const theme = useContext(ThemeContext);

  return (
    <ContentWrapper color={theme.colorPicked}>
      <PageHeader $darktext={true} />
      <TopSpacer />
      <BlogHero>Nature of Code: Chapter 1 </BlogHero>
      <BlogBody>
        During my time at the{" "}
        <a href="https://www.recurse.com/"> Recurse Center</a> I'm working my
        way through the Nature of Code alongside some of my batchmates. Instead
        using p5.js, I'll be following along using Typescript to manipulate the
        canvas and maybe will try dabbling with doing the exercises using
        three.js as time goes on.
      </BlogBody>
      <BlogSectionHeader>Random Walks</BlogSectionHeader>
      <BlogBody>
        Chapter 0 introduces the concept of random walks. The equivalent of
        flipping a coin and deciding whether to go right or left, the little
        blue dot below just meanders across the screen. If you let it run for a
        little bit, the shape formed kind of reminds me of protein folding
        diagrams.
      </BlogBody>
      <CreativeCodeCanvasRefless
        color={theme.colorPicked}
        draw={randomWalkDraw}
        setup={randomWalkSetup}
        title="randomWalker"
        interval={10}
      ></CreativeCodeCanvasRefless>
      <BlogSectionHeader>Distributions and Paint Splatter</BlogSectionHeader>
      <BlogBody>
        Made a little paint splatter in response to the following prompt :
      </BlogBody>
      <BlogInset>
        Consider a simulation of paint splatter drawn as a collection of colored
        dots. Most of the paint clusters around a central position, but some
        dots splatter out toward the edges. Can you use a normal distribution of
        random numbers to generate the positions of the dots? Can you also use a
        normal distribution of random numbers to generate a color palette? Try
        creating a slider to adjust the standard deviation.
      </BlogInset>
      <CreativeCodeCanvasRefless
        color={theme.colorPicked}
        draw={draw2}
        setup={setup2}
        title="distributions"
        interval={500}
      ></CreativeCodeCanvasRefless>
    </ContentWrapper>
  );
}
