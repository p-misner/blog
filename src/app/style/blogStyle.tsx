"use client";
import styled from "styled-components";
import {
  fontColor,
  fontSize,
  fontWeight,
  lineHeight,
  spaceBlocks,
} from "./styleConstants";
export const BlogHero = styled.h1`
  font-size: ${fontSize.lg};
  font-color: ${fontColor.black};
  grid-column: 3 / span 8;
  margin-bottom: ${spaceBlocks.md};
`;

export const BlogBody = styled.p`
  font-size: ${fontSize.sm};
  grid-column: 3 / span 8;
  font-weight: ${fontWeight.light};
  line-height: ${lineHeight.spread};
  margin-bottom: ${spaceBlocks.sm};
`;
