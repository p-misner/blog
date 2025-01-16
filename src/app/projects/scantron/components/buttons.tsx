import { useContext, useState } from "react";
import { TestContext } from "./context";
import {
  ScantronButtonRow,
  ScantronButtonWrapper,
  STARButtonRow,
  STARButtonWrapper,
} from "../style/buttonStyle";

export const TestButton = ({
  label,
  buttonPos,
  rowLength = 5,
  urlParamName,
}: {
  label: string;
  buttonPos: number;
  rowLength?: number;
  urlParamName: number | string;
}) => {
  const context = useContext(TestContext);
  let currentStatus = context?.urlParams[context?.testType][urlParamName]
    ? context.urlParams[context.testType][urlParamName].split("")
    : "0".repeat(rowLength).split("");

  const [clicked, setClicked] = useState(
    currentStatus[buttonPos] == "1" ? true : false
  );
  function onBtnStateChange(newState: boolean) {
    setClicked(newState);
    currentStatus[buttonPos] = clicked ? 0 : 1;
    if (context) {
      context.setUrlParams({
        ...context.urlParams,
        [context.testType]: {
          ...context.urlParams[context.testType],
          [urlParamName]: currentStatus.join(""),
        },
      });
    }
  }

  if (context) {
    switch (context.testType) {
      case "scantron":
        return (
          <ScantronButtonWrapper
            onMouseEnter={() =>
              context.selectMode == "click" ? "" : onBtnStateChange(!clicked)
            }
            onClick={() => {
              context.selectMode == "click" ? onBtnStateChange(!clicked) : "";
            }}
            typeof="button"
            $clicked={currentStatus[buttonPos] == "1" ? true : false}
          >
            {label}
          </ScantronButtonWrapper>
        );
      case "STAR":
        return (
          <STARButtonWrapper
            onMouseEnter={() =>
              context.selectMode == "click" ? "" : onBtnStateChange(!clicked)
            }
            onClick={() => {
              context.selectMode == "click" ? onBtnStateChange(!clicked) : "";
            }}
            typeof="button"
            $clicked={currentStatus[buttonPos] == "1" ? true : false}
          >
            {label}
          </STARButtonWrapper>
        );
      default:
        return <div> button wrong test type</div>;
    }
  }
};

export const TestButtonRow = ({
  contents,
  qNumber,
  $marginTop,
}: {
  contents: string[];
  qNumber?: number;
  $marginTop?: number;
}) => {
  const context = useContext(TestContext);
  if (context) {
    switch (context.testType) {
      case "scantron":
        return (
          <ScantronButtonRow>
            {qNumber && <p> {qNumber}</p>}
            {qNumber &&
              contents.map((x, i) => (
                <TestButton
                  key={x}
                  label={x}
                  buttonPos={i}
                  urlParamName={qNumber}
                />
              ))}
          </ScantronButtonRow>
        );
      case "STAR":
        return (
          <STARButtonRow>
            <div>{qNumber && <p> {qNumber}</p>}</div>
            {qNumber &&
              contents.map((x, i) => (
                <TestButton
                  key={x}
                  label={x}
                  buttonPos={i}
                  urlParamName={qNumber}
                />
              ))}
          </STARButtonRow>
        );
      default:
        return <div> button wrong test type</div>;
    }
  }
};
