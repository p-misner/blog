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
export const BlogSectionHeader = styled.h4`
  font-size: ${fontSize.md};
  grid-column: 3 / span 8;
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.spread};
  margin-bottom: ${spaceBlocks.xs};
  margin-top: ${spaceBlocks.md};
`;
export const BlogInset = styled.p`
  font-size: ${fontSize.sm};
  grid-column: 3 / span 8;
  font-weight: ${fontWeight.light};
  line-height: ${lineHeight.spread};
  margin-bottom: ${spaceBlocks.sm};
  background-color: #eee;
  // border-left: 8px grey solid;
  padding: ${spaceBlocks.lg};
  margin-left: ${spaceBlocks.lg};
  // opacity: 0.8;
`;
