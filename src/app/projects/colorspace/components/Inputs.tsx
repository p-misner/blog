/**
 * Allow for label in a couple locations above or on line
 * Allow for an in-input symbol/label
 *
 */

import { useEffect, useRef, useState } from "react";
import {
  InInputLabel,
  InputWrapper,
  NumberInput,
  OutsideInputLabel,
} from "../style/InputsStyle";

type LabelInputType = {
  label?: string;
  insideLabel?: string;
  labelType: "number" | "text";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string;
  onChangeCallback?: any;
};
export const LabelInput = ({
  label,
  insideLabel,
  labelType,
  defaultValue,
  min,
  max,
  step,
  onChangeCallback,
}: // onBlur,
LabelInputType) => {
  const InInputLabelLength = useRef<HTMLParagraphElement>(null);
  const [boundingRect, setBoundingRect] = useState<DOMRect>();
  const isDown = useRef<boolean>(false);
  const [value, setValue] = useState(
    parseDefaultValue({
      defaultValue: defaultValue ? defaultValue : "",
      labelType: labelType,
    })
  );
  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();

    if (isDown.current) {
      onChangeCallback(
        validateValue({
          min: min,
          max: max,
          labelType: "number",
          value: boundingRect
            ? parseFloat(value.toString()) - boundingRect?.left + e.clientX
            : parseFloat(value.toString()) + e.clientX,
        })
      );
    }
  };
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    isDown.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "ew-resize ";
  };

  const handleMouseUp = (): void => {
    isDown.current = false;
    document.body.style.cursor = "auto";
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    if (InInputLabelLength.current) {
      setBoundingRect(InInputLabelLength.current.getBoundingClientRect());
    }
  }, []);
  return (
    <div>
      <OutsideInputLabel> {label ? label : ""}</OutsideInputLabel>

      <InputWrapper>
        <InInputLabel
          $boundingrect={boundingRect}
          ref={InInputLabelLength}
          onMouseDown={(e) => handleMouseDown(e)}
        >
          {insideLabel ? insideLabel : ""}
        </InInputLabel>
        <NumberInput
          $boundingrect={boundingRect}
          type={labelType}
          min={min ? min : ""}
          max={min ? max : ""}
          step={min ? step : ""}
          onChange={(e) => {
            onChangeCallback(e.target.value);
          }}
          onBlur={(e) => {
            onChangeCallback(
              validateValue({
                value: e.target.value,
                min: min,
                max: max,
                labelType: "number",
              })
            );
          }}
          value={defaultValue}
        />
      </InputWrapper>
    </div>
  );
};

function parseDefaultValue({
  defaultValue,
  labelType,
}: {
  defaultValue?: number | string;
  labelType: string;
}) {
  if (labelType == "number") {
    return defaultValue ? defaultValue : 0;
  } else {
    return defaultValue ? defaultValue : "";
  }
}

function validateValue({
  min,
  max,
  value,
  labelType,
}: {
  min?: number;
  max?: number;
  value: number | string;
  labelType: "number" | "text";
}) {
  if (labelType == "number") {
    let val = parseFloat(value.toString());
    if (typeof max !== "undefined" && val >= max) return max;
    else if (typeof min !== "undefined" && val <= min) return min;
  }
  return value;
}
