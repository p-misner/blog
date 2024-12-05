import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const SidePanelLeft = styled.div`
  flex-direction: row;
  width: 300px;
  padding: 16px;
`;
export const SidePanelRight = styled.div`
  flex-direction: row;
  flex-grow: 2;
  padding: 16px;
  background-color: rgb(243, 243, 243);
`;
