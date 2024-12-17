import { STARWrapper } from "../style/starTestStyle";

export const STARTest = ({ zoomAmount }: { zoomAmount: number }) => {
  const AlphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const numLetters = 5;
  const numRows = 50;
  console.log("ZOOM", zoomAmount);
  return <STARWrapper zoomAmount={zoomAmount}>coming soon</STARWrapper>;
};
