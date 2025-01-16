import { useContext, useState } from "react";
import {
  BottomBlackBoxPosition,
  ButtonColumn,
  GreenBorderInfo,
  GreenBordersButtonColumn,
  GreenTitle,
  ImportantBoxPosition,
  ImportantInfoWrapper,
  ImportantLeftInfo,
  ImportantRightInfo,
  InputInput,
  InputInputWrapper,
  InputTitle,
  InputWrapper,
  NameSubjBoxPosition,
  Part1Postion,
  ReorderFormPosition,
  ScantronWrapper,
  SubjScorePosition,
  TestRecordPosition,
  TopBlackBoxPosition,
  TRInputTitle,
  VerticalCopyRightText,
  VerticalStripWrapper,
} from "../style/scantronStyle";
import { Reenie_Beanie } from "next/font/google";
import { BlackSquare } from "../style/allTestStyle";
import { TestContext } from "./context";
import { ScantronButtonRow, ScantronButtonWrapper } from "../style/buttonStyle";
import { TestButton, TestButtonRow } from "./buttons";

const reenieBeenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reeniebeenie",
});

export function Scantron() {
  const AlphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const numLetters = 5;
  const numRows = 50;
  const context = useContext(TestContext);
  if (context) {
    return (
      <div>
        <ScantronWrapper $zoomAmount={context.zoomAmount}>
          <SubjScoreSection />

          <VerticalCopyrightSection />
          <VerticalStripSection />

          <ButtonColumn>
            {Array.from(Array(numRows).keys()).map((x, i) => (
              <TestButtonRow
                key={x}
                contents={AlphabetArray.slice(0, numLetters)}
                qNumber={i + 1}
              />
            ))}
          </ButtonColumn>
          <ImportanBoxSection />
          <NameSubjSection />
          <TestRecordSection />
          <Part1Postion> Part 1</Part1Postion>
          <TopBlackBoxPosition>
            <BlackSquare height={12} />
          </TopBlackBoxPosition>
          <BottomBlackBoxPosition>
            <BlackSquare $gapBelow={2} />
            <BlackSquare $gapBelow={12} />
            <BlackSquare height={12} />
          </BottomBlackBoxPosition>
          <ReorderForm />
        </ScantronWrapper>
      </div>
    );
  }
}

const SubjScoreSection = () => {
  return (
    <SubjScorePosition>
      <GreenBorderInfo $width={230}>
        <GreenTitle>Subjective Score</GreenTitle>
        <GreenTitle>Instructor Use Only</GreenTitle>
        <GreenBordersButtonColumn>
          <ScantronButtonRow>
            {["100", "90", "80", "70", "60"].map((x, i) => (
              <TestButton
                key={x}
                label={x}
                buttonPos={i}
                urlParamName="ss100"
              />
            ))}
          </ScantronButtonRow>
          <ScantronButtonRow>
            {["50", "40", "30", "20", "10"].map((x, i) => (
              <TestButton key={x} label={x} buttonPos={i} urlParamName="ss50" />
            ))}
          </ScantronButtonRow>
          <ScantronButtonRow>
            {["9", "8", "7", "6", "5"].map((x, i) => (
              <TestButton key={x} label={x} buttonPos={i} urlParamName="ss9" />
            ))}
          </ScantronButtonRow>
          <ScantronButtonRow>
            {["4", "3", "2", "1", "0"].map((x, i) => (
              <TestButton key={x} label={x} buttonPos={i} urlParamName="ss4" />
            ))}
          </ScantronButtonRow>
        </GreenBordersButtonColumn>
      </GreenBorderInfo>
    </SubjScorePosition>
  );
};

const VerticalCopyrightSection = () => {
  return (
    <VerticalCopyRightText>
      <div>
        <p>© 2024 Faketron Corporation</p>
        <p>ALL RIGHTS RESERVED US PAT. NO. 8.44444.4444.44</p>
      </div>
      <p>Faketron MX-XXXX-XXXXXX</p>
    </VerticalCopyRightText>
  );
};

const VerticalStripSection = () => {
  return (
    <VerticalStripWrapper>
      {Array.from(Array(3).keys()).map((x) => (
        <BlackSquare key={x} />
      ))}
      <BlackSquare $gapBelow={32} />
      <BlackSquare height={8} $gapBelow={4} />
      {Array.from(Array(70).keys()).map((x) => (
        <BlackSquare key={x} />
      ))}
      <BlackSquare height={8} />
    </VerticalStripWrapper>
  );
};

const ImportanBoxSection = () => {
  return (
    <ImportantBoxPosition>
      <GreenBorderInfo $width={324}>
        <GreenTitle>Important</GreenTitle>
        <ImportantInfoWrapper>
          <ImportantLeftInfo>
            <ul>
              <li>Make Dark Marks</li>
              <li>Erase Completely to Change</li>
              <li>Example</li>
            </ul>
          </ImportantLeftInfo>
          <ImportantRightInfo>
            <h4>To Use Subjective Score Features</h4>
            <ul>
              <li>Mark total possible subjective points</li>
              <li>Only one mark per line on key</li>
              <li>163 points maximum</li>
            </ul>
            <h5>EXAMPLE OF STUDENT SCORE</h5>
          </ImportantRightInfo>
        </ImportantInfoWrapper>
      </GreenBorderInfo>
    </ImportantBoxPosition>
  );
};

const NameSubjSection = () => {
  const context = useContext(TestContext);
  if (context) {
    return (
      <NameSubjBoxPosition>
        <GreenBorderInfo $width={324}>
          <InputWrapper>
            <InputTitle>Name</InputTitle>
            <InputInput className={reenieBeenie.className}>
              {" "}
              <input
                type="text"
                onChange={(e) =>
                  context.setUrlParams({
                    ...context.urlParams,
                    [context.testType]: {
                      ...context.urlParams[context.testType],
                      name: e.target.value,
                    },
                  })
                }
                defaultValue={decodeURI(
                  context.urlParams[context.testType]["name"]
                )}
              />
            </InputInput>
          </InputWrapper>
          <InputWrapper>
            <InputInputWrapper>
              <InputTitle> Subject</InputTitle>
              <InputInput className={reenieBeenie.className}>
                <input
                  type="text"
                  onChange={(e) =>
                    context.setUrlParams({
                      ...context.urlParams,
                      [context.testType]: {
                        ...context.urlParams[context.testType],
                        subject: e.target.value,
                      },
                    })
                  }
                  defaultValue={decodeURI(
                    context.urlParams[context.testType]["subject"]
                  )}
                />
              </InputInput>
            </InputInputWrapper>
            <InputInputWrapper>
              <InputTitle> Test No.</InputTitle>
              <InputInput className={reenieBeenie.className}>
                <input
                  type="text"
                  onChange={(e) =>
                    context.setUrlParams({
                      ...context.urlParams,
                      [context.testType]: {
                        ...context.urlParams[context.testType],
                        testno: e.target.value,
                      },
                    })
                  }
                  defaultValue={decodeURI(
                    context.urlParams[context.testType]["testno"]
                  )}
                />
              </InputInput>
            </InputInputWrapper>
          </InputWrapper>

          <InputWrapper>
            <InputInputWrapper>
              <InputTitle> Date</InputTitle>
              <InputInput className={reenieBeenie.className}>
                <input
                  type="text"
                  onChange={(e) =>
                    context.setUrlParams({
                      ...context.urlParams,
                      [context.testType]: {
                        ...context.urlParams[context.testType],
                        date: e.target.value,
                      },
                    })
                  }
                  defaultValue={decodeURI(
                    context.urlParams[context.testType]["date"]
                  )}
                />
              </InputInput>
            </InputInputWrapper>
            <InputInputWrapper>
              <InputTitle> Period</InputTitle>
              <InputInput className={reenieBeenie.className}>
                <input
                  type="text"
                  onChange={(e) =>
                    context.setUrlParams({
                      ...context.urlParams,
                      [context.testType]: {
                        ...context.urlParams[context.testType],
                        period: e.target.value,
                      },
                    })
                  }
                  defaultValue={decodeURI(
                    context.urlParams[context.testType]["period"]
                  )}
                />
              </InputInput>
            </InputInputWrapper>
          </InputWrapper>
        </GreenBorderInfo>
      </NameSubjBoxPosition>
    );
  }
};

const TestRecordSection = () => {
  const context = useContext(TestContext);
  if (context) {
    return (
      <TestRecordPosition>
        <GreenBorderInfo $width={196}>
          <GreenTitle>Test Record</GreenTitle>
          <InputWrapper height={22}>
            <TRInputTitle>Part 1</TRInputTitle>
            <InputInput className={reenieBeenie.className}>
              <input
                type="text"
                onChange={(e) =>
                  context.setUrlParams({
                    ...context.urlParams,
                    [context.testType]: {
                      ...context.urlParams[context.testType],
                      part1: e.target.value,
                    },
                  })
                }
                defaultValue={
                  context.urlParams[context.testType]["part1"]
                    ? context.urlParams[context.testType]["part1"]
                    : ""
                }
              />
            </InputInput>
          </InputWrapper>
          <InputWrapper height={22}>
            <TRInputTitle>Part 2</TRInputTitle>
            <InputInput className={reenieBeenie.className}>
              <input
                type="part2"
                onChange={(e) =>
                  context.setUrlParams({
                    ...context.urlParams,
                    [context.testType]: {
                      ...context.urlParams[context.testType],
                      part2: e.target.value,
                    },
                  })
                }
                defaultValue={
                  context.urlParams[context.testType]["part2"]
                    ? context.urlParams[context.testType]["part2"]
                    : ""
                }
              />
            </InputInput>
          </InputWrapper>

          <InputWrapper height={26}>
            <TRInputTitle>Total</TRInputTitle>
            <InputInput className={reenieBeenie.className}>
              <input
                type="text"
                onChange={(e) =>
                  context.setUrlParams({
                    ...context.urlParams,
                    [context.testType]: {
                      ...context.urlParams[context.testType],
                      total: e.target.value,
                    },
                  })
                }
                defaultValue={
                  context.urlParams[context.testType]["total"]
                    ? context.urlParams[context.testType]["total"]
                    : ""
                }
              />
            </InputInput>
          </InputWrapper>
        </GreenBorderInfo>
      </TestRecordPosition>
    );
  }
};

const ReorderForm = () => {
  return (
    <ReorderFormPosition>
      {" "}
      <h3> Reorder Form No. 882-E</h3>
      <p>www.FaketronStore.com</p>
      <p>1.800.XXX.XXXX</p>
    </ReorderFormPosition>
  );
};

function decodeURI(val: string) {
  if (val) {
    return decodeURIComponent(val).replaceAll("+", " ");
  }
}
