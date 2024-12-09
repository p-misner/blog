import styled from "styled-components";
import { DataLiberationColors } from "../style/StyleConstants";

export const HeroText = () => {
  return (
    <HeroTextWrapper>
      {" "}
      <HeroBody> The Data Liberation Project filed a </HeroBody>
      <Link text="FOIA Request" href="#" />
      <HeroBody>
        to the Bureau of of Prisons seeking data records representing each
        federal inmate death since 2005. The agency{" "}
      </HeroBody>
      <Link text="responded to the request" href="#" />
      <HeroBody>with a </HeroBody>
      <Link text="spreadsheet" href="#" />
      <HeroBody>containing </HeroBody>
      <HeroBody>8,242 entries, each representing a deceased inmate. </HeroBody>
    </HeroTextWrapper>
  );
};

const Link = ({ text, href }: { text: string; href: string }) => {
  return (
    <HeroLink href={href}>
      {text} <LinkArrow />
    </HeroLink>
  );
};
const LinkArrow = ({
  width = 40,
  height = 24,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} 26`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 25L25 1M25 1V17M25 1H9" stroke="#333333" strokeWidth="2" />
    </svg>
  );
};

const HeroTextWrapper = styled.p`
  margin-top: 64px;
  line-height: 60px;
`;

const HeroBody = styled.span`
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 40px;
`;
const HeroLink = styled.a`
  font-family: "Times New Roman", Times, serif;
  font-size: 40px;
  font-style: italic;
  text-decoration-line: solid underline;
  text-decoration-thickness: 3px;
  text-decoration-color: ${DataLiberationColors.black};
  color: ${DataLiberationColors.black};
  &:hover {
    text-decoration-line: solid underline;
    text-decoration-thickness: 12px;
    text-decoration-color: ${DataLiberationColors.yellow};
    text-underline-offset: 1px;
  }
`;
