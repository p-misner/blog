"use client";
import { useContext } from "react";
import {
  HandwritingSpan,
  Header,
  HeaderWrapper,
  MenuHeader,
  NameHeader,
} from "../style/headerStyle";
import { ThemeContext } from "./providers";

export default function PageHeader({ $darktext }: { $darktext: boolean }) {
  const theme = useContext(ThemeContext);

  return (
    <HeaderWrapper color={theme.colorPicked}>
      <Header>
        <NameHeader $darktext={$darktext} color={theme.colorPicked}>
          {" "}
          {/* <a href="https://www.priyamisner.com"> */}
          <a href="/">
            Priya Misner<HandwritingSpan>&apos;s blog</HandwritingSpan>
          </a>
        </NameHeader>
        <MenuHeader $darktext={$darktext} color={theme.colorPicked}>
          <a href="https://www.priyamisner.com/#work">work</a>
          <a href="https://www.priyamisner.com/#play">play</a>
          <a href="/">blog</a>
        </MenuHeader>
      </Header>
    </HeaderWrapper>
  );
}
