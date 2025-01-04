import { keyframes } from "styled-components";

export type animationProps = {
  $topMargin: number;
  $animationStartPoint: number;
  $animationWidth: number;
  $speed?: number;
};

function returnPercent(
  $animationStartPoint: number,
  $animationWidth: number,
  $offset: number
) {
  return `${(
    100 * (1 - $animationStartPoint / $animationWidth) +
    $offset
  ).toString()}%`;
}

export const cloudmove = ({
  $topMargin,
  $animationStartPoint,
  $animationWidth,
}: animationProps) => keyframes`
  0% {
    margin-top: ${$topMargin}px;
    margin-left: ${$animationStartPoint}vw; 
    opacity: 1;
    }
    // reaches end of screen
  ${returnPercent($animationStartPoint, $animationWidth, 0)}{
    margin-top: ${$topMargin}px;
    margin-left: ${$animationWidth}vw ;
    opacity: 1;
  }
  
  // change opacity to 0; maintain position
  ${returnPercent($animationStartPoint, $animationWidth, 1)}{
      margin-left: ${$animationWidth}vw ;
    opacity: 0;
  }
  // maintain opacity; change position
  ${returnPercent($animationStartPoint, $animationWidth, 2)}{
      margin-left:  ${0}vw ;
    opacity: 0;
  }
  // reset opacity
  ${returnPercent($animationStartPoint, $animationWidth, 3)}{
      opacity: 1;
  }
  
  100%{
    margin-top: ${$topMargin}px;
    margin-left: ${$animationStartPoint}vw; 
    opacity: 1;}
  `;

export const hillmove = ({
  $topMargin,
  $animationStartPoint,
  $animationWidth,
}: animationProps) => keyframes`
  0% {
      margin-top: ${-1 * $topMargin}px;
    margin-left: ${$animationStartPoint}vw;
    opacity: 1;
    }
  // reaches end of screen
  ${(100 * (1 - $animationStartPoint / $animationWidth)).toString() + "%"}{
    margin-left: ${$animationWidth}vw ;
    opacity: 1;
  }
  
  // change opacity to 0; maintain position
  ${(100 * (1 - $animationStartPoint / $animationWidth) + 1).toString() + "%"}{
    margin-left: ${$animationWidth}vw ;
    opacity: 0;
  }
  // maintain opacity; change position
  ${(100 * (1 - $animationStartPoint / $animationWidth) + 2).toString() + "%"}{
    margin-left:  ${0}vw ;
    opacity: 0;
  }
  // reset opacity
   ${(100 * (1 - $animationStartPoint / $animationWidth) + 3).toString() + "%"}{
    opacity: 1;
  }
  100%{
      margin-top: ${-1 * $topMargin}px;
    margin-left: ${$animationStartPoint}vw;
    opacity: 1;}
  `;

export const tirerotate = keyframes`
    0%{ transform:rotate(0deg)}
    100%{transform: rotate(-360deg)}
`;
export const bodybounce = keyframes`
    0%{ transform:translate(0px, 0px);transform: rotate(1.5deg) }
    25%{transform: translate(0px, -12px)}
    50%{transform: translate(0px,0px);transform: rotate(-.5deg)}
    75%{transform: translate(0px, -20px)}

    100%{ transform:translate(0px, 0px);transform: rotate(1.5deg) }

`;
