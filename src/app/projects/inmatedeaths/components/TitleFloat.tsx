import styled from "styled-components";
import { DataLiberationColors } from "../style/StyleConstants";

export const TitleFloat = () => {
  return (
    <TitleFloatWrapper>
      <FirstPartWrapper>
        <TitleFloatH1> The Data Liberation Project</TitleFloatH1>
        <TitleFloatH2> Visualized</TitleFloatH2>
      </FirstPartWrapper>
      <SecondPartWrapper>
        <TitleFloatH3> Federal Inmate Deaths</TitleFloatH3>
      </SecondPartWrapper>
    </TitleFloatWrapper>
  );
};

const TitleFloatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${DataLiberationColors.black};
  background-color: ${DataLiberationColors.grey};
  position: sticky;
  top: 24px;
  /* left: 0px; */
  width: 620px;
  @media screen and (max-width: 720px) {
    width: 520px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 320px;
  }
`;

const FirstPartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-right: 1px solid ${DataLiberationColors.black};
  padding: 12px 16px;
  column-gap: 8px;
  align-items: center;
  @media screen and (max-width: 600px) {
    border-bottom: 1px solid ${DataLiberationColors.black};
    border-right: 0px solid ${DataLiberationColors.black};
  }
`;
const SecondPartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  column-gap: 8px;
  align-items: center;
`;
const TitleFloatH1 = styled.h1`
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
`;
const TitleFloatH2 = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-size: 22px;
  font-style: italic;
  text-decoration: solid underline ${DataLiberationColors.yellow} 4px;
  @media screen and (max-width: 720px) {
    font-size: 18px;
  }
`;
const TitleFloatH3 = styled.h3`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
`;
