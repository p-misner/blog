import { keyframes } from "styled-components";
import styled from "styled-components";

const breatheAnimation = ($colors: {
  r: number;
  g: number;
  b: number;
}) => keyframes`
 0% {
    background: radial-gradient(
      ellipse at -10%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  10% {
    background: radial-gradient(
      ellipse at -5%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  20% {
    background: radial-gradient(
      ellipse at 0%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  30% {
    background: radial-gradient(
      ellipse at 5%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  40% {
    background: radial-gradient(
      ellipse at 10%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  50% {
    background: radial-gradient(
      ellipse at 15%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  60% {
    background: radial-gradient(
      ellipse at 10%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  70% {
    background: radial-gradient(
      ellipse at 5%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 5%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  80% {
    background: radial-gradient(
      ellipse at 0%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  90% {
    background: radial-gradient(
      ellipse at -5%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
  100% {
    background: radial-gradient(
      ellipse at -10%,
      ${`rgb(${$colors[0].r},${$colors[0].g},${$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`},
      ${`rgb(${$colors[$colors.length - 1].r},${
        $colors[$colors.length - 1].g
      },${$colors[$colors.length - 1].b})`}
    )
  }
`;
type PageWrapperType = {
  $colors: { r: number; g: number; b: number }[];
};
export const PageWrapper = styled.div<PageWrapperType>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.$colors[0]}; /* fallback for old browsers */
  position: relative;
  /* Chrome 10-25, Safari 5.1-6 */
  /* background: radial-gradient(
      ellipse at -10%,
      ${(props) =>
    `rgb(${props.$colors[0].r},${props.$colors[0].g},${props.$colors[0].b})`},
      transparent
    ),
    radial-gradient(
      ellipse at 80%,
      ${(props) =>
    `rgb(${props.$colors[props.$colors.length - 1].r},${
      props.$colors[props.$colors.length - 1].g
    },${props.$colors[props.$colors.length - 1].b})`},
      ${(props) =>
    `rgb(${props.$colors[props.$colors.length - 1].r},${
      props.$colors[props.$colors.length - 1].g
    },${props.$colors[props.$colors.length - 1].b})`}
    ); */
  animation-name: ${(props) => breatheAnimation(props.$colors)};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const ColorControls = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  /* max-he: 32px; */
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  padding: 8px;
  box-shadow: inset -2px 2px 8px rgba(0, 0, 0, 0.6);
`;
type ColorType = {
  color: { r: number; g: number; b: number };
};
export const ColorSquare = styled.div<ColorType>`
  border-radius: 8px;
  background-color: ${(props) =>
    `rgba(${props.color.r},${props.color.g},${props.color.b})`};
  height: 32px;
  width: 32px;
  box-shadow: inset -2px 2px 4px rgba(0, 0, 0, 0.24);
`;

export type ParentPositionType = {
  $parentPosition: DOMRect;
  width: number;
};

export const ColorSquareWrapper = styled.div`
  position: relative;
`;
export const ColorPickerWrapper = styled.div<ParentPositionType>`
  position: absolute;
  top: ${(props) => `${props.$parentPosition.bottom - 4}px`};
  right: ${(props) => `${0}px`};
  width: ${(props) => props.width};
  min-height: 300px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: inset -2px 2px 12px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;

export const CanvasWrapper = styled.canvas`
  /* width: 200px;
  height: 200px; */
`;
