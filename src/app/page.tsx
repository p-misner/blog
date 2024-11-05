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
      <PageWrapper color={theme.colorPicked}>
        <ContentWrapper color={theme.colorPicked}>
          <TopSpacer />
          {/* <PlaygroundTitle color={theme.colorPicked}>Blog</PlaygroundTitle> */}
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Month XX, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/loremipsum">Placeholder</a>
              <span> →</span>
            </Title>
            <Subtitle>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sed porttitor
              scelerisque cras justo litora primis euismod pulvinar. Congue enim
              donec ac nostra ac taciti libero. Habitant purus nam porttitor
              aenean viverra laoreet et. Vulputate pulvinar facilisis integer
              fringilla aliquam morbi donec ac viverra. Sagittis amet bibendum
              aenean quam litora eleifend porttitor per praesent. Molestie sem
              efficitur malesuada etiam efficitur.
            </Subtitle>
          </BlogPostWrapper>
          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Month XX, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/loremipsum">Placeholder</a>
              <span> →</span>
            </Title>
            <Subtitle>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sed porttitor
              scelerisque cras justo litora primis euismod pulvinar. Congue enim
              donec ac nostra ac taciti libero. Habitant purus nam porttitor
              aenean viverra laoreet et. Vulputate pulvinar facilisis integer
              fringilla aliquam morbi donec ac viverra. Sagittis amet bibendum
              aenean quam litora eleifend porttitor per praesent. Molestie sem
              efficitur malesuada etiam efficitur.
            </Subtitle>
            <PlaceholderImage />
          </BlogPostWrapper>

          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Month XX, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/loremipsum">Placeholder</a>
              <span> →</span>
            </Title>
            <Subtitle>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sed porttitor
              scelerisque cras justo litora primis euismod pulvinar. Congue enim
              donec ac nostra ac taciti libero. Habitant purus nam porttitor
              aenean viverra laoreet et. Vulputate pulvinar facilisis integer
              fringilla aliquam morbi donec ac viverra. Sagittis amet bibendum
              aenean quam litora eleifend porttitor per praesent. Molestie sem
              efficitur malesuada etiam efficitur.
            </Subtitle>
          </BlogPostWrapper>

          <BlogPostWrapper color={theme.colorPicked}>
            <Date>Month XX, 2024</Date>
            <Title color={theme.colorPicked}>
              <a href="/loremipsum">Placeholder</a>
              <span> →</span>
            </Title>
            <Subtitle>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Sed porttitor
              scelerisque cras justo litora primis euismod pulvinar. Congue enim
              donec ac nostra ac taciti libero. Habitant purus nam porttitor
              aenean viverra laoreet et. Vulputate pulvinar facilisis integer
              fringilla aliquam morbi donec ac viverra. Sagittis amet bibendum
              aenean quam litora eleifend porttitor per praesent. Molestie sem
              efficitur malesuada etiam efficitur.
            </Subtitle>
            <PlaceholderImage />
          </BlogPostWrapper>
        </ContentWrapper>
      </PageWrapper>
    </PageWrapper>
  );
}
