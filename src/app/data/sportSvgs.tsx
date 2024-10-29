const tennis_startX = 0;
const tennis_startY = 0;
const tennis_postToDoublesSideline = 3;
const tennis_courtWidth = 36;
const tennis_singlesWidth = 27;
const tennis_baselineToBaseline = 78;
const tennis_netToServiceLine = 21;
const tennis_serviceLineToBaseline = 18;
const tennis_alleyWidth = 4.5;

export type ArcInputs = {
  centerX: number;
  centerY: number;
  radius: number;
  orientation: "nw" | "sw" | "ne" | "se";
};
export type SVGInputs = {
  label: string;
  id: string;
  type: "line" | "post" | "arc" | "circle" | "rect";
  arcPath?: ArcInputs;
  unit: "ft" | "yd";
  topLeftX: number;
  topLeftY: number;
  length: number;
  width?: number;
  maxLength: any;
  orientation: "180" | "90" | "0";
};

export const Tennis: SVGInputs[] = [
  {
    label: "Background",
    id: "001",
    type: "rect",
    unit: "yd",
    topLeftX: tennis_startX,
    topLeftY: tennis_startY + tennis_postToDoublesSideline,
    length: tennis_baselineToBaseline,
    width: tennis_courtWidth,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Net",
    id: "001",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX + tennis_baselineToBaseline / 2,
    topLeftY: tennis_startY,
    length: tennis_courtWidth + tennis_postToDoublesSideline * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Post",
    id: "002",
    type: "post",
    unit: "ft",
    topLeftX: tennis_startX + tennis_alleyWidth / 2,
    topLeftY: tennis_startY,
    length: 0.5,
    maxLength: "-",
    orientation: "0",
  },
  {
    label: "Post",
    id: "003",
    type: "post",
    unit: "ft",
    topLeftX: tennis_startX + tennis_alleyWidth / 2,
    topLeftY:
      tennis_startY + tennis_postToDoublesSideline * 2 + tennis_courtWidth,
    length: 0.5,
    maxLength: "-",
    orientation: "0",
  },
  {
    label: "Doubles Sideline",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX,
    topLeftY: tennis_startY + tennis_postToDoublesSideline,
    length: tennis_baselineToBaseline,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Doubles Sideline",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX,
    topLeftY:
      tennis_startY +
      tennis_postToDoublesSideline +
      tennis_alleyWidth * 2 +
      tennis_singlesWidth,
    length: tennis_baselineToBaseline,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Singles Sideline",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX,
    topLeftY: tennis_startY + tennis_postToDoublesSideline + tennis_alleyWidth,
    length: tennis_baselineToBaseline,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Singles Sideline",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX,
    topLeftY:
      tennis_startY +
      tennis_postToDoublesSideline +
      tennis_alleyWidth +
      tennis_singlesWidth,
    length: tennis_baselineToBaseline,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Half Court Line",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX + tennis_serviceLineToBaseline,
    topLeftY:
      tennis_startY + tennis_postToDoublesSideline + tennis_courtWidth / 2,
    length: tennis_netToServiceLine * 2,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Service Line",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX + tennis_serviceLineToBaseline,
    topLeftY: tennis_startY + tennis_postToDoublesSideline + tennis_alleyWidth,
    length: tennis_courtWidth - tennis_alleyWidth * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Service Line",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX:
      tennis_startX +
      tennis_netToServiceLine * 2 +
      tennis_serviceLineToBaseline,
    topLeftY: tennis_startY + tennis_postToDoublesSideline + tennis_alleyWidth,
    length: tennis_courtWidth - tennis_alleyWidth * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Base Line",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX,
    topLeftY: tennis_startY + tennis_postToDoublesSideline,
    length: tennis_courtWidth,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Base Line",
    id: "xxx",
    type: "line",
    unit: "ft",
    topLeftX: tennis_startX + tennis_baselineToBaseline,
    topLeftY: tennis_startY + tennis_postToDoublesSideline,
    length: tennis_courtWidth,
    maxLength: "-",
    orientation: "180",
  },
];

const yardMultiplier = 3;
const soccer_startX = 0;
const soccer_startY = 0;
const soccer_maxWidth = 75 * yardMultiplier;
const soccer_minWidth = 55 * yardMultiplier;
const soccer_widthSingleSideVariation = (soccer_maxWidth - soccer_minWidth) / 2;
// const soccer_widthSingleSideVariation = 10;
const soccer_minLength = 100 * yardMultiplier;
const soccer_maxLength = 120 * yardMultiplier;
const soccer_lengthSingleSideVariation =
  (soccer_maxLength - soccer_minLength) / 2;
// const soccer_lengthSingleSideVariation = 2;
const soccer_penaltyAreaWidth = 44 * yardMultiplier;
const soccer_goalWidth = 8 * yardMultiplier;
const soccer_goalAreaHeight = 6 * yardMultiplier;
const soccer_goalAreaWidth = 20 * yardMultiplier;
const soccer_penaltyAreaHeight = 18 * yardMultiplier;
const soccer_penaltyMarkDistanceX = 12 * yardMultiplier;
const soccer_penaltyMarkDistanceLength = 2 * yardMultiplier;
const soccer_centerRadius = 10 * yardMultiplier;
const soccer_spotRadius = 0.25 * yardMultiplier;
const soccer_arcRadius = 2 * yardMultiplier;

export const Soccer: SVGInputs[] = [
  {
    label: "Background",
    id: "001",
    type: "rect",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY: soccer_startY,
    length: soccer_minLength + soccer_lengthSingleSideVariation * 2,
    width: soccer_minWidth + soccer_widthSingleSideVariation * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "HalfwayLine",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX + soccer_minLength / 2 + soccer_lengthSingleSideVariation,
    topLeftY: soccer_startY,
    length: soccer_minWidth + soccer_widthSingleSideVariation * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Goal Line",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY: soccer_startY,
    length: soccer_minWidth + soccer_widthSingleSideVariation * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Goal Line",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX + soccer_minLength + soccer_lengthSingleSideVariation * 2,
    topLeftY: soccer_startY,
    length: soccer_minWidth + soccer_widthSingleSideVariation * 2,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Touch Line",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY: soccer_startY,
    length: soccer_minLength + soccer_lengthSingleSideVariation * 2,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Touch Line",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY:
      soccer_startY + soccer_minWidth + soccer_widthSingleSideVariation * 2,
    length: soccer_minLength + soccer_lengthSingleSideVariation * 2,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Penalty Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_penaltyAreaWidth / 2,
    length: soccer_penaltyAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Penalty Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation +
      soccer_penaltyAreaWidth / 2,
    length: soccer_penaltyAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Penalty Area Width",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX + soccer_penaltyAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_penaltyAreaWidth / 2,
    length: soccer_penaltyAreaWidth,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Penalty Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX +
      soccer_minLength +
      soccer_lengthSingleSideVariation * 2 -
      soccer_penaltyAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_penaltyAreaWidth / 2,
    length: soccer_penaltyAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Penalty Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX +
      soccer_minLength +
      soccer_lengthSingleSideVariation * 2 -
      soccer_penaltyAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation +
      soccer_penaltyAreaWidth / 2,
    length: soccer_penaltyAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Penalty Area Width",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX +
      soccer_minLength +
      soccer_lengthSingleSideVariation * 2 -
      soccer_penaltyAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_penaltyAreaWidth / 2,
    length: soccer_penaltyAreaWidth,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Goal Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_goalAreaWidth / 2,
    length: soccer_goalAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Goal Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation +
      soccer_goalAreaWidth / 2,
    length: soccer_goalAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Goal Area Width",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX + soccer_goalAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_goalAreaWidth / 2,
    length: soccer_goalAreaWidth,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Goal Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX +
      soccer_minLength +
      soccer_lengthSingleSideVariation * 2 -
      soccer_goalAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_goalAreaWidth / 2,
    length: soccer_goalAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Goal Area Length",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX +
      soccer_minLength +
      soccer_lengthSingleSideVariation * 2 -
      soccer_goalAreaHeight,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation +
      soccer_goalAreaWidth / 2,
    length: soccer_goalAreaHeight,
    maxLength: "-",
    orientation: "90",
  },
  {
    label: "Goal Area Width",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX:
      soccer_startX +
      soccer_minLength +
      soccer_lengthSingleSideVariation * 2 -
      soccer_goalAreaHeight,

    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_goalAreaWidth / 2,
    length: soccer_goalAreaWidth,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Penalty Mark",
    id: "001",
    type: "line",
    unit: "yd",
    topLeftX: soccer_startX + soccer_penaltyMarkDistanceX,
    topLeftY:
      soccer_startY +
      soccer_minWidth / 2 +
      soccer_widthSingleSideVariation -
      soccer_penaltyMarkDistanceLength / 2,
    length: soccer_penaltyMarkDistanceLength,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Center",
    id: "001",
    type: "circle",
    unit: "yd",
    topLeftX:
      soccer_startX + soccer_minLength / 2 + soccer_lengthSingleSideVariation,
    topLeftY:
      soccer_startY + soccer_minWidth / 2 + soccer_widthSingleSideVariation,
    length: soccer_centerRadius,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Center Spot",
    id: "001",
    type: "circle",
    unit: "yd",
    topLeftX:
      soccer_startX + soccer_minLength / 2 + soccer_lengthSingleSideVariation,
    topLeftY:
      soccer_startY + soccer_minWidth / 2 + soccer_widthSingleSideVariation,
    length: soccer_spotRadius,
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Corner Radius",
    id: "001",
    type: "arc",
    unit: "yd",
    topLeftX: soccer_startX,
    topLeftY: soccer_startY,
    length: soccer_arcRadius,
    arcPath: {
      centerX: soccer_startX,
      centerY: soccer_startY,
      radius: soccer_arcRadius,
      orientation: "se",
    },
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Corner Radius",
    id: "001",
    type: "arc",
    unit: "yd",
    topLeftX: 0,
    topLeftY: 0,
    length: soccer_arcRadius,
    arcPath: {
      centerX:
        soccer_startX + soccer_minLength + soccer_lengthSingleSideVariation * 2,
      centerY: soccer_startY,
      radius: soccer_arcRadius,
      orientation: "sw",
    },
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Corner Radius",
    id: "001",
    type: "arc",
    unit: "yd",
    topLeftX: 0,
    topLeftY: 0,
    length: soccer_arcRadius,
    arcPath: {
      centerX:
        soccer_startX + soccer_minLength + soccer_lengthSingleSideVariation * 2,
      centerY:
        soccer_startY + soccer_minWidth + soccer_widthSingleSideVariation * 2,
      radius: soccer_arcRadius,
      orientation: "nw",
    },
    maxLength: "-",
    orientation: "180",
  },
  {
    label: "Corner Radius",
    id: "001",
    type: "arc",
    unit: "yd",
    topLeftX: 0,
    topLeftY: 0,
    length: soccer_arcRadius,
    arcPath: {
      centerX: soccer_startX,
      centerY:
        soccer_startY + soccer_minWidth + soccer_widthSingleSideVariation * 2,
      radius: soccer_arcRadius,
      orientation: "ne",
    },
    maxLength: "-",
    orientation: "180",
  },
];
