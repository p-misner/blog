import { useEffect, useRef, useState } from "react";
import {
  ColorPickerWrapper,
  ColorSquare,
  RowLayout,
} from "../style/colorSpaceStyle";
import {
  InInputLabel,
  InputWrapper,
  NumberInput,
  OutsideInputLabel,
} from "../style/InputsStyle";

export const ColorPicker = ({
  colors,
  colorIndex,
  setColors,
}: {
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
  setColors: any;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const ColorInputRef = useRef<HTMLDivElement>(null);

  let parentPosition = ColorInputRef?.current?.getBoundingClientRect();

  return (
    <div>
      <ColorSquare
        onClick={() => setOpenModal(!openModal)}
        ref={ColorInputRef}
        color={colors[colorIndex]}
      />
      {openModal && (
        <ColorPickerModal
          parentPosition={parentPosition}
          colors={colors}
          colorIndex={colorIndex}
        />
      )}
    </div>
  );
};

const ColorPickerModal = ({
  parentPosition,
  colors,
  colorIndex,
}: {
  parentPosition: any;
  colors: { r: number; g: number; b: number }[];
  colorIndex: number;
}) => {
  return (
    <ColorPickerWrapper $parentPosition={parentPosition}>
      <RowLayout>
        <LabelInput
          insideLabel="R"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].r}
        />
        <LabelInput
          insideLabel="G"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].g}
        />
        <LabelInput
          insideLabel="B"
          labelType="number"
          min={0}
          max={255}
          defaultValue={colors[colorIndex].b}
        />
      </RowLayout>
    </ColorPickerWrapper>
  );
};

/**
 * Allow for label in a couple locations above or on line
 * Allow for an in-input symbol/label
 *
 */

type LabelInputType = {
  label?: string;
  insideLabel?: string;
  labelType: "number" | "text";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string;
  onChange?: any;
};
const LabelInput = ({
  label,
  insideLabel,
  labelType,
  defaultValue,
  min,
  max,
  step,
  onChange,
  onBlur,
}: LabelInputType) => {
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
    // console.log("mousemove", e);

    if (isDown.current) {
      let distanceMoved = labelLength?.left - e.clientX;
      setValue(
        validateValue({
          min: min,
          max: max,
          labelType: "number",
          value: value - labelLength?.left + e.clientX,
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
  };

  const handleMouseUp = (): void => {
    isDown.current = false;

    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    InInputLabelLength.current &&
      setBoundingRect(InInputLabelLength.current.getBoundingClientRect());
  }, [InInputLabelLength.current]);
  return (
    <div>
      <OutsideInputLabel> {label ? label : ""}</OutsideInputLabel>
      <InputWrapper>
        {/* <InInputLabel
          boundingRect={boundingRect}
          // height={labelLength ? labelLength.height : 0}
          ref={InInputLabelLength}
          onMouseDown={(e) => handleMouseDown(e)}
        >
          {insideLabel ? insideLabel : ""}
        </InInputLabel>
        <NumberInput
          boundingRect={boundingRect}
          type={labelType}
          min={min ? min : ""}
          max={min ? max : ""}
          step={min ? step : ""}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) =>
            setValue(
              validateValue({
                value: e.target.value,
                min: min,
                max: max,
                labelType: "number",
              })
            )
          }
          value={value}
        /> */}
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
    let val = parseFloat(value);
    if (typeof max !== "undefined" && val >= max) return max;
    else if (typeof min !== "undefined" && val <= min) return min;
  }
  return value;
}
