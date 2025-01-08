import { useState } from "react";
import {
  BottomBlackBoxPosition,
  ButtonColumn,
  ButtonRow,
  ButtonWrapper,
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
  ScantronTypes,
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

const reenieBeenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reeniebeenie",
});
export function Scantron({
  $zoomAmount,
  $selectMode,
  $urlParams,
  setUrlParams,
}: ScantronTypes) {
  const AlphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const numLetters = 5;
  const numRows = 50;
  return (
    <div>
      <ScantronWrapper
        $zoomAmount={$zoomAmount}
        $selectMode={$selectMode}
        $urlParams={$urlParams}
      >
        <SubjScoreSection
          urlParams={$urlParams}
          setUrlParams={setUrlParams}
          selectMode={$selectMode}
        />
        <VerticalCopyrightSection />
        <VerticalStripSection />

        <ButtonColumn>
          {Array.from(Array(numRows).keys()).map((x, i) => (
            <ScantronButtonRow
              selectMode={$selectMode}
              key={x}
              contents={AlphabetArray.slice(0, numLetters)}
              qNumber={i + 1}
              urlParams={$urlParams}
              setUrlParams={setUrlParams}
            />
          ))}
        </ButtonColumn>
        <ImportanBoxSection />
        <NameSubjSection urlParams={$urlParams} setUrlParams={setUrlParams} />
        <TestRecordSection urlParams={$urlParams} setUrlParams={setUrlParams} />
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

const SubjScoreSection = ({
  setUrlParams,
  urlParams,
  selectMode,
}: {
  setUrlParams: any;
  urlParams: any;
  selectMode: "click" | "hover";
}) => {
  return (
    <SubjScorePosition>
      <GreenBorderInfo $width={230}>
        <GreenTitle>Subjective Score</GreenTitle>
        <GreenTitle>Instructor Use Only</GreenTitle>
        <GreenBordersButtonColumn>
          <ButtonRow>
            {["100", "90", "80", "70", "60"].map((x, i) => (
              <ScantronButton
                selectMode={selectMode}
                key={x}
                label={x}
                buttonPos={i}
                rowNum="ss100"
                setUrlParams={setUrlParams}
                urlParams={urlParams}
              />
            ))}
          </ButtonRow>
          <ButtonRow>
            {["50", "40", "30", "20", "10"].map((x, i) => (
              <ScantronButton
                selectMode={selectMode}
                key={x}
                label={x}
                buttonPos={i}
                rowNum="ss50"
                setUrlParams={setUrlParams}
                urlParams={urlParams}
              />
            ))}
          </ButtonRow>
          <ButtonRow>
            {["9", "8", "7", "6", "5"].map((x, i) => (
              <ScantronButton
                selectMode={selectMode}
                key={x}
                label={x}
                buttonPos={i}
                rowNum="ss9"
                setUrlParams={setUrlParams}
                urlParams={urlParams}
              />
            ))}
          </ButtonRow>
          <ButtonRow>
            {["4", "3", "2", "1", "0"].map((x, i) => (
              <ScantronButton
                selectMode={selectMode}
                key={x}
                label={x}
                buttonPos={i}
                rowNum="ss4"
                setUrlParams={setUrlParams}
                urlParams={urlParams}
              />
            ))}
          </ButtonRow>
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

const ScantronButton = ({
  label,
  buttonPos,
  rowNum,
  selectMode,
  setUrlParams,
  urlParams,
}: {
  label: string;
  buttonPos: number;
  rowNum: number | string;
  selectMode: "hover" | "click";
  setUrlParams: any;
  urlParams: any;
}) => {
  let currentStatus = urlParams[rowNum]
    ? urlParams[rowNum].split("")
    : "00000".split("");
  const [clicked, setClicked] = useState(
    currentStatus[buttonPos] == "1" ? true : false
  );

  function onBtnStateChange(newState: boolean) {
    setClicked(newState);

    currentStatus[buttonPos] = clicked ? 0 : 1;
    setUrlParams({ ...urlParams, [rowNum]: currentStatus.join("") });
  }

  return (
    <ButtonWrapper
      onMouseEnter={() =>
        selectMode == "click" ? "" : onBtnStateChange(!clicked)
      }
      onClick={() => {
        selectMode == "click" ? onBtnStateChange(!clicked) : "";
      }}
      typeof="button"
      $clicked={currentStatus[buttonPos] == "1" ? true : false}
    >
      {label}
    </ButtonWrapper>
  );
};

const ScantronButtonRow = ({
  contents,
  selectMode,
  qNumber,
  setUrlParams,
  urlParams,
}: {
  contents: string[];
  selectMode: "click" | "hover";
  qNumber?: number;
  setUrlParams: any;
  urlParams: any;
}) => {
  return (
    <ButtonRow>
      {qNumber && <p> {qNumber}</p>}
      {qNumber &&
        contents.map((x, i) => (
          <ScantronButton
            selectMode={selectMode}
            key={x}
            label={x}
            buttonPos={i}
            rowNum={qNumber}
            urlParams={urlParams}
            setUrlParams={setUrlParams}
          />
        ))}
    </ButtonRow>
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

const NameSubjSection = ({
  setUrlParams,
  urlParams,
}: {
  setUrlParams: any;
  urlParams: any;
}) => {
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
                setUrlParams({ ...urlParams, name: e.target.value })
              }
              defaultValue={decodeURI(urlParams["name"])}
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
                  setUrlParams({ ...urlParams, subject: e.target.value })
                }
                defaultValue={decodeURI(urlParams["subject"])}
              />
            </InputInput>
          </InputInputWrapper>
          <InputInputWrapper>
            <InputTitle> Test No.</InputTitle>
            <InputInput className={reenieBeenie.className}>
              <input
                type="text"
                onChange={(e) =>
                  setUrlParams({ ...urlParams, testno: e.target.value })
                }
                defaultValue={decodeURI(urlParams["testno"])}
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
                  setUrlParams({ ...urlParams, date: e.target.value })
                }
                defaultValue={decodeURI(urlParams["date"])}
              />
            </InputInput>
          </InputInputWrapper>
          <InputInputWrapper>
            <InputTitle> Period</InputTitle>
            <InputInput className={reenieBeenie.className}>
              <input
                type="text"
                onChange={(e) =>
                  setUrlParams({ ...urlParams, period: e.target.value })
                }
                defaultValue={decodeURI(urlParams["period"])}
              />
            </InputInput>
          </InputInputWrapper>
        </InputWrapper>
      </GreenBorderInfo>
    </NameSubjBoxPosition>
  );
};

const TestRecordSection = ({
  setUrlParams,
  urlParams,
}: {
  setUrlParams: any;
  urlParams: any;
}) => {
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
                setUrlParams({ ...urlParams, part1: e.target.value })
              }
              defaultValue={urlParams["part1"] ? urlParams["part1"] : ""}
            />
          </InputInput>
        </InputWrapper>
        <InputWrapper height={22}>
          <TRInputTitle>Part 2</TRInputTitle>
          <InputInput className={reenieBeenie.className}>
            <input
              type="part2"
              onChange={(e) =>
                setUrlParams({ ...urlParams, part2: e.target.value })
              }
              defaultValue={urlParams["part2"] ? urlParams["part2"] : ""}
            />
          </InputInput>
        </InputWrapper>

        <InputWrapper height={26}>
          <TRInputTitle>Total</TRInputTitle>
          <InputInput className={reenieBeenie.className}>
            <input
              type="text"
              onChange={(e) =>
                setUrlParams({ ...urlParams, total: e.target.value })
              }
              defaultValue={urlParams["total"] ? urlParams["total"] : ""}
            />
          </InputInput>
        </InputWrapper>
      </GreenBorderInfo>
    </TestRecordPosition>
  );
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
