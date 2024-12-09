import styled from "styled-components";
import { DataLiberationColors } from "./StyleConstants";

export const PageWrapper = styled.div`
  background-color: ${DataLiberationColors.grey};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;
export const ContentWrapper = styled.div`
  position: relative;
  max-width: 1120px;
  width: 90%;
  margin: auto;
  overflow-y: scroll;

  @media screen and (max-width: 1168px) {
    margin: 48px;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  margin: 48px 0px 24px 0px;
  column-gap: 24px;
  justify-content: flex-start;
`;
export const ChartWrapper = styled.div`
  /* background-color: ${DataLiberationColors.yellow}; */
`;

type TooltipInputs = {
  x: number;
  y: number;
};

export const TooltipWrapper = styled.div<TooltipInputs>`
  background-color: ${DataLiberationColors.grey};
  border: 1px solid ${DataLiberationColors.black};
  min-height: 24px;
  min-width: 24px;
  position: absolute;
  top: ${(props) => `${props.y + 5}px`};
  left: ${(props) => `${props.x + 12}px`};
  padding: 12px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid ${DataLiberationColors.black};
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  margin-bottom: 48px;

  a {
    color: ${DataLiberationColors.black};
  }
`;
