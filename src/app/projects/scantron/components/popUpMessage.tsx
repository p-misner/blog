import { useState } from "react";
import { MessageWrapper } from "../style/deskStyle";
import { Close } from "./icons";

export const PopUpMessage = ({
  testType,
}: {
  testType: "scantron" | "SAT" | "STAR";
}) => {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (
      <MessageWrapper $testType={testType}>
        <p> Hold Shift key to fill buttons on hover</p>
        <button onClick={() => setDisplay(false)}>
          {" "}
          <Close width={14} height={14} fillColor="#535353" />
        </button>
      </MessageWrapper>
    );
  }
};
export const LinkCopied = ({
  testType,
}: {
  testType: "scantron" | "SAT" | "STAR";
}) => {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (
      <MessageWrapper $testType={testType}>
        <p> Hold Shift key to fill buttons on hover</p>
        <button onClick={() => setDisplay(false)}>
          {" "}
          <Close width={14} height={14} fillColor="#535353" />
        </button>
      </MessageWrapper>
    );
  }
};
