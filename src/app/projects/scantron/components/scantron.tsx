import { useState } from "react";
import {
  BlackSquare,
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

const reenieBeenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reeniebeenie",
});
export function Scantron({ zoomAmount, selectMode }: ScantronTypes) {
  const AlphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const numLetters = 5;
  const numRows = 50;

  return (
    <div>
      <ScantronWrapper zoomAmount={zoomAmount} selectMode={selectMode}>
        <SubjScoreSection />
        <VerticalCopyrightSection />
        <VerticalStripSection />

        <ButtonColumn>
          {Array.from(Array(numRows).keys()).map((x, i) => (
            <ScantronButtonRow
              selectMode={selectMode}
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
          <BlackSquare gapBelow={2} />
          <BlackSquare gapBelow={12} />
          <BlackSquare height={12} />
        </BottomBlackBoxPosition>
        <ReorderForm />
      </ScantronWrapper>
    </div>
  );
}

const SubjScoreSection = () => {
  return (
    <SubjScorePosition>
      <GreenBorderInfo $width={230}>
        <GreenTitle>Subjective Score</GreenTitle>
        <GreenTitle>Instructor Use Only</GreenTitle>
        <GreenBordersButtonColumn>
          <ButtonRow>
            {["100", "90", "80", "70", "60"].map((x) => (
              <ScantronButton selectMode="click" key={x} letter={x} />
            ))}
          </ButtonRow>
          <ButtonRow>
            {["50", "40", "30", "20", "10"].map((x) => (
              <ScantronButton selectMode="click" key={x} letter={x} />
            ))}
          </ButtonRow>
          <ButtonRow>
            {["9", "8", "7", "6", "5"].map((x) => (
              <ScantronButton selectMode="click" key={x} letter={x} />
            ))}
          </ButtonRow>
          <ButtonRow>
            {["4", "3", "2", "1", "0"].map((x) => (
              <ScantronButton selectMode="click" key={x} letter={x} />
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
        <BlackSquare />
      ))}
      <BlackSquare gapBelow={32} />
      <BlackSquare height={8} gapBelow={4} />
      {Array.from(Array(70).keys()).map((x) => (
        <BlackSquare />
      ))}
      <BlackSquare height={8} />
    </VerticalStripWrapper>
  );
};

const ScantronButton = ({
  letter,
  selectMode,
}: {
  letter: string;
  selectMode: "hover" | "click";
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <ButtonWrapper
      onMouseEnter={() => (selectMode == "click" ? "" : setClicked(!clicked))}
      onClick={() => (selectMode == "click" ? setClicked(!clicked) : "")}
      typeof="button"
      $clicked={clicked}
    >
      {letter}
    </ButtonWrapper>
  );
};

const ScantronButtonRow = ({
  contents,
  selectMode,
  qNumber,
}: {
  contents: string[];
  selectMode: "click" | "hover";
  qNumber?: number;
}) => {
  return (
    <ButtonRow>
      {qNumber && <p> {qNumber}</p>}
      {contents.map((x) => (
        <ScantronButton selectMode={selectMode} key={x} letter={x} />
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

const NameSubjSection = () => {
  return (
    <NameSubjBoxPosition>
      <GreenBorderInfo $width={324}>
        <InputWrapper>
          <InputTitle>Name</InputTitle>
          <InputInput className={reenieBeenie.className}>
            {" "}
            <input type="text" />
          </InputInput>
        </InputWrapper>
        <InputWrapper>
          <InputInputWrapper>
            <InputTitle> Subject</InputTitle>
            <InputInput className={reenieBeenie.className}>
              <input type="text" />
            </InputInput>
          </InputInputWrapper>
          <InputInputWrapper>
            <InputTitle> Test No.</InputTitle>
            <InputInput className={reenieBeenie.className}>
              <input type="text" />
            </InputInput>
          </InputInputWrapper>
        </InputWrapper>

        <InputWrapper>
          <InputInputWrapper>
            <InputTitle> Date</InputTitle>
            <InputInput className={reenieBeenie.className}>
              <input type="text" />
            </InputInput>
          </InputInputWrapper>
          <InputInputWrapper>
            <InputTitle> Period</InputTitle>
            <InputInput className={reenieBeenie.className}>
              <input type="text" />
            </InputInput>
          </InputInputWrapper>
        </InputWrapper>
      </GreenBorderInfo>
    </NameSubjBoxPosition>
  );
};

const TestRecordSection = () => {
  return (
    <TestRecordPosition>
      <GreenBorderInfo $width={196}>
        <GreenTitle>Test Record</GreenTitle>
        <InputWrapper height={22}>
          <TRInputTitle>Part 1</TRInputTitle>
          <InputInput className={reenieBeenie.className}>
            <input type="text" />
          </InputInput>
        </InputWrapper>
        <InputWrapper height={22}>
          <TRInputTitle>Part 2</TRInputTitle>
          <InputInput className={reenieBeenie.className}>
            <input type="text" />
          </InputInput>
        </InputWrapper>

        <InputWrapper height={26}>
          <TRInputTitle>Total</TRInputTitle>
          <InputInput className={reenieBeenie.className}>
            <input type="text" />
          </InputInput>
        </InputWrapper>
      </GreenBorderInfo>
    </TestRecordPosition>
  );
};

const FaketronTitle = () => {
  return <h1> Faketron</h1>;
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
