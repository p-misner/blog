type SvgTypes = {
  width?: number;
  height?: number;
  fillColor?: string;
};

export const ResetIcon = ({ width, height, fillColor }: SvgTypes) => {
  width = width ? width : 32;
  height = height ? height : 32;
  fillColor = fillColor ? fillColor : "#6E6C6C";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5324 8.46665C21.599 6.53331 18.9457 5.33331 15.999 5.33331C10.1057 5.33331 5.3457 10.1066 5.3457 16C5.3457 21.8933 10.1057 26.6666 15.999 26.6666C20.9724 26.6666 25.119 23.2666 26.3057 18.6666H23.5324C22.439 21.7733 19.479 24 15.999 24C11.5857 24 7.99904 20.4133 7.99904 16C7.99904 11.5866 11.5857 7.99998 15.999 7.99998C18.2124 7.99998 20.1857 8.91998 21.6257 10.3733L17.3324 14.6666H26.6657V5.33331L23.5324 8.46665Z"
        fill={fillColor}
      />
    </svg>
  );
};
export const ClickArrow = ({ width, height, fillColor }: SvgTypes) => {
  width = width ? width : 32;
  height = height ? height : 32;
  fillColor = fillColor ? fillColor : "#6E6C6C";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1331 11.5242L5.76562 5.0213"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.0152 11.673L15.0283 4"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.7782 12.8075H4"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.24986 10.1616L16.0518 25.8963C16.3982 26.6976 17.5331 26.7014 17.8849 25.9025L20.3798 20.2374C20.4801 20.0095 20.6619 19.8272 20.8895 19.7263L25.9381 17.487C26.731 17.1353 26.7308 16.01 25.9377 15.6586L10.5729 8.8505C9.74071 8.48177 8.88869 9.32611 9.24986 10.1616Z"
        fill={fillColor}
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25.8736 26.5369C26.26 26.9315 26.8931 26.9382 27.2877 26.5518C27.6824 26.1654 27.689 25.5323 27.3026 25.1377L25.8736 26.5369ZM18.8148 19.3279L25.8736 26.5369L27.3026 25.1377L20.2438 17.9287L18.8148 19.3279Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const HoverArrow = ({ width, height, fillColor }: SvgTypes) => {
  width = width ? width : 32;
  height = height ? height : 32;
  fillColor = fillColor ? fillColor : "#6E6C6C";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.3529" cy="10.3529" r="6.35294" fill="#6E6C6C" />
      <path
        d="M9.26792 10.5741L16.0549 25.9471C16.4045 26.7389 17.5267 26.7428 17.8817 25.9534L20.377 20.4052C20.4791 20.1781 20.6623 19.9973 20.8907 19.8981L25.887 17.7282C26.6894 17.3797 26.6892 16.2417 25.8867 15.8935L10.5808 9.25287C9.74577 8.89061 8.90032 9.74149 9.26792 10.5741Z"
        fill={fillColor}
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25.881 26.5895C26.2715 26.98 26.9047 26.98 27.2952 26.5895C27.6858 26.199 27.6858 25.5658 27.2952 25.1753L25.881 26.5895ZM18.8222 19.5307L25.881 26.5895L27.2952 25.1753L20.2364 18.1164L18.8222 19.5307Z"
        fill={fillColor}
      />
    </svg>
  );
};
export const ZoomIn = ({ width, height, fillColor }: SvgTypes) => {
  width = width ? width : 32;
  height = height ? height : 32;
  fillColor = fillColor ? fillColor : "#6E6C6C";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6667 18.6667H19.6133L19.24 18.3067C20.5467 16.7867 21.3333 14.8133 21.3333 12.6667C21.3333 7.88 17.4533 4 12.6667 4C7.88 4 4 7.88 4 12.6667C4 17.4533 7.88 21.3333 12.6667 21.3333C14.8133 21.3333 16.7867 20.5467 18.3067 19.24L18.6667 19.6133V20.6667L25.3333 27.32L27.32 25.3333L20.6667 18.6667ZM12.6667 18.6667C9.34667 18.6667 6.66667 15.9867 6.66667 12.6667C6.66667 9.34667 9.34667 6.66667 12.6667 6.66667C15.9867 6.66667 18.6667 9.34667 18.6667 12.6667C18.6667 15.9867 15.9867 18.6667 12.6667 18.6667ZM13.3333 9.33333H12V12H9.33333V13.3333H12V16H13.3333V13.3333H16V12H13.3333V9.33333Z"
        fill={fillColor}
      />
    </svg>
  );
};
export const ZoomOut = ({ width, height, fillColor }: SvgTypes) => {
  width = width ? width : 32;
  height = height ? height : 32;
  fillColor = fillColor ? fillColor : "#6E6C6C";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6667 18.6667H19.6133L19.24 18.3067C20.5467 16.7867 21.3333 14.8133 21.3333 12.6667C21.3333 7.88 17.4533 4 12.6667 4C7.88 4 4 7.88 4 12.6667C4 17.4533 7.88 21.3333 12.6667 21.3333C14.8133 21.3333 16.7867 20.5467 18.3067 19.24L18.6667 19.6133V20.6667L25.3333 27.32L27.32 25.3333L20.6667 18.6667ZM12.6667 18.6667C9.34667 18.6667 6.66667 15.9867 6.66667 12.6667C6.66667 9.34667 9.34667 6.66667 12.6667 6.66667C15.9867 6.66667 18.6667 9.34667 18.6667 12.6667C18.6667 15.9867 15.9867 18.6667 12.6667 18.6667ZM9.33333 12H16V13.3333H9.33333V12Z"
        fill={fillColor}
      />
    </svg>
  );
};
export const Share = ({ width, height, fillColor }: SvgTypes) => {
  width = width ? width : 32;
  height = height ? height : 32;
  fillColor = fillColor ? fillColor : "#6E6C6C";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 11.5C13 11.5 7.5 18 6.5 25C10 21.5 15.5 18.6667 19 19V24L28 15L19 7V11.5Z"
        fill="#6E6C6C"
      />
    </svg>
  );
};
