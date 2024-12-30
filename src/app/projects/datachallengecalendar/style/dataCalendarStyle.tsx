import { fontSize, fontWeight, spaceBlocks } from "@/app/style/styleConstants";
import styled from "styled-components";

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-column: 3 / span 8;
`;

export const LegendPill = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  column-gap: ${spaceBlocks.xs};
  align-items: start;
  margin-right: ${spaceBlocks.xs};
  p {
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.light};
  }
`;
export const LegendSymbol = styled.div<{ color?: string }>`
  width: ${spaceBlocks.md};
  height: ${spaceBlocks.md};
  background-color: ${(props) => (props.color ? props.color : "rgb(0,0,0)")};
`;
