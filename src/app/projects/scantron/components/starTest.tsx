import { Reenie_Beanie } from "next/font/google";
import { BlackSquare } from "../style/allTestStyle";
import {
  STARWrapper,
  HorizontalStripWrapper,
  TopLine,
  LastNameBoxWrapper,
  LastNameTitle,
  LetterInputRow,
  LetterInputs,
} from "../style/starTestStyle";

const reenieBeenie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reeniebeenie",
});

export const STARTest = ({ zoomAmount }: { zoomAmount: number }) => {
  const AlphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const numLetters = 5;
  const numRows = 50;
  console.log("ZOOM", zoomAmount);
  return (
    <STARWrapper zoomAmount={zoomAmount}>
      <HorizontalStripWrapper>
        {Array.from(Array(54).keys()).map((x, i) => (
          <BlackSquare
            key={x}
            height={16}
            width={5}
            $gapRight={8 + Math.floor(i * 0.25)}
          />
        ))}
      </HorizontalStripWrapper>
      <TopLine>
        <BlackSquare height={12} width={2} />
      </TopLine>
      <LastNameBox />
    </STARWrapper>
  );
};

const LastNameBox = () => {
  return (
    <LastNameBoxWrapper>
      <LastNameTitle>Last Name</LastNameTitle>
      <LetterInputRow>
        {Array.from(Array(13).keys()).map((x) => (
          <LetterInputs
            key={x}
            className={reenieBeenie.className}
            maxLength={1}
          />
        ))}
      </LetterInputRow>
    </LastNameBoxWrapper>
  );
};
