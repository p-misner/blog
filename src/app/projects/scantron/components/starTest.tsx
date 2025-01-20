import { Reenie_Beanie } from "next/font/google";
import { BlackSquare } from "../style/allTestStyle";
import {
  STARWrapper,
  HorizontalStripWrapper,
  TopLine,
  LastNameBoxWrapper,
  BoxTitle,
  LetterInputRow,
  LetterInputs,
  STARType,
  BubbleColumnWrapper,
  HundredBubbleColumnsWrapper,
  BubbleColumnRow,
  BlueHighlight,
  TrueAnnotation,
  TrueFalseWrapper,
  FalseAnnotation,
  IDBoxWrapper,
  MiscBoxWrapper,
  MiscTitleWrapper,
  MiscABCDEFWrapper,
  LabeledLetterRow,
  BoxSubitle,
  FormWrapper,
  InstructionalWrapper,
  PoorGoodWrapper,
  DeptWrapper,
  CourseWrapper,
  DateWrapper,
  LongBorder,
} from "../style/starTestStyle";
import { useContext } from "react";
import { TestContext } from "./context";
import { TestButton, TestButtonRow } from "./buttons";
import { STARButtonRow } from "../style/buttonStyle";
import styled from "styled-components";
import { fontSize, fontWeight, spaceBlocks } from "@/app/style/styleConstants";

const reenieBeenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reeniebeenie",
});
const AlphabetArray: string[] = " abcdefghijklmnopqrstuvwxyz".split("");

export const STARTest = () => {
  const context = useContext(TestContext);
  if (context) {
    return (
      <STARWrapper $zoomAmount={context.zoomAmount}>
        <HorizontalStripWrapper>
          {Array.from(Array(54).keys()).map((x, i) => (
            <BlackSquare
              key={x}
              height={16}
              width={5}
              $gapRight={8 + Math.floor(i * 0.27)}
            />
          ))}
        </HorizontalStripWrapper>
        <TopLine>
          <BlackSquare height={12} width={2} />
        </TopLine>
        <LastNameBox />
        <IDNumber />
        <Misc />
        <Instructions />
        <PoorGood />
        <LongBorder />
        <Dept />
        <Course />
        <Date />
        <HundredBubbleColumns />
      </STARWrapper>
    );
  }
};

const LastNameBox = () => {
  const context = useContext(TestContext);

  if (context) {
    return (
      <LastNameBoxWrapper>
        <BoxTitle>Last Name</BoxTitle>
        <LetterInputRow>
          {Array.from(Array(13).keys()).map((x) => (
            <LetterInputs
              key={x}
              className={reenieBeenie.className}
              maxLength={1}
              onChange={(e) => {
                context.setUrlParams({
                  ...context.urlParams,
                  [context.testType]: {
                    ...context.urlParams[context.testType],
                    [`ln-${x}`]: e.target.value,
                  },
                });
              }}
              defaultValue={
                context.urlParams[context.testType][`ln-${x}`]
                  ? decodeURI(context.urlParams[context.testType][`ln-${x}`])
                  : ""
              }
            />
          ))}
        </LetterInputRow>
        {Array.from(Array(27).keys()).map((x, i) => (
          <STARButtonRow key={`starRow-${i}`}>
            {Array.from(Array(13).keys()).map((xx, ii) => {
              return (
                <TestButton
                  key={`${x}-${xx}`}
                  label={AlphabetArray[i]}
                  buttonPos={ii}
                  urlParamName={`lnb-${x}`}
                  rowLength={13}
                />
              );
            })}
          </STARButtonRow>
        ))}
      </LastNameBoxWrapper>
    );
  }
};

const IDNumber = () => {
  const context = useContext(TestContext);

  if (context) {
    return (
      <IDBoxWrapper>
        <BoxTitle padding={8}>ID Number</BoxTitle>
        <LetterInputRow>
          {Array.from(Array(8).keys()).map((x) => (
            <LetterInputs
              key={x}
              className={reenieBeenie.className}
              maxLength={1}
              onChange={(e) => {
                context.setUrlParams({
                  ...context.urlParams,
                  [context.testType]: {
                    ...context.urlParams[context.testType],
                    [`id-${x}`]: e.target.value,
                  },
                });
              }}
              defaultValue={
                context.urlParams[context.testType][`id-${x}`]
                  ? decodeURI(context.urlParams[context.testType][`id-${x}`])
                  : ""
              }
            />
          ))}
        </LetterInputRow>
        {Array.from(Array(10).keys()).map((x, i) => (
          <STARButtonRow key={`starRow-${i}`}>
            {Array.from(Array(8).keys()).map((xx, ii) => {
              return (
                <TestButton
                  key={`${x}-${xx}`}
                  label={`${i}`}
                  buttonPos={ii}
                  urlParamName={`idb-${x}`}
                  rowLength={13}
                />
              );
            })}
          </STARButtonRow>
        ))}
      </IDBoxWrapper>
    );
  }
};
const Misc = () => {
  const context = useContext(TestContext);

  if (context) {
    return (
      <MiscBoxWrapper>
        <MiscTitleWrapper>
          <MiscABCDEFWrapper>
            <BoxTitle padding={4}>MISC.</BoxTitle>{" "}
            <LabeledLetterRow>
              {AlphabetArray.slice(1, 6).map((x) => (
                <div key={x}>{x}</div>
              ))}
            </LabeledLetterRow>
            <LetterInputRow>
              {Array.from(Array(5).keys()).map((x) => (
                <LetterInputs
                  key={x}
                  className={reenieBeenie.className}
                  maxLength={1}
                  onChange={(e) => {
                    context.setUrlParams({
                      ...context.urlParams,
                      [context.testType]: {
                        ...context.urlParams[context.testType],
                        [`m-${x}`]: e.target.value,
                      },
                    });
                  }}
                  defaultValue={
                    context.urlParams[context.testType][`m-${x}`]
                      ? decodeURI(context.urlParams[context.testType][`m-${x}`])
                      : ""
                  }
                />
              ))}
            </LetterInputRow>
          </MiscABCDEFWrapper>
          <MiscABCDEFWrapper>
            {" "}
            <BoxTitle padding={16}>SFC.</BoxTitle>{" "}
            <LetterInputRow>
              {Array.from(Array(2).keys()).map((x) => (
                <LetterInputs
                  key={x}
                  className={reenieBeenie.className}
                  maxLength={1}
                  onChange={(e) => {
                    context.setUrlParams({
                      ...context.urlParams,
                      [context.testType]: {
                        ...context.urlParams[context.testType],
                        [`m2-${x}`]: e.target.value,
                      },
                    });
                  }}
                  defaultValue={
                    context.urlParams[context.testType][`m2-${x}`]
                      ? decodeURI(
                          context.urlParams[context.testType][`m2-${x}`]
                        )
                      : ""
                  }
                />
              ))}
            </LetterInputRow>
          </MiscABCDEFWrapper>
          <FormWrapper>
            <p>F</p>
            <p>O</p>
            <p>R</p>
            <p>M</p>
          </FormWrapper>
        </MiscTitleWrapper>

        {Array.from(Array(10).keys()).map((x, i) => (
          <STARButtonRow key={`starRow-${i}`}>
            {Array.from(Array(8).keys()).map((xx, ii) => {
              return (
                <TestButton
                  key={`${x}-${xx}`}
                  label={`${i}`}
                  buttonPos={ii}
                  urlParamName={`mb-${x}`}
                  rowLength={13}
                />
              );
            })}
          </STARButtonRow>
        ))}
      </MiscBoxWrapper>
    );
  }
};

const Instructions = () => {
  return (
    <InstructionalWrapper>
      <div>
        <p> Instructions: </p>
      </div>
      <div>
        <p> Using a softlead pencil, completely blacken ovals</p>
        <p>
          {" "}
          Do not use ink or colored pencil. Cleanly erase any unintended marks.
        </p>
      </div>
    </InstructionalWrapper>
  );
};

const PoorGood = () => {
  return (
    <PoorGoodWrapper>
      <div>
        <h2> Poor</h2>
        {Array.from(Array(3).keys()).map((x) => {
          return (
            <TestButton
              key={`poor${x}`}
              label={" "}
              buttonPos={x}
              urlParamName={`p-${x}`}
              rowLength={13}
            />
          );
        })}
      </div>
      <div>
        <h2> Good</h2>

        {Array.from(Array(3).keys()).map((x) => {
          return (
            <TestButton
              key={`good${x}`}
              label={" "}
              buttonPos={x}
              urlParamName={`g-${x}`}
              rowLength={13}
            />
          );
        })}
      </div>
    </PoorGoodWrapper>
  );
};
const HundredBubbleColumns = () => {
  return (
    <HundredBubbleColumnsWrapper>
      {[1, 26, 51, 76].map((x) => (
        <BubbleColumn startNum={x} key={x} />
      ))}
      {/*         <BubbleColumn startNum={x} key={`bc-${x}-${Math.random()}`} />
       */}
    </HundredBubbleColumnsWrapper>
  );
};

const Dept = () => {
  const context = useContext(TestContext);
  if (context) {
    return (
      <DeptWrapper>
        <h2>DEPT.</h2>

        {Array.from(Array(4).keys()).map((x) => (
          <LetterInputs
            key={x}
            className={reenieBeenie.className}
            maxLength={1}
            onChange={(e) => {
              context.setUrlParams({
                ...context.urlParams,
                [context.testType]: {
                  ...context.urlParams[context.testType],
                  [`d-${x}`]: e.target.value,
                },
              });
            }}
            defaultValue={
              context.urlParams[context.testType][`d-${x}`]
                ? decodeURI(context.urlParams[context.testType][`d-${x}`])
                : ""
            }
            $backgroundColor={"#e4e4ec79"}
          />
        ))}
      </DeptWrapper>
    );
  }
};
const Course = () => {
  const context = useContext(TestContext);
  if (context) {
    return (
      <CourseWrapper>
        <h2>COURSE</h2>

        {Array.from(Array(3).keys()).map((x) => (
          <LetterInputs
            key={x}
            className={reenieBeenie.className}
            maxLength={1}
            onChange={(e) => {
              context.setUrlParams({
                ...context.urlParams,
                [context.testType]: {
                  ...context.urlParams[context.testType],
                  [`c-${x}`]: e.target.value,
                },
              });
            }}
            defaultValue={
              context.urlParams[context.testType][`c-${x}`]
                ? decodeURI(context.urlParams[context.testType][`c-${x}`])
                : ""
            }
            $backgroundColor={"#e4e4ec79"}
          />
        ))}
      </CourseWrapper>
    );
  }
};
const Date = () => {
  const context = useContext(TestContext);
  if (context) {
    return (
      <DateWrapper>
        <h2>DATE.</h2>

        {Array.from(Array(3).keys()).map((x) => (
          <LetterInputs
            key={x}
            className={reenieBeenie.className}
            maxLength={4}
            onChange={(e) => {
              context.setUrlParams({
                ...context.urlParams,
                [context.testType]: {
                  ...context.urlParams[context.testType],
                  [`date-${x}`]: e.target.value,
                },
              });
            }}
            defaultValue={
              context.urlParams[context.testType][`date-${x}`]
                ? decodeURI(context.urlParams[context.testType][`date-${x}`])
                : ""
            }
            $backgroundColor={"#e4e4ec79"}
          />
        ))}
      </DateWrapper>
    );
  }
};

const BubbleColumn = ({ startNum }: { startNum: number }) => {
  return (
    <TrueFalseWrapper>
      <TrueAnnotation> T</TrueAnnotation>
      <FalseAnnotation> F</FalseAnnotation>
      <BubbleColumnWrapper>
        {Array.from(Array(25).keys()).map((x, i) => (
          <BubbleColumnRow key={`bubbleColumn-${i + startNum}`}>
            <BlueHighlight>
              <p> {i + startNum}</p>
            </BlueHighlight>

            {AlphabetArray.slice(1, 6).map((xx, ii) => (
              <div key={xx}>
                <TestButton
                  label={xx}
                  buttonPos={ii}
                  urlParamName={`br${i + startNum + xx}`}
                  rowLength={5}
                />
              </div>
            ))}
          </BubbleColumnRow>
        ))}
      </BubbleColumnWrapper>
    </TrueFalseWrapper>
  );
};
