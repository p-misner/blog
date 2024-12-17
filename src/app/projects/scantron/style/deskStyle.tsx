import styled from "styled-components";
import { TestColor } from "../utils/utils";

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #3f0606;
  position: fixed;
`;

export const MessageWrapper = styled.div<{
  $testType: "scantron" | "SAT" | "STAR";
}>`
  position: fixed;
  bottom: 148px;
  right: 24px;
  /* left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  z-index: 100;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  column-gap: 24px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  font-weight: 350;
  p {
    color: #535353;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 6px;
    border-radius: 2px;
    width: 27px;
    height: 27px;

    &:hover {
      background-color: ${(props) => TestColor({ testType: props.$testType })};
      border-radius: 60%;
    }
  }
`;
