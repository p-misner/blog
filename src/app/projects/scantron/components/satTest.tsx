import { SATWrapper } from "../style/satTestStyle";

export const SATTest = ({ zoomAmount }: { zoomAmount: number }) => {
  const AlphabetArray: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const numLetters = 5;
  const numRows = 50;
  console.log("ZOOM", zoomAmount);
  return <SATWrapper zoomAmount={zoomAmount}>Coming soon</SATWrapper>;
};
