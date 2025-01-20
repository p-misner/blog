import { useState } from "react";
import { MessageWrapper } from "../style/deskStyle";
import { Close } from "./icons";

export const PopUpMessage = ({
  testType,
  message,
  timeout,
}: {
  testType: "scantron" | "SAT" | "STAR";
  message: string;
  timeout?: number;
}) => {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (
      <MessageWrapper $testType={testType}>
        <p> {message}</p>
        <button onClick={() => setDisplay(false)}>
          <Close width={14} height={14} fillColor="#535353" />
        </button>
      </MessageWrapper>
    );
  }
};
// export const LinkCopied = ({
//   testType,
// }: {
//   testType: "scantron" | "SAT" | "STAR";
// }) => {
//   const [display, setDisplay] = useState(true);
//   if (display) {
//     return (
//       <MessageWrapper $testType={testType}>
//         <p> Hold Shift key to fill buttons on hover</p>
//         <button onClick={() => setDisplay(false)}>
//           {" "}
//           <Close width={14} height={14} fillColor="#535353" />
//         </button>
//       </MessageWrapper>
//     );
//   }
// };
